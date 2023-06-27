function adicionar_usuario(){
    var nome_usuario=document.getElementById("usuario_nome").value;
    localStorage.setItem("nome_do_usuario", nome_usuario);
    window.location="sala_de_conversa.html";
}