const btn = document.querySelector(`#btn`);

const container = document.querySelector(`#container`);
const loading = document.querySelector(`.loading`);
loading.classList.add(`hide`);

btn.addEventListener(`click`, getData);

async function getData() {
  btn.classList.add(`hide`);
  loading.classList.add(`show`);

  const res1 = await promise1(`https://dummyjson.com/posts`);
  //   console.log(res1, new Date());

  if (res1) {
    const res1Data = document.createElement(`div`);
    res1Data.classList.add(`box-1`);
    container.appendChild(res1Data);
    res1Data.innerHTML = `<h3>id : ${res1.posts[0].id}</h3><p>${res1.posts[0].title}</p>`;

    const res2 = await promise2(`https://dummyjson.com/products`);
    // console.log(res2, new Date());

    if (res2) {
      const res2Data = document.createElement(`div`);
      res2Data.classList.add(`box-2`);
      container.appendChild(res2Data);
      res2Data.innerHTML = `<h3>id : ${res2.products[0].id}</h3><p>${res2.products[0].title}</p><p>${res2.products[0].description}</p>`;

      const res3 = await promise3(`https://dummyjson.com/todos`);
      //   console.log(res3, new Date());

      if (res3) {
        const res3Data = document.createElement(`div`);
        res3Data.classList.add(`box-3`);
        container.appendChild(res3Data);
        res3Data.innerHTML = `<h3>id : ${res3.todos[0].id}</h3><p>${res3.todos[0].todo}</p>`;

        loading.style.display = `none`;
      }
    }
  }
}

// getData();

function promise1(url) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(async () => {
      let res = await fetch(url);
      let data = await res.json();
      resolve(data);
    }, 1000);
  });
  return myPromise;
}

function promise2(url) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(async () => {
      let res = await fetch(url);
      let data = await res.json();
      resolve(data);
    }, 2000);
  });
  return myPromise;
}

function promise3(url) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(async () => {
      let res = await fetch(url);
      let data = await res.json();
      resolve(data);
    }, 2000);
  });
  return myPromise;
}
