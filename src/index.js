import Firebase from 'firebase';// Initialize Firebase
import {DB_KEY} from '@env'
const firebaseConfig = {
  apiKey: DB_KEY,
  authDomain: "outspeak-1.firebaseio.com/",
  databaseURL: "https://outspeak-1.firebaseio.com/",
  projectId: "outspeak-1",
  storageBucket: "",
};
//console.log(Firebase.apps.length);
Firebase.initializeApp(firebaseConfig);
const db = Firebase.database();
//console.log(Firebase.apps.length);

export default db
//export const db = Firebase.apps.length === 0 ? Firebase.initializeApp(firebaseConfig) : Firebase.database();