import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

// const firebaseConfig = {                                          //first db test prodction made 15/10/24
//     apiKey: "AIzaSyDGmVBx5LAYJuIq_Ni1nZBenfcVUFX-SyY",            // doesnt work :(              17/10/24
//     authDomain: "ecommerce-with-react-2ac06.firebaseapp.com",
//     databaseURL: "https://ecommerce-with-react-2ac06.firebaseio.com",
//     projectId: "ecommerce-with-react-2ac06",
//     storageBucket: "ecommerce-with-react-2ac06.appspot.com",
//     messagingSenderId: "690603499200",
//     appId: "1:690603499200:web:09860bc318b5b7fd74d725",
//     measurementId: "G-88N35MC51Q"
// };

                                                            // 2 day break for mental health 
const firebaseConfig = {                                           //new db try 19/10/24  
    apiKey: "AIzaSyBfL5q638Z_iGOZ6OEJOgRZLE1qRuE7dvs",             // it works 24/10/24  :)       
    projectId: "project-5342026161857140413",
    storageBucket: "project-5342026161857140413.appspot.com",     // use test mode in firebase  make firestore first and add collection of products
    authDomain: "project-5342026161857140413.firebaseapp.com",    // Also use 
    messagingSenderId: "264664535933",
    appId: "1:264664535933:web:38504a4945e0f3e862b214"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }