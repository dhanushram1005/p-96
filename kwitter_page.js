//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAeB4YUh57Hkp2NLdIBznmxJu4OFEcs-Vo",
      authDomain: "hero-stores.firebaseapp.com",
      databaseURL: "https://hero-stores-default-rtdb.firebaseio.com",
      projectId: "hero-stores",
      storageBucket: "hero-stores.appspot.com",
      messagingSenderId: "975814235518",
      appId: "1:975814235518:web:b25d9bd6cc6a2c73154f2f",
      measurementId: "G-MFDCHLXLWY"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
     msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
     });
        document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}