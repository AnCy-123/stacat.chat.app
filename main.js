var firebaseConfig = {
    apiKey: "AIzaSyDZnbCtsFTq8OUsoeXexykUsVDf1Mbpnbo",
    authDomain: "kwitter-204da.firebaseapp.com",
    projectId: "kwitter-204da",
    storageBucket: "kwitter-204da.appspot.com",
    messagingSenderId: "759126222393",
    appId: "1:759126222393:web:6f07362eb740251b6ccfe8",
    measurementId: "G-GSGV6LS6B6",
    databaseURL: "https://kwitter-204da-default-rtdb.firebaseio.com/"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var usern = localStorage.getItem("un");
document.getElementById("name").innerHTML = "Welcome " + usern + "!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

function addRoom() {
    var roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
        purpose: "Adding Room"
    });
    localStorage.setItem("roomname", roomname);
    window.location = "chat.html";
}
var date = new Date;

function getData() {
    firebase.database().ref().on('value', function (snapshot) {
        document.getElementById("holder").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            var roomnames = childKey;
            console.log("Room Name - " + roomnames);
            var row = "<div class='inner' id=" + roomnames + " onclick='redirectToRoom(this.id)'> " + roomnames + " - Created By " + usern + " On " + date.getDate() + " / " 
            + date.getMonth() + " / " + date.getFullYear() +"</div>";
            document.getElementById("holder").innerHTML += row;
        });
    });
}
getData();
function redirectToRoom(name) {
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location = "chat.html";
}
