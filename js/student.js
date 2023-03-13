const ENDPOINT = "https://640ee942cde47f68db3b9a6e.mockapi.io/teacher/about/";
let list = document.getElementById("cards");

function card(obj) {
  if (obj.isWork === false) {
    obj.isWork = "no";
  } else if (obj.isWork === true) {
    obj.isWork = "yes";
  }
  return `
    <div class="card">
      <img src="${obj.avatar}" alt="" />
      <div>
        <h1>${obj.firstName}</h1>
        <h2>${obj.lastName}</h2>
        <p></p>
        <p>isWork : ${obj.isWork}</p>
        <p>Phone : ${obj.phoneNumber}</p>
        <p>Email : ${obj.email}</p>
      </div>
      <div class="btns">
      <button type="button" class="btn btn-secondary">Edit</button>
      <button type="button" class="btn btn-secondary">Delete</button>
      </div>
    </div>
    `;
}

async function get(ENDPOINT, list) {
  let res = await fetch(ENDPOINT + "student");
  let data = await res.json();
  let arr = [];
  for (el of data) {
    arr.push(el);
    list.innerHTML += card(el);
    if (arr.length >= 12) {
      break;
    }
  }
}
get(ENDPOINT, list);
