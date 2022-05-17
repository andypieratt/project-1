$("#searchBtn").click(function () {
  var searchEl = $("#searchInput").val();
  localStorage.setItem("artist-name", searchEl);
  getArtist();
  addId();
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
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var artistUri = data.artists.items[0].data.uri;
      console.log(artistUri);
      var uri = artistUri.substring(15);
      localStorage.setItem("uri", uri);
    });
}

function addId() {
  var uri = localStorage.getItem("uri");
  $("#spotifyWidget").attr(
    "src",
    "https://open.spotify.com/embed/artist/" + uri + "?utm_source=generator"
  );
}
