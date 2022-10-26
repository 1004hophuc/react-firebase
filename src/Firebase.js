import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyANfoLDGZsVAl8NwHJUlgLrUynJJMaSsg0",
//   authDomain: "auth-8b1ef.firebaseapp.com",
//   projectId: "auth-8b1ef",
//   storageBucket: "auth-8b1ef.appspot.com",
//   messagingSenderId: "445273762769",
//   appId: "1:445273762769:web:81f403cae7cb5fe3760ef0",
// };

const firebaseConfig = {
  apiKey: 'AIzaSyC-5i4ESjljlyks6eU5qyMZQbeCabCjaLE',
  authDomain: 'coin-halo-cc2b8.firebaseapp.com',
  projectId: 'coin-halo-cc2b8',
  storageBucket: 'coin-halo-cc2b8.appspot.com',
  messagingSenderId: '528332246617',
  appId: '1:528332246617:web:abaa79ff614172693dab48',
  measurementId: 'G-T1V1TG0KBX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      axios
        .post('http://localhost:5000/api/profile/login', {
          email: result.user.email,
          accessToken: result.user.uid,
        })
        .then((response) => {
          console.log('response: ', response.data);
          // const name = response.data.result.user.displayName;
          // const email = result.user.email;
          // const profilePic = result.user.photoURL;
          // localStorage.setItem('name', name);
          // localStorage.setItem('email', email);
          // localStorage.setItem('profilePic', profilePic);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
