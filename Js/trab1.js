function ocultar(e, e2){


  var x = document.getElementById(e);
  document.getElementById(e2).textContent = "Ocultar Conteúdo";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementById(e2).textContent = "Exibir Conteúdo ";
  }

}
