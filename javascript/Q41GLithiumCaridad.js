const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const dataInp = {
    movieTitle: document.getElementById("movieTitle").value,
    movieYear: document.getElementById("movieYear").value,
    movieGenre: document.getElementById("movieGenre").value,
    movieRating: document.querySelector('input[name="movieRating"]:checked').value,
  }

    localStorage.setItem("movieData", JSON.stringify(dataInp));

    let movieDisp = document.getElementById("movieList");
    movieDisp.innerHTML += `
    <div class="movieRating">
      ${dataInp.movieTitle} (${dataInp.movieYear}) - ${dataInp.movieGenre}, Rated: ${dataInp.movieRating}/5
    </div>
    `;
});
