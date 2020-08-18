
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
    salary: 0,
    athome: false,
  },
];

const firstnameUl = document.querySelector(".firstname-ul");
const infoUl = document.querySelector(".info-ul");
const selectorBtn = document.querySelectorAll(".selector-btn");
const addBtn = document.querySelector('.addperson-btn');


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

function CreatePerson(firstname, lastname, age, salary, athome) {

  this.id = object.length-1;
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.salary = salary;
  this.athome = athome;

};


//* get form inputs
addBtn.addEventListener('click', addPerson);

//* get form inputs
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const page = document.querySelector('#age');
const salary = document.querySelector('#salary');
const athome = document.querySelector('#athome');

function addPerson() {

  const personFirstname = firstName.value;
  const personLastname = lastName.value;
  const personAge = Number(page.value);
  const personSalary = Number(salary.value);
  const personAthome = athome.checked;

  firstName.value = "";
  lastName.value = "";
  page.value = "";
  salary.value = "";
  athome.checked = false;

  const newPerson = new CreatePerson(personFirstname, personLastname, personAge, personSalary, personAthome);
  object.push(newPerson);

  loadOBJ();
  loadInfo("lastname");

}