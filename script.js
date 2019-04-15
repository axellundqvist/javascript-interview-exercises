// Exercise 4 ///////////////////////

// My filter feature works like this.
// At first the list and the select box is printed out.
// The visitor chooses a filter -> a button appears with the id of that location.
// Then based on what buttons (filters) are active. I loop through the companies object and print the list element(s) that matches the filters to the page.
// If a button is clicked, the button is removed, the function that checks active filters is called and updates the content.
// If the "none" select options is choosen, the page reloads and all items are shown again.

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

let body = document.getElementsByTagName("BODY")[0];

// Print a select box
body.innerHTML += "<select id=\"selector\" onchange='selectedFilter(value)'>";

// Grab it!
let selector = document.getElementById('selector');

// Give it an empty first value.
selector.innerHTML += "<option value='none'>No filters</option>";

// Print out the the other options and add the locations to their value.
for( let i = 0; i < companies.length; i++ ) {
selector.innerHTML += "<option value='" + companies[i].location + "'>" + companies[i].location + "</option>";
}
// Close it.
body.innerHTML += "</select>";

// Create a target div for all the filter buttons we will create.
body.innerHTML += "<div id='filterBox'></div>";
let filterBox = document.getElementById('filterBox');
filterBox.innerHTML += "<style>#filterbox{height:80px;width:400px;border:1px solid grey;}</style><p>Filters</p>";


// When the value in the selectbox is changed, this function get the value (a location), as its parameter and sends it away to two other funcs.
function selectedFilter(selectedLocation) {

showFilterOnScreen(selectedLocation);
filterOutcome(selectedLocation);

}



// Prints out the buttons that represents the active filter
function showFilterOnScreen(selectedLocation) {
// If visitor clicked the "none" filter...
if(selectedLocation === 'none') {
  location.reload();
}
// String with the "payload", each button has a onclick that leads to removeFilter(), parameter is a location, which is the buttons id too.
let payload = "<button id='" + selectedLocation + "' class='" + selectedLocation + "' value='" + selectedLocation + 1 + "' onclick='removeFilter(\""+ selectedLocation+"\")'>" + selectedLocation + " X" + "</button>";
filterBox.innerHTML += payload;
}



// This function desides what is shown on the page
function filterOutcome() {

// First we have to check if there are no filters active, = show entire list..

let list = document.getElementById('list');

// Get all childNodes from filterBox, if there are any filters, they begin at index [2]
let filterBox = document.getElementById('filterBox').childNodes;

let allNames = [];
let allLocations = [];

// Fill allNames and allLocations with the names and locations from companies, for easier handling. 
for(let i = 0; i<companies.length; i++) {
  allNames.push(companies[i].name);
  allLocations.push(companies[i].location);
}

// If filterBox[2], which I now know is the first index that holds buttons id, is empty, there are no filters active and everything should be visible..
if (!filterBox[2]) {
  // reload page = everything is loaded again.
  location.reload(); 
}


// If there was something in fitlerBox[2] we have to begin to filter the content.

// Empty the list
list.innerHTML = '';


// Save amount of childNodes
let childAmount = document.getElementById('filterBox').childNodes.length;

// for-loop won't work wothout this console.log, don't know why :s
console.log("Apparently this is needed - " + childAmount);

let filteredCity = '';

// Check if childs id (a location) exists also in companies.location
for (let i = 0; i < childAmount; i++) {
  let intersection = allLocations.includes(filterBox[i].id);
  // If thats true...
  if(intersection === true) {
    // Let filteredCity take on the value of that city name
    filteredCity = filterBox[i].id;

    // Since we don't know the index of the real companies.location, beacuse thats now what we get from filterbox[i]..
    // We have to check it against companies.location, to get the corrent index so we can print all info to the page as below.
    for (let i = 0; i < companies.length; i++) {
      if(filteredCity === companies[i].location) {
        list.innerHTML += "<li id='" + allNames[i] + "'><div class=\"oneLi\"><b>Name:</b> " + allNames[i] + " " + "<b>location:</b> " + allLocations[i] + "</div></li>";
      }
    }
  }
}
}

// Removes the buttons.
function removeFilter(clickedLocation) {

// Remove the button with this id
document.getElementById(clickedLocation).remove();

filterOutcome();
}