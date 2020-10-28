import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import config from './config/api';

import * as serviceWorker from './serviceWorker';

const body = document.getElementsByTagName('body')[0];
const jsUrls = config.CHILDAPPS_URL.JSURLS;

// dynamically add script tag for child apps on the run
const jsPromises = jsUrls.map(jsUrl => {
  return new Promise((resolve, reject) => {
    const tag = document.createElement('script');
    tag.type = 'text/javascript';
    tag.src = jsUrl;
    tag.async = true;
    let loaded = false;
    tag.onload = () => {
      loaded = true;
      resolve();
    };
    body.appendChild(tag);
    if (!loaded) {
      reject(new Error(`please check if ${jsUrl} is working!`));
    }
  });
});

const promises = jsPromises;

Promise.allSettled(promises).then(results => {
  results.forEach(result => {
    if (result.status === 'rejected') {
      console.error(result.reason);
    }
  });
  ReactDOM.render(<App />, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
