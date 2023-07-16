import { getAuth } from "firebase/auth/cordova";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAp4-v-ff0JMf0mbYBfn2awa6HjWDio-AY",
  authDomain: "ecommerce-api-d47f1.firebaseapp.com",
  databaseURL: "https://ecommerce-api-d47f1-default-rtdb.firebaseio.com",
  projectId: "ecommerce-api-d47f1",
  storageBucket: "ecommerce-api-d47f1.appspot.com",
  messagingSenderId: "533995679901",
  appId: "1:533995679901:web:a1ec6dff3c9982afd6a474",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
