const typeSelect = document.querySelector('#type-input');
const prefix = '.type-input-';

typeSelect.addEventListener('change', function(e) {
  changeInputHidden(prefix + typeSelect.value);
});

function changeInputHidden(classOption) {
  const inputblock = document.querySelectorAll('.inputStaBlock');

  if (inputblock.length > 0) {
    console.log(inputblock);
    inputblock.forEach((inputdiv) => {
      inputdiv.className = inputdiv.className.replace(/\binputStaBlock\b/g, '');
    });
  }
  console.log(classOption);

  document.querySelector(classOption).className += ' inputStaBlock';
}

changeInputHidden(prefix + typeSelect.value);

let map;

function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: new google.maps.LatLng(-15.235004, -51.92528),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: true,
    draggable: true,
    zoomControl: true,
    scrollwheel: true,
    label: true,
  });
  const imagem = './shot.png';

  for (const x in westcampus) {
    const building = westcampus[x];
    const location = new google.maps.LatLng(
        building.LATITUDE,
        building.LONGETUDE,
    );
    const marker = new google.maps.Marker({
      position: location,
      icon: imagem,
      map: map,
    });
  }
}
