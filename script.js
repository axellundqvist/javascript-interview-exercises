const companies = [
  {id: 1, name: 'Amazon', location: 'Seattle'},
  {id: 2, name: 'Apple', location: 'Cupertino'},
  {id: 3, name: 'Facebook', location: 'Menlo Park'},
  {id: 4, name: 'Google', location: 'Mountain View'},
  {id: 5, name: 'Leeroy', location: 'Sundsvall'},
  {id: 6, name: 'Tesla', location: 'Palo Alto'}
]


let list = document.getElementById('list');

for(var i = 0;i < companies.length; i++) {
  list.innerHTML += "<li><div id='" + companies[i].name + "' class=\"oneLi\"><b>Name:</b> " + companies[i].name + " " + "<b>location:</b> " + companies[i].location + "</div></li>";
};

list.innerHTML += "<style>#list{cursor:pointer;}#list li{margin-bottom:10px;}</style>";