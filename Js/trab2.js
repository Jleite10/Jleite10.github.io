function adiciona(){

  var item = document.getElementById('entrada')

  lista.innerHTML = lista.innerHTML + "<li>" + item.value + "</li>";

}

function acende(){


  if(document.getElementById('lampada').src.match("lampada_off.gif")){
    document.getElementById('lampada').src = "lampada_on.gif";
  }
  else {
    document.getElementById('lampada').src = "lampada_off.gif";
  }

    }
