let d = document.querySelector(".movies");
let URL = "https://cinemeta-catalogs.strem.io/top/catalog/movie/top.json";

async function GetData() {
  let res = await fetch(URL);
  data = await res.json();
  console.log(data.metas[0]);


  Elements(data)
}

GetData();

function Elements(data) {
  
  data.metas.map((i) => {
   let [title, type, image, year,rating] = [
    document.createElement("h1"),
    document.createElement("p"),
    document.createElement("img"),
    document.createElement("p"),
    document.createElement("p")

];

let imgdiv = document.createElement("div");
let infodiv = document.createElement("div")
let card = document.createElement("div")

imgdiv.className = "imgdiv";
infodiv.className = "infodiv";
card.className = "movie-card"



    d.append(card)
    card.append(imgdiv,infodiv)

    imgdiv.append(image)
    infodiv.append(title,type,rating,year)

    image.src = i.poster
    title.innerText = `Name: ${i.name} `;
    type.innerText = `Category- ${i.genre}`
    rating.innerText = `imdb ${i.imdbRating}/10`
    year.innerText = `Release ${i.year}`
  });
}
