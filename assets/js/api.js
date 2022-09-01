
function cl(str) {
  return (console.log(str));
}

//Methods to get elements from URL
var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("name");

const apiCatcher = fetch('https://pokeapi.co/api/v2/pokemon/' + c)


/* ============================================================================== */

function createData(data) {
  var mainContainer = document.getElementById("myData");
  //Create empty div and append data to it
  var div = document.createElement("div");



  if (data.is_default == true) { div.innerHTML += `<i class='fa fa-star text-warning' style='float:right;'></i>` }
  div.innerHTML += `<h1>${data.name.toUpperCase()} </h1>`;
  div.innerHTML += `<img src='${data.sprites.front_default}' align='right'>`;
  div.innerHTML += `<br> Size : ${data.weight} x ${data.height} <hr><br>
  <span class='lead'> Abilities: </span>`
  for (e in data.abilities) { div.innerHTML += `<li>${data.abilities[e].ability.name}</li>` }
  div.innerHTML += `<span class='lead'> Items </span>`
  for (e in data.held_items) { div.innerHTML += `<li>${data.held_items[e].item.name}</li>` }
  div.innerHTML += `<div class='card shadow' style='float:right;'>`
  for (e in data.stats) { div.innerHTML += ` <b >${data.stats[e].stat.name}</b> ${data.stats[e].base_stat} |` }
  div.innerHTML += `</div>
  `
  mainContainer.appendChild(div);

  return mainContainer;
}

//Process the API request call
apiCatcher
  .then(data => data.json()) // Catch Promise
  .then(data => { // Catch the data 
    createData(data); //works lol
  })