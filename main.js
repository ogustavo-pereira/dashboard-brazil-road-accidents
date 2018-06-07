

let typeSelect = document.querySelector("#type-input")
var prefix = ".type-input-"
typeSelect.addEventListener("change",function(e){
    changeInputHidden(prefix + typeSelect.value)
})
function changeInputHidden(classOption) {
    let inputblock = document.querySelectorAll(".inputStaBlock")
    
    if(inputblock.length > 0){
        console.log(inputblock);
        inputblock.forEach(inputdiv =>{
            inputdiv.className = inputdiv.className.replace(/\binputStaBlock\b/g,"")
        });
    }
    console.log(classOption);
    
    document.querySelector(classOption).className += " inputStaBlock"
}
changeInputHidden(prefix + typeSelect.value)
var map;
function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: new google.maps.LatLng(-15.235004,-51.92528),
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    panControl: false, 
    draggable: false,
    zoomControl: false,
    scrollwheel: false
    });
  var imagem="./shot.png"

    
  for (var x in westcampus){
    var building = westcampus[x];
    var location = new google.maps.LatLng(building.LATITUDE,building.LONGETUDE);
    var marker = new google.maps.Marker({
    position : location,
    icon : imagem,
    map:map
  });
}

}