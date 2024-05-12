user_name = localStorage.getItem("user_name");

const firebaseConfig = {
    apiKey: "AIzaSyDUh03F_qIciB_o5gYjUDS7XG4frj5pobU",
    authDomain: "kwitter-a6366.firebaseapp.com",
    projectId: "kwitter-a6366",
    storageBucket: "kwitter-a6366.appspot.com",
    messagingSenderId: "314298468581",
    appId: "1:314298468581:web:d689d52fb9553a69bfac0c"
  };
  
function getData(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
    });
}
