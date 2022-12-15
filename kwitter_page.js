//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("roomName")
    function send()
    {
      msg = document.getElementById("message").value
      firebase.database().ref(room_name).push({
            name: userName , message: msg , like: 0 
      })
      document.getElementById("message").value = ""
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name = message_data['name']
message = message_data['message']
like = message_data['like']
name_with_tag = "<h4>"+name+"<img class = 'user_tick' src = 'tick.png'></h4>"
message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>"
like_button = "<button class = 'btn btn-warning' id ="+firebase_message_id+" value="+like+" onclick = 'updateLike(this.id)'>"
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button>"
row = name_with_tag + message_with_tag + like_button +span_with_tag
document.getElementById("output").innerHTML += row
//End code
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("roomName")
      localStorage.removeItem("userName")
      window.location = "index.html"
}
function updateLike(message_id)
{
      console.log("clicked on like button - "+message_id)
      button_id = message_id
      likes = document.getElementById(button_id).value
      updated_likes = Number(likes) + 1
      console.log(updated_likes)
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      })
}
