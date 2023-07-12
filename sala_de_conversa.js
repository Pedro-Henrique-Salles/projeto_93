const firebaseConfig = {
    apiKey: "AIzaSyDql8GV0B255KRSkm1XaXLn80E1Id6csV0",
    authDomain: "projeto-93-d5e4f.firebaseapp.com",
    databaseURL: "https://projeto-93-d5e4f-default-rtdb.firebaseio.com",
    projectId: "projeto-93-d5e4f",
    storageBucket: "projeto-93-d5e4f.appspot.com",
    messagingSenderId: "187685597309",
    appId: "1:187685597309:web:67eeb4733d3c1f2d244114"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var nome_do_usuario=localStorage.getItem("nome_do_usuario");
document.getElementById("nome_do_usuario").innerHTML="bem vindo(a) "+nome_do_usuario ;

function criar_uma_sala()
{
  var nome_da_sala= document.getElementById("nome_da_sala").value;

  firebase.database().ref("/").child(nome_da_sala).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("nome_da_sala", nome_da_sala);
    
    window.location = "chat_de_conversa.html";
}


  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código

//Fim do código
});});}
getData();


function redirectToNome_da_sala(name)
{
  console.log(name);
  localStorage.setItem("nome_da_sala", name);
    window.location = "chat_de_conversa.html";
}


function sair() {
  localStorage.removeItem("nome_do_usuario");
  localStorage.removeItem("nome_da_sala");
      window.location = "index.html";
  }