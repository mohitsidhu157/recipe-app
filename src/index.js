import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase = require('firebase');
  require('firebase/firestore');
  const firebaseConfig = {
    apiKey: "AIzaSyBn_7QExcAdkJ3NIYUU4phWZnDdY3j-KWc",
    authDomain: "evernote-clone-ebcdd.firebaseapp.com",
    databaseURL: "https://evernote-clone-ebcdd.firebaseio.com",
    projectId: "evernote-clone-ebcdd",
    storageBucket: "evernote-clone-ebcdd.appspot.com",
    messagingSenderId: "935880973879",
    appId: "1:935880973879:web:9b49de37a795673a6529b2",
    measurementId: "G-C8LWBSH4HK"
  };

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
