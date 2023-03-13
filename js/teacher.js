const ENDPOINT = "https://640ee942cde47f68db3b9a6e.mockapi.io/teacher/about/";
let list = document.getElementById("list");

function card(obj) {
  if (obj.isMarried === false) {
    obj.isMarried = "no";
  } else if (obj.isMarried === true) {
    obj.isMarried = "yes";
  }
  return `
  <div class="card">
    <img src="${obj.avatar}" alt="" />
    <div>
      <h1>${obj.firstName}</h1>
      <h2>${obj.lastName}</h2>
      <p></p>
      <p>IsMarried : ${obj.isMarried}</p>
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
  let res = await fetch(ENDPOINT + "teacher");
  let data = await res.json();
  for (el of data) {
    list.innerHTML += card(el);
  }
  console.log(data);
}

get(ENDPOINT, list);
