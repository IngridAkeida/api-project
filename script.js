"use strict";

async function getData() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const options = {
    method: "GET",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGQwN2ViZWY1ZGM3ZWFjN2EyYzE5NDNjYTQ0MzkwMiIsInN1YiI6IjYxZTE3YWIxYmYwZjYzMDA0MTFlOGJkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FAGBT3L23Q_1saly5BcNU3n6_0isBS2WPIJnLeVhvYs'
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result.results[0]);
    
    let cards = result.results;

    for(let card of cards){
      createCardEl(card);
    }
    
  } catch (error) {
    console.error(error);
  }
}

function createCardEl(cardMovie) {

  
  let cardsEl = document.getElementById("card");

  let cardEl = document.createElement("main");
  let titleEl = document.createElement("p");
  let posterEl = document.createElement("img");
  let releaseEl = document.createElement('p');
  let voteEl = document.createElement('p');
  let overviewEl = document.createElement("footer");
  

  cardsEl.appendChild(cardEl);
  cardEl.appendChild(titleEl);
  cardEl.appendChild(posterEl);
  cardEl.appendChild(releaseEl);
  cardEl.appendChild(voteEl);
  cardEl.appendChild(overviewEl);

  titleEl.textContent = cardMovie.title;
  posterEl.src = `https://image.tmdb.org/t/p/w200/${cardMovie.poster_path}`;
  releaseEl.textContent = cardMovie.release_date;
  voteEl.textContent = cardMovie.vote_average;
  overviewEl.textContent = cardMovie.overview;
  
  return cardEl;
}
getData();

/*let btnEl = document.querySelector("#btn");
btnEl.addEventListener("click", function () {
  getData();
});*/



