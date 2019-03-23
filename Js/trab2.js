function adiciona(){

  var item = document.getElementById('entrada')

  lista.innerHTML = lista.innerHTML + "<li>" + item.value + "</li>";

}

function acende(){


  if(document.getElementById('lampada').src == "Jleite10.github.io/Js/lampada_off.gif"){
    document.getElementById('lampada').src = "Jleite10.github.io/Js/lampada_on.gif";
  }
  else {
    document.getElementById('lampada').src = "Jleite10.github.io/Js/lampada_off.gif";
  }

    }
