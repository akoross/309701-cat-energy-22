const contactsLocation = document.querySelector(".contacts__location");
contactsLocation.classList.remove("contacts__location--bg");
document
  .querySelector(".location__marker")
  .classList.remove("location__marker");
let map;
const adress = { lat: 59.93843667777682, lng: 30.323060824012792 };

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
