import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWXtrPZ2JxMlT8ih2QOea5OQylKYue5JI",
  authDomain: "cheese-bread-store.firebaseapp.com",
  projectId: "cheese-bread-store",
  storageBucket: "cheese-bread-store.firebasestorage.app",
  messagingSenderId: "937526387871",
  appId: "1:937526387871:web:c070488e5468b04ef4aeaa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);