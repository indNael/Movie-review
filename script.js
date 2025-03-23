const movies = [
    { title: "The Dark Knight", image: "batman.jpg", genre: "Action" },
    { title: "The Shawshank Redemption", image: "shawshank.jpg", genre: "Drama" },
    { title: "Inception", image: "inception.jpg", genre: "Sci-Fi" }
  ];
  
  let currentMovieIndex = 0;
  
  function startRecommendations() {
    alert("Starting movie recommendations!");
  }
  
  function showNextMovie() {
    currentMovieIndex = (currentMovieIndex + 1) % movies.length;

  }
  
  function showPreviousMovie() {
    currentMovieIndex = (currentMovieIndex - 1 + movies.length) % movies.length;
  }