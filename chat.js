var firebaseConfig = {
    apiKey: "AIzaSyDZnbCtsFTq8OUsoeXexykUsVDf1Mbpnbo",
    authDomain: "kwitter-204da.firebaseapp.com",
    databaseURL: "https://kwitter-204da-default-rtdb.firebaseio.com",
    projectId: "kwitter-204da",
    storageBucket: "kwitter-204da.appspot.com",
    messagingSenderId: "759126222393",
    appId: "1:759126222393:web:6f07362eb740251b6ccfe8",
    measurementId: "G-GSGV6LS6B6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");
document.getElementById("room").innerHTML = roomname;
function send() {
    msg = document.getElementById("chat").value;
    firebase.database().ref(roomname).push({
        name: username,
        msg: msg,
        like: 0
    });
    document.getElementById("chat").innerHTML = "";
}
 