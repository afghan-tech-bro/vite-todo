import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/* code from our Firebase console */
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;