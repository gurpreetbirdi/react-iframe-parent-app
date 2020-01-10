import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import config from './config/api';

import * as serviceWorker from './serviceWorker';

let body = document.getElementsByTagName('body')[0];
let jsUrls = config.CHILDAPPS_URL.JSURLS;
let jsPromises, promises;

// dynamically add script tag for child apps on the run
jsPromises = jsUrls.map(jsUrl => {
  return new Promise((resolve, reject) => {
    let tag = document.createElement('script');
    tag.type = 'text/javascript';
    tag.src = jsUrl;
    tag.async = true;
    tag.onload = () => {
      resolve();
    };
    body.appendChild(tag);
  });
});

promises = jsPromises;

Promise.all(promises).then(function () {
  ReactDOM.render(<App />, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
