import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBj5F84kqwfrE59xV8GAvJqgmqDeh7LRvQ",
  authDomain: "quran-application-3cd79.firebaseapp.com",
  projectId: "quran-application-3cd79",
  storageBucket: "quran-application-3cd79.appspot.com",
  messagingSenderId: "874986521044",
  appId: "1:874986521044:web:3f33ec03626795c94f1641",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
