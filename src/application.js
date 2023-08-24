/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable newline-per-chained-call */
import i18next from 'i18next';
import onChange from 'on-change';
import * as yup from 'yup';
import axios from 'axios';
import _ from 'lodash';
import render from './render.js';
import parser from './rssParser.js';
import resources from './locales/index.js';

const app = (i18nInstance) => {
  const initialState = {
    valid: false,
    inputValue: '',
    process: {
      processState: 'filling',
      error: '',
    },
    content: {
      posts: [],
      feeds: [],
    },
    uiState: {
      visitedLinksIds: new Set(),
    },
  };

  const getAxiosResponse = (url) => {
    const allOrigins = 'https://allorigins.hexlet.app/get';
    const newUrl = new URL(allOrigins);
    newUrl.searchParams.set('url', url);
    newUrl.searchParams.set('disableCache', 'true');
    return axios.get(newUrl);
  };

  const validate = (url, urlList) => {
    const schema = yup.string().trim().required().url().notOneOf(urlList);
    return schema.validate(url);
  };

  const createPosts = (state, newPosts, feedId) => {
    newPosts.forEach((post) => {
      post.feedId = feedId;
      post.id = _.uniqueId();
      post.readOut = false;
    });
    state.content.posts.push(...newPosts);
  };

  const getNewPosts = (state) => {
    const promises = state.content.feeds.map(({ link, feedId }) =>
      getAxiosResponse(link)
        .then((response) => {
          const { posts } = parser(response.data.contents);
          const addedPosts = state.content.posts.map((post) => post.link);
          const newPosts = posts.filter((post) => !addedPosts.includes(post.link));
          if (newPosts.length > 0) {
            createPosts(state, newPosts, feedId);
          }
          return Promise.resolve();
        })
        .catch((e) => console.log(e)),
    );

    Promise.allSettled(promises).finally(() => {
      setTimeout(() => getNewPosts(state), 5000);
    });
  };

  const feedSection = document.querySelector('.feeds');
  const postSection = document.querySelector('.posts');
  const modalWindow = document.querySelector('.modal-content');
  const feedbackEl = document.querySelector('.feedback');
  const rssForm = document.querySelector('.rss-form');
  const input = rssForm.querySelector('#url-input');
  const elements = { input, feedbackEl, feedSection, postSection, modalWindow };
  const watchedState = onChange(initialState, () => render(elements, initialState, i18nInstance));
  getNewPosts(watchedState);

  rssForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const currentUrl = input.value;
    const feedLinks = initialState.content.feeds.map((feed) => feed.link);
    watchedState.process.processState = 'submitted';
    validate(currentUrl, feedLinks)
      .then((validUrl) => {
        getAxiosResponse(validUrl).then((response) => {
          try {
            const { posts, feed } = parser(response.data.contents);
            const feedId = _.uniqueId();
            createPosts(initialState, posts, feedId);
            watchedState.valid = true;
            watchedState.content.feeds.push({ ...feed, feedId, link: validUrl });
            watchedState.process.processState = 'finished';
          } catch (e) {
            watchedState.valid = false;
            watchedState.process.error = e;
            watchedState.process.processState = 'finished';
          }
        });
      })
      .catch((e) => {
        watchedState.valid = false;
        watchedState.process.error = e;
        watchedState.process.processState = 'finished';
      });
  });

  postSection.addEventListener('click', (e) => {
    const id = e.target.getAttribute('data-id');
    if (id) {
      watchedState.uiState.visitedLinksIds.add(id);
    }
  });
};

export default () => {
  const i18nextInstance = i18next.createInstance();
  i18nextInstance.init({ lng: 'ru', resources });
  app(i18nextInstance);
};
