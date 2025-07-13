import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7j1pNmmPtGK9sWJlZtrctH8em9cfa174",
  authDomain: "expense-tracker-7149f.firebaseapp.com",
  projectId: "expense-tracker-7149f",
  storageBucket: "expense-tracker-7149f.firebasestorage.app",
  messagingSenderId: "856830814285",
  appId: "1:856830814285:web:68898f94f2407709b35404"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

googleProvider.addScope('profile');
googleProvider.addScope('email');