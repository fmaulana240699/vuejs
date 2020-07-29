import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDeVebBSXdr_Ce6GPauesxkMptOPMqaX0A",
    authDomain: "chatvue-final.firebaseapp.com",
    databaseURL: "https://chatvue-final.firebaseio.com",
    projectId: "chatvue-final",
    storageBucket: "chatvue-final.appspot.com",
    messagingSenderId: "945828768701",
    appId: "1:945828768701:web:5837ede2c765209e5cc0d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //Initialize cloud firestore trough firebase
  var db = firebase.firestore();

  window.db = db;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
