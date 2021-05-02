const contactsLocation = document.querySelector(".contacts__location");
contactsLocation.classList.remove("contacts__location--bg");

let map;
const adress = { lat: 59.938715, lng: 30.32306 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: adress,
    zoom: 15,
  });

  marker = new google.maps.Marker({
    position: adress,
    map: map,
    icon: "./img/map-png.svg",
  });
}
