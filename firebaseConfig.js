
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDsLTUhAijFWB_T7r20tSrFfY14KBfVZEw",
    authDomain: "resume-builder-ai-enhance.firebaseapp.com",
    projectId: "resume-builder-ai-enhance",
    storageBucket: "resume-builder-ai-enhance.firebasestorage.app",
    messagingSenderId: "201111971225",
    appId: "1:201111971225:web:07eef4a430ddc834c11f08",
    measurementId: "G-VS7T0DT2QC"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);