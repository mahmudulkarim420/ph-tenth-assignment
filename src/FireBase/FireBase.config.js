import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmHWsFrQTBzertUezqgrFthQdYGTMgufs",
  authDomain: "ph-tenth-assignment-7c08c.firebaseapp.com",
  projectId: "ph-tenth-assignment-7c08c",
  storageBucket: "ph-tenth-assignment-7c08c.appspot.com",
  messagingSenderId: "692955562773",
  appId: "1:692955562773:web:78843ceeb733ead6709f1c"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Named export
export { app };
