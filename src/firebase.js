import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

/* code from our Firebase console */
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;