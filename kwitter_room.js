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
      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome   "+ user_name +"!";
room_name=localStorage.getItem("room_name");



      function getData() 
      {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData()
    
function addroom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room_name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";


}

function logout()
 {
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");

window.location = "index.html";
 }










































































