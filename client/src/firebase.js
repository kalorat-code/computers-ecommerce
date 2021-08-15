import firebase from 'firebase/app';
import 'firebase/auth';

// web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB5nFbOnYYMg_Bmog333_cT7l7Gp5oHtnM',
	authDomain: 'ecommerce-ec4af.firebaseapp.com',
	projectId: 'ecommerce-ec4af',
	storageBucket: 'ecommerce-ec4af.appspot.com',
	messagingSenderId: '24176220245',
	appId: '1:24176220245:web:9b28aa4497634a73b69cdc',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
