"use strict";

async function getData() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGQwN2ViZWY1ZGM3ZWFjN2EyYzE5NDNjYTQ0MzkwMiIsInN1YiI6IjYxZTE3YWIxYmYwZjYzMDA0MTFlOGJkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FAGBT3L23Q_1saly5BcNU3n6_0isBS2WPIJnLeVhvYs'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

getData();

