
// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
//   params: {id: '40008598', locale: 'en-US'},
//   headers: {
//     'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
//     'X-RapidAPI-Key': '75080e53e7msh0421906c88ed526p142680jsndffae68637d9'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });



$("#searchBtn").click(function () {
  var searchEl = $("#searchInput").val();
  console.log(searchEL)
  localStorage.setItem("artist-name", searchEl);
  getArtist();
  //addId();
});

function getArtist() {
  var artistName = localStorage.getItem("artist-name");
  var options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      "X-RapidAPI-Key": "d5b7852d0amshae97f9f551ea2a3p1e6b2djsn39ffa901b56b",
    },
  };

  fetch(
    "https://spotify23.p.rapidapi.com/search/?q=" +
      artistName +
      "&type=multi&offset=0&limit=10&numberOfTopResults=5",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

    getUri();
  //var artistUri = response.artists.items; //[0].data.uri;
  //console.log(artistUri);
  //localStorage.setItem("artistUri", artistUri);
}
function getUri() {
  var artistUri = response.artists.items[0].data.uri;
  console.log(artistUri);
}

// var uri = artistUri.substring(16, 37);
//var spotifyLink = localStorage.getItem("artist-id");

// function addId {
//   var searchEl = $("#searchInput").val();
//   localStorage.setItem("artist-id", searchEl);
//   $("#spotifyWidget").attr(
//     "src",
//     "https://open.spotify.com/embed/playlist/" +
//       uri +
//       "?utm_source=generator"
//   );
// });