
//* init object
const object = [
  {
    id: 0,
    firstname: "Dorina",
    lastname: "Keszthelyi",
    age: 21,
    salary: 220000,
    athome: false,
  },
  {
    id: 1,
    firstname: "Roland",
    lastname: "Schmidt",
    age: 25,
    salary: 300000,
    athome: false,
  },
  {
    id: 2,
    firstname: "Berny",
    lastname: "Keszthelyi",
    age: 3,
    salaray: 0,
    athome: false,
  },
];

const firstnameUl = document.querySelector(".firstname-ul");
const infoUl = document.querySelector(".info-ul");
const selectorBtn = document.querySelectorAll(".selector-btn");


addEventListener('DOMContentLoaded', loadOBJ);
addEventListener('DOMContentLoaded', loadInfo("lastname"));


function loadOBJ() {
  let displayItems = object.map((obj) => {
    return `<li class="list-item">${obj.firstname}</li>`
  });

  displayItems = displayItems.join("");
  firstnameUl.innerHTML = displayItems;
}

function loadInfo(prop) {
  const infotype = prop;
  let displayInfo = object.map((info) => {
    return `<li class="list-item">${info[infotype]}</li>`
  });

  displayInfo = displayInfo.join("");
  infoUl.innerHTML = displayInfo;
}

selectorBtn.forEach((btn) => {
  
  btn.addEventListener('click', (e) => {
    const data = e.currentTarget.dataset.id;
    console.log(data);

    loadInfo(data);
  });
  
});