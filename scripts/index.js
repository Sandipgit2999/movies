let Search = [
  {
    Title: "The Fast and the Furious",
    Year: "2001",
    imdbID: "tt0232500",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    Title: "The Fast and the Furious: Tokyo Drift",
    Year: "2006",
    imdbID: "tt0463985",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
  },
  {
    Title: "The Fast and the Furious",
    Year: "1954",
    imdbID: "tt0046969",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmI3YmNhNzktOTMzNC00ODg4LTk3YmQtMGI2ZGQzNzcwZmRkXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg",
  },
  {
    Title: "Fast and Furious",
    Year: "1939",
    imdbID: "tt0031298",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAyNTQ1NjA3Ml5BMl5BanBnXkFtZTgwOTIyNjIxMzE@._V1_SX300.jpg",
  },
  {
    Title: "Fast and the Furious: Tokyo Drift - The Japanese Way",
    Year: "2006",
    imdbID: "tt0878117",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
  },
  {
    Title: "Fast and Furious 6: The Game",
    Year: "2013",
    imdbID: "tt4106374",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGFiNjYzOTQtMzAyYS00OTUwLWIxMGUtZGQ5NjI2YjgzMGJmXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg",
  },
];

let movies = [
  {
    Title: "Captain America: The First Avenger",
    Year: "2011",
    imdbID: getRndInteger(4, 10),
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
  },
  {
    Title: "The Toxic Avenger",
    Year: "1984",
    imdbID: getRndInteger(4, 10),
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "The Toxic Avenger Part II",
    Year: "1989",
    imdbID: getRndInteger(4, 10),
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODhiNTljYTctMmIzZC00ZGVkLTk2NmItN2RjMzY3ZTYyNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "Citizen Toxie: The Toxic Avenger IV",
    Year: "2000",
    imdbID: getRndInteger(4, 10),
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMWI0NWY0ODUtNGY3Yy00ZDU1LTllYjUtMDFkYWEzZGQwY2I1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "The Toxic Avenger Part III: The Last Temptation of Toxie",
    Year: "1989",
    imdbID: getRndInteger(4, 10),
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjVlNzFjMGItMTEwYy00OTc0LWFmY2ItM2U0MmQyYWI5Njk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "Avenger",
    Year: "2006",
    imdbID: getRndInteger(4, 10),
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg",
  },
  {
    Title: "Knives of the Avenger",
    Year: "1966",
    imdbID: getRndInteger(4, 10),
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzcxYjhjMDAtZmY4Yi00NmJlLTg4NDItNDBmYzljYzA3MmJmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
  },
  {
    Title: "Samurai Avenger: The Blind Wolf",
    Year: "2009",
    imdbID: getRndInteger(4, 10),
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTAwNjc4MTkyNjBeQTJeQWpwZ15BbWU3MDg3NTQyMzI@._V1_SX300.jpg",
  },
  {
    Title: "The Avenger",
    Year: "1962",
    imdbID: getRndInteger(4, 10),
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjNmOTEzN2YtYTcyMC00NDQ1LTg5NTMtMjQ3M2ZlOGU2YmFkXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg",
  },
];

function getRndInteger(min, max) {
  let ran = Math.random() * (max - min) + min;
  return ran.toFixed(1);
}

localStorage.setItem("movies", JSON.stringify(movies));
let showimage = document.getElementById("slideshow");

let i = 0;
function slideshow() {
  // for(let i=0;i<movies.length;i++){

  // }

  let images = document.createElement("img");

  setInterval(function () {
    if (i === Search.length) {
      i = 0;
    }

    images.src = Search[i].Poster;

    showimage.append(images);
    i++;
  }, 1000);
}

slideshow();

let getmovie = JSON.parse(localStorage.getItem("movies"));

let inmovies = document.getElementById("movies");

function appendmovies(getmovie) {
  inmovies.innerHTML = null;
  getmovie.forEach((el) => {
    let div = document.createElement("div");

    let name = document.createElement("p");
    name.innerText = el.Title;

    let year = document.createElement("p");
    year.innerText = el.Year;

    let imag = document.createElement("img");
    imag.src = el.Poster;

    let imdb = document.createElement("p");
    imdb.innerText = el.imdbID;

    div.append(imag, name, year, imdb);
    inmovies.append(div);
  });
}

appendmovies(getmovie);

let lowtohigh = document.getElementById("sort-lh");
let hightolow = document.getElementById("sort-hl");

let lh = () => {
  movies.sort(function (a, b) {
    return a.imdbID - b.imdbID;
  });
  appendmovies(movies);
};

let hl = () => {
  movies.sort(function (a, b) {
    return b.imdbID - a.imdbID;
  });
  appendmovies(movies);
};

console.log("q", movies);
lowtohigh.addEventListener("click", lh);
hightolow.addEventListener("click", hl);

// let hl=()=>{

// }

// sort by salary
// employees.sort(function (x, y) {
//     return x.salary - y.salary;
// });

// console.table(employees);
