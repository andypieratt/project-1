//get text from inpput field and save to local storage

$("#searchBtn").click(function () {
  var searchEl = $("#searchInput").val();
  localStorage.setItem("artist-name", searchEl);
  getArtist();
  getUri();
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
