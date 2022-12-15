
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBlQWgZNgT4W0DQf3ICClgc3BXOmIKMGQs",
      authDomain: "kwitter-c0737.firebaseapp.com",
      databaseURL: "https://kwitter-c0737-default-rtdb.firebaseio.com",
      projectId: "kwitter-c0737",
      storageBucket: "kwitter-c0737.appspot.com",
      messagingSenderId: "743604001096",
      appId: "1:743604001096:web:bd32d0f8d148ae1e517b7d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var userName = localStorage.getItem("userName")
    document.getElementById("user_name").innerHTML = "Welcome " + userName + " !"
    function addRoom()
    {
      roomName = document.getElementById("room_name").value
      firebase.database().ref("/").child(roomName).update({
            purpose: "adding room name"
      })
      localStorage.setItem("roomName" , roomName)
      window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row = "<div class = 'room_name' id = '" + Room_names + "' onclick = 'redirectRoom(this.id)'>" + Room_names + "</div> <hr>"
      document.getElementById("output").innerHTML+=row 
      //End code
      });});}
getData();
function redirectRoom(name)
{
      console.log(name)
      localStorage.setItem("roomName" , name)
      window.location = "kwitter_page.html"
}
function logOut()
{
      localStorage.removeItem("roomName")
      localStorage.removeItem("userName")
      window.location = "index.html"
}
