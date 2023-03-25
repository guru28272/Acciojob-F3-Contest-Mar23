const getLocationBtn = document.querySelector(`#btnGet`);
const removeLocationBtn = document.querySelector(`#btnRemove`);
const map = document.querySelector(`#map`);

removeLocationBtn.addEventListener(`click`, removeLocation);

if (localStorage.getItem(`lat`) && localStorage.getItem(`long`)) {
  //   getLocationBtn.setAttribute(`disabled`, `disabled`);

  let myLat = JSON.parse(localStorage.getItem(`lat`));
  let myLong = JSON.parse(localStorage.getItem(`long`));
  mapping(myLat, myLong);
} else {
  getLocationBtn.addEventListener(`click`, getLocation);
}

// getting geoLocation--------
function getLocation() {
  getLocationBtn.setAttribute(`disabled`, `disabled`);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error);
  } else {
    map.innerHTML = `<h4>Your browser does not support geoLocation</h4>`;
  }
}

// if location is true---------
function showPosition(position) {
  //   console.log(position.coords.latitude);
  //   console.log(position.coords.longitude);
  //   console.log(position);
  localStorage.setItem(`lat`, JSON.stringify(position.coords.latitude));
  localStorage.setItem(`long`, JSON.stringify(position.coords.longitude));

  let myLat = JSON.parse(localStorage.getItem(`lat`));
  let myLong = JSON.parse(localStorage.getItem(`long`));
  mapping(myLat, myLong);
}
function error(error) {
  //   console.log(error);
  map.innerHTML = `<h4>geolocation shows error</h4>`;
  alert(`geolocation shows error`, error);
}

// displaying map----------
function mapping(lat, long) {
  let myMap = `  <iframe
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      src="https://www.google.com/maps?q=${lat}, ${long}&output=embed"
    >
    </iframe>`;
  map.innerHTML += `<h1>${lat}</h1>`;
  map.innerHTML += `<h1>${long}</h1>`;
  map.innerHTML += myMap;
}

// removing localStorage----------
function removeLocation() {
  localStorage.removeItem(`lat`);
  localStorage.removeItem(`long`);
}
