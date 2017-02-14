function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    	if (tecla==8 || tecla==0) return true;
	else  return false;
    }
}
function verificador(){
   var formulario =document.getElementById("unicos");;
  	if (formulario.uf.value.length<1) {
  		alert("INFORME O UF");
        return(false);
  	}
  	if (formulario.horario.value.length<1) {
  		alert("INFORME A HORA");
        return(false);
  	}
  	if (formulario.horario.value > 24) {
  		alert("INFORME UMA HORA ENTRE 00 - 23");
        return(false);
  	}
  	else{
  		window.location.href= "map.html"
  	}
}

