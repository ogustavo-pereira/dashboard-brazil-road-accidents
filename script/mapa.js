/*
Copyright (c) 2017 Gustavo Henrique Pereira
https://github.com/guhpereira
*/
function Verificador(){
    var formulario =document.getElementById("unicos");
    var horas=formulario.horario.value;
    var uf=formulario.uf.value;

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

  		Initialize();
  		CarregarPontos(uf,horas);
	}

}



var map;
function Initialize() {
	
    var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);

    var options = {
        zoom: 4,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("mapa"), options);
    
}
function CarregarPontos(uf,horas) {
 var teste;
 uf=uf.toUpperCase()
if(uf==mg[1].uf){
	teste=mg;
}
if(uf==al[1].uf){
	teste=al;
}
if(uf==am[1].uf){
	teste=am;
}
if(uf==ap[1].uf){
	teste=ap;
}
if(uf==ba[1].uf){
	teste=ba;
}
if(uf==ce[1].uf){
	teste=ce;
}
if(uf==df[1].uf){
	teste=df;
}
if(uf==es[1].uf){
	teste=es;
}
if(uf==go[1].uf){
	teste=go;
}
if(uf==ma[1].uf){
	teste=ma;
}
if(uf==mg[1].uf){
	teste=mg;
}
if(uf==ms[1].uf){
	teste=ms;
}
if(uf==MT[1].uf){
	teste=MT;
}
if(uf==PA[1].uf){
	teste=PA;
}

if(uf==PB[1].uf){
	teste=PB;
}
if(uf==PE[1].uf){
	teste=PE;
}
if(uf==PI[1].uf){
	teste=PI;
}
if(uf==PR[1].uf){
	teste=PR;
}
if(uf==RJ[1].uf){
	teste=RJ;
}
if(uf==RN[1].uf){
	teste=RN;
}
if(uf==RO[1].uf){
	teste=RO;
}
if(uf==RR[1].uf){
	teste=RR;
}
if(uf==RS[1].uf){
	teste=RS;
}
if(uf==SC[1].uf){
	teste=SC;
}
if(uf==SE[1].uf){
	teste=SE;
}
if(uf==SP[1].uf){
	teste=SP;
}
if(uf==TO[1].uf){
	teste=TO;
}
horas=parseInt(horas);
imagem="./imagem/ponto.png"
if(horas!=24){
for (var x in teste){
          var building = teste[x];
          if(building.horas == horas){
          	var location = new google.maps.LatLng(building.lat,building.long);
            var marker = new google.maps.Marker({
            position : location,
            icon:imagem,
            map:map
                  });}
      }
  }
  else
  {
  	for (var x in teste){
          var building = teste[x];
          	var location = new google.maps.LatLng(building.lat,building.long);
            var marker = new google.maps.Marker({
            position : location,
             icon:imagem,
            map:map
                  });
      }
  }
  }
function ExibirMaps(){
	window.location.href="/mapa.html"
}

 

function CarregarPontoTodos(){

for (var x in todospontos){
          var building = todospontos[x];
          var location = new google.maps.LatLng(building.lat,building.long);
          var marker = new google.maps.Marker({
          position : location,
          icon:imagem,
          map:map
          });}
      }
