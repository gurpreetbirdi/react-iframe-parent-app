import React from 'react';
// import logo from './logo.svg';

import Main from './components/main/Main';
import config from './config/api';

function App() {
  // let body = document.getElementsByTagName('body')[0];
  // let jsUrls = config.CHILDAPPS_URL.JSURLS;
  // let jsPromises, promises;

  // // dynamically add script tag for child apps on the run
  // jsPromises = jsUrls.map(jsUrl => {
  //   return new Promise((resolve, reject) => {
  //     let tag = document.createElement('script');
  //     tag.type = 'text/javascript';
  //     tag.src = jsUrl;
  //     tag.async = true;
  //     tag.onload = () => {
  //       resolve();
  //     };
  //     body.appendChild(tag);
  //   });
  // });

  // promises = jsPromises;

  // Promise.all(promises).then(function () {
  // });
  return (
    <Main />
  );
}

export default App;
