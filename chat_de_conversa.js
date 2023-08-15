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


  function getData() {firebase.database().ref("/"+nome_da_sala).on('value',
function(snapshot) {document.getElementById("mensagens").innerHTML ="";
snapshot.forEach(function(childSnapshot) {childKey =childSnapshot.key;
var childData=childSnapshot.val();
if (childKey!="purpose") {
    var id_msg_firebase=childKey;
    var dado_da_msg=childData;
    var nome_usuario=dado_da_msg["name"];
    var mensagem_usuario=dado_da_msg["message"];
    var curtidas=dado_da_msg["like"];
    var tag_nome_do_usuario="<h4>"+nome_usuario+"</h4>";
    var tag_mensagem="<h4>"+mensagem_usuario+"</h4>";
    var tag_btn_like="<button id='"+id_msg_firebase+"' value='"+curtidas+"' onclick='atuliza_like(this.id)'>";
    var tag_span="<span class='glyphicon glyphicon-thumbs-up'>like: "+curtidas+"</span> </button> <hr>";
    var caixa=tag_nome_do_usuario+tag_mensagem+tag_btn_like+tag_span;
    document.getElementById("mensagens").innerHTML+=caixa;
  }

});});}
getData();


//function atualiza_like
function atualiza_like(id_da_mensagem){
  var id_btn=id_da_mensagem;
  var numeros_curtidas=document.getElementById(id_btn).value;
  var atualiza_like=Number(numeros_curtidas)+1;
  firebase.database().ref(nome_da_sala).child(id_da_mensagem).update({
    like:atualiza_like
  });
}


function sair() {
  localStorage.removeItem("nome_do_usuario");
  localStorage.removeItem("nome_da_sala");
      window.location = "index.html";
  }