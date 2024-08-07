import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.ASTRO_FIREBASE_API_KEY,
  authDomain: import.meta.env.ASTRO_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.ASTRO_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.ASTRO_FIREBASE_STORGAE_BUCKET,
  messagingSenderId: import.meta.env.ASTRO_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.ASTRO_FIREBASE_APP_ID,
  measurementId: import.meta.env.ASTRO_FIREBASE_MEASURAMENT_ID
};

const app = initializeApp(firebaseConfig);

export {app}
