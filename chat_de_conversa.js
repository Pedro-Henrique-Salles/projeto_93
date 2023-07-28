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
var nome_da_sala=localStorage.getItem("nome_da_sala");

function enviar_mensagem() {
    var mensagem_do_usuario=document.getElementById("mensagem").value;
    firebase.database().ref(nome_da_sala).push({
        name:nome_do_usuario,
        message:mensagem_do_usuario,
        like:0
    });
    mensagem_do_usuario="";
}


  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("salas").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
var childData=childSnapshot.val();
if (childKey!="purpose") {
    var id_msg_firebase=childKey;
}
//Início do código
var caixa="<div id='"+roomNames+"' onclick='redirecionar_sala(this.id)'>"+roomNames+"</div> <hr>";
document.getElementById("salas").innerHTML+=caixa;
//Fim do código
});});}
getData();


function redirecionar_sala(name)
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