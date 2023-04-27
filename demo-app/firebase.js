// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
    FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    SENDER_ID,
    APP_ID,
} from "@env"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: SENDER_ID,
    appId: APP_ID,
};
console.log({ FIREBASE_API_KEY });
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
