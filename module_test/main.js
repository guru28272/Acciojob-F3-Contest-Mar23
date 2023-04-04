const date_input = document.querySelector(`#search-input`);
const img = document.querySelector(`#current-image-container`);
const search_history = document.querySelector(`#search-history`);
const btn = document.querySelector(`#search-btn`);

const showDate = document.querySelector(`#dateHeading`);
const paragraph = document.querySelector(`#para`);
const curr_img = document.querySelector(`#imag`);

const currentDate = new Date().toISOString().split("T")[0];

fetch(
  `https://api.nasa.gov/planetary/apod?api_key=9efcPu32YOHfqX4Ulu066dPyn8UsdTCW5W0tDcYc&date=${currentDate}`
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    showDate.innerHTML = currentDate;
    curr_img.src = data.url;
    paragraph.innerHTML = data.explanation;
  });

btn.addEventListener(`click`, getCurrentImageOfTheDay);

function getCurrentImageOfTheDay(e) {
  e.preventDefault();
  let date = new Date(date_input.value).toISOString().split("T")[0];
  //   console.log(date);
  let url = `https://api.nasa.gov/planetary/apod?api_key=9efcPu32YOHfqX4Ulu066dPyn8UsdTCW5W0tDcYc&date=${date}`;
  getImageOfTheDay(url, date);
  saveSearch(date);
  addSearchToHistory(date);
  //   addSearchToHistory(JSON.parse(localStorage.getItem(`searches`)));
}

function getImageOfTheDay(url, date) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   console.log(data);
      showDate.innerHTML = date;
      curr_img.src = data.url;
      paragraph.innerHTML = data.explanation;
    });
}

// -----------
let dateArr = [];

function saveSearch(date) {
  let dateObj = {
    date: date,
  };
  dateArr.push(dateObj);
  localStorage.setItem(`searches`, JSON.stringify(dateArr));
}

// ----------

function addSearchToHistory(date) {
  console.log(date);

  let list = document.createElement(`li`);
  list.innerHTML += `<a href="">${date}</a>`;
  list.classList.add(`listItem`);
  search_history.appendChild(list);

  list.addEventListener(`click`, function (e) {
    e.preventDefault();
    let url = `https://api.nasa.gov/planetary/apod?api_key=9efcPu32YOHfqX4Ulu066dPyn8UsdTCW5W0tDcYc&date=${this.innerText}`;
    getImageOfTheDay(url, date);
  });
}
