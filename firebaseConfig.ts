import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkiLmhvJjPzM4rpR6S6C4ZstRfnugKCuA",
  authDomain: "vajradhara-ecom.firebaseapp.com",
  projectId: "vajradhara-ecom",
  storageBucket: "vajradhara-ecom.appspot.com",
  messagingSenderId: "581964566742",
  appId: "1:581964566742:web:deb9963cb653684de43977",
  measurementId: "G-XS89Q2VW7C",
};

// Initialize Firebase
export const app =
  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

// ====================== Service account method ===============
// service account method is used for using firebase stuff between servers.

// import admin from "firebase-admin";
// import serviceAccount from "./vajradhara-ecom-firebase-adminsdk-tdod5-87f4c6f605.json";
// import { ServiceAccount } from "firebase-admin";

// const serviceAccountCredentials: ServiceAccount =
//   serviceAccount as ServiceAccount;

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccountCredentials),
//   });
// }

// const firebaseAdmin = admin.app();

// export default firebaseAdmin;
