const companies = [
  {id: 1, name: 'Amazon', location: 'Seattle'},
  {id: 2, name: 'Apple', location: 'Cupertino'},
  {id: 3, name: 'Facebook', location: 'Menlo Park'},
  {id: 4, name: 'Google', location: 'Mountain View'},
  {id: 5, name: 'Leeroy', location: 'Sundsvall'},
  {id: 6, name: 'Tesla', location: 'Palo Alto'}
]


let list = document.getElementById('list');

list.innerHTML += "<style>#list{cursor:pointer;}#list li{margin-bottom:10px;}</style>";


for(let i = 0;i < companies.length; i++) {
list.innerHTML += "<li id='" + companies[i].name + "'><div class='listElement' onClick='doSomething(" + companies[i].name + ")' class=\"oneLi\"><b>Name:</b> " + companies[i].name + " " + "<b>location:</b> " + companies[i].location + "</div></li>";
};

// Create target divs
for(let i=0;i<companies.length; i++) {
list.innerHTML += "<div id=\"target" + i + "\"></div>";
}

// Arrays to hold names and number of clicks
let arrayNames = [];
let arrayClicked = [];

// onClick doSomething(company info)
function doSomething(param) {

// Store company name (displayed as id) in variable
let type = param.id;

// Variable to store number of matching names, to use as reference
let match = 0;

// Check if name already exists (already has been clicked)
for (let i=0; i<companies.length; i++) {

  // If it already has been clicked, add 1 to clicked and 1 to "match"
  if(type === arrayNames[i]) {
    arrayClicked[i]++;
    match++;
  }
}

// If the name didn't match anything
if (match === 0) {
  console.log("No match, adding new item");
  arrayNames.push(type);
  arrayClicked.push(1);
}

console.log(arrayNames);
console.log(arrayClicked); 

// Get index of the name of the company which always is the same index as the clicked number, even though its two different arrays
let index = arrayNames.indexOf(type);
document.getElementById('target' + index).innerHTML = "<p>" + arrayNames[index] + " " + arrayClicked[index] + "</p>";
}
