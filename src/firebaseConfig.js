
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDvmRvbiRB-zsmZ28DvPv0xhOCCAh2TakY",
  authDomain: "findhire-f73e5.firebaseapp.com",
  projectId: "findhire-f73e5",
  storageBucket: "findhire-f73e5.appspot.com",
  messagingSenderId: "213929850008",
  appId: "1:213929850008:web:feed500eec4441ab10cced",
  measurementId: "G-Q2MKW1QM1P"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);