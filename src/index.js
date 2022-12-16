import {initializeApp} from 'firebase/app';
import {getFirestore} from  'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCz7_FdJe8l7n7o2caytB_MUwGfBkVdMM0",
    authDomain: "brutalism-web-template.firebaseapp.com",
    projectId: "brutalism-web-template",
    storageBucket: "brutalism-web-template.appspot.com",
    messagingSenderId: "510997235274",
    appId: "1:510997235274:web:4e31a518d6290e51ab48b3"
})

const db = getFirestore(firebaseApp);
console.log("hello, world");