
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAj8L9WUawUM_M95YK6ZsXk14OXGoX0gi4",
      authDomain: "skitter-8aa5c.firebaseapp.com",
      databaseURL: "https://skitter-8aa5c-default-rtdb.firebaseio.com",
      projectId: "skitter-8aa5c",
      storageBucket: "skitter-8aa5c.appspot.com",
      messagingSenderId: "606077583674",
      appId: "1:606077583674:web:dd8e265d32071ead565003"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

     function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){

      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}