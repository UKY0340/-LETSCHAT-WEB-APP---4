var firebaseConfig = {
    apiKey: "AIzaSyApCLrnZuMt_LFsZwUqfjYcjRWw-EIFr5I",
    authDomain: "kwitter-c94-8132c.firebaseapp.com",
    databaseURL: "https://kwitter-c94-8132c-default-rtdb.firebaseio.com",
    projectId: "kwitter-c94-8132c",
    storageBucket: "kwitter-c94-8132c.appspot.com",
    messagingSenderId: "402966877855",
    appId: "1:402966877855:web:86453f193e41e4c55ef4aa",
    measurementId: "G-F3VHEVVJM2"
  };
      firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name",user_name);
window.location= "kwitter_room.html";



}
function logout()
 {
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");

window.location = "index.html";
 }
