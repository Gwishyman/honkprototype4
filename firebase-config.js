const firebaseConfig = {
  apiKey: "AIzaSyAv5u9HIhVmXu1qi_5hiNKcoxWs2YDC2f0",
  authDomain: "honk-16869.firebaseapp.com",
  databaseURL: "https://honk-16869-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "honk-16869",
  storageBucket: "honk-16869.firebasestorage.app",
  messagingSenderId: "561612681140",
  appId: "1:561612681140:web:64cb008b0730a22a408ce1",
  measurementId: "G-7KGT1FY7SQ"
};

firebase.initializeApp(firebaseConfig);
window.auth = firebase.auth();
window.db = firebase.database();