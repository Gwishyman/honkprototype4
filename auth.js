import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js"
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js"

const firebaseConfig = {
  apiKey: "AIzaSyAv5u9HIhVmXu1qi_5hiNKcoxWs2YDC2f0",
  authDomain: "honk-16869.firebaseapp.com",
  databaseURL: "https://honk-16869-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "honk-16869",
  storageBucket: "honk-16869.appspot.com",
  messagingSenderId: "561612681140",
  appId: "1:561612681140:web:64cb008b0730a22a408ce1",
  measurementId: "G-7KGT1FY7SQ"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

function logout() {
  return signOut(auth)
}

function deleteCurrentUser() {
  return deleteUser(auth.currentUser)
}

export {
  auth,
  db,
  storage,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  logout,
  deleteCurrentUser,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
}