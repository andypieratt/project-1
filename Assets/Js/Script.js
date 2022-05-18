$("#searchBtn").click(function () {
  var searchEl = $("#searchInput").val();
  var spotifyPlaceholder = $("#placeholderSpotify");
  localStorage.setItem("artist-name", searchEl);
  spotifyPlaceholder.remove();
  $("#spotifyTitle").attr("class", "visible");
  $("#spotifyContainer").attr("class", "visible");
  $("#eventContainer").attr("class", "visible");
  getArtist();
  getSocial();
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
  addId();
}

function addId() {
  var uri = localStorage.getItem("uri");
  $("#spotifyWidget").attr(
    "src",
    "https://open.spotify.com/embed/artist/" + uri + "?utm_source=generator"
  );
}

function getSocial() {
  var artistName = localStorage.getItem("artist-name");
  var options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "social-media-data-tt.p.rapidapi.com",
      "X-RapidAPI-Key": "75080e53e7msh0421906c88ed526p142680jsndffae68637d9",
    },
  };

  fetch(
    "https://social-media-data-tt.p.rapidapi.com/live/user/search/?q=" +
      artistName +
      "&keyword=" +
      artistName +
      "&limit=5",
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var instagram = data.result[0].other_social_profiles.instagram_username;
      var twitter =
        data.result[0].other_social_profiles.twitter.twitter_username;
      var youtube =
        data.result[0].other_social_profiles.youtube.youtube_channel_name;
      var tiktok = data.result[0].unique_id;
      var fanCount = data.result[0].follower_count;

      localStorage.setItem("instagram", instagram);
      localStorage.setItem("twitter", twitter);
      localStorage.setItem("youtube", youtube);
      localStorage.setItem("tiktok", tiktok);
      localStorage.setItem("fanCount", fanCount);
    });
  addSocialButtons();
}

function addSocialButtons() {
<<<<<<< HEAD
  var instagram = localStorage.getItem("instagram");
  $("#socialInsta").attr("src", "https://instagram" + instagram);
}
=======
var instagram = localStorage.getItem("instagram");
>>>>>>> dd060f5f9e6cf8c5115513a3fffec34038066e98
var twitter = localStorage.getItem("twitter");
var youtube = localStorage.getItem("youtube");
var tiktok = localStorage.getItem("tiktok");
var fanCount = localStorage.getItem("fanCount");
//THis is the social link for the artists Instagram//
$("#socialInsta").attr("link", "https://instagram.com/" + instagram);
if (instagram === null) {
  var artistName = localStorage.getItem("artist-name");
  $("#socialInsta").attr("link", "https://instagram.com/" + artistName);
}
<<<<<<< HEAD

$("#socialTwit").attr("link", "https://twitter.com/" + twitter);
if (twitter === null) {
  var artistName = localStorage.getItem("artist-name");
  $("#socialTwit").attr("link", "https://twitter.com/" + artistName);
}

$("#socialTube").attr("link", "https://youtube.com/" + youtube);
if (youtube === null) {
  var artistName = localStorage.getItem("artist-name");
  $("#socialTube").attr("link", "https://youtube.com/" + artistName);
}

$("#fanCount").attr("value", fanCount);
=======
//This is the social link for the artists Twitter//
>>>>>>> dd060f5f9e6cf8c5115513a3fffec34038066e98
$("#socialTwit").attr("link", "https://twitter.com/" + twitter);
if (twitter === null) {
  var artistName = localStorage.getItem("artist-name");
  $("#socialTwit").attr("link", "https://twitter.com/" + artistName);
}

<<<<<<< HEAD
=======
//This is social Link for the artists Youtube//
>>>>>>> dd060f5f9e6cf8c5115513a3fffec34038066e98
$("#social").attr("link", "https://youtube.com/" + youtube);
if (youtube === null) {
  var artistName = localStorage.getItem("artist-name");
  $("#socialTube").attr("link", "https://youtube.com/" + artistName);
}
//This is the social link for the artists tiktok//
$("#socialTikTok").attr("link", "https://tiktok.com/" + tiktok);
if (tiktok === null) {
  var artistName = localStorage.getItem("artist-name");
  $("#socialTwit").attr("link", "https://tiktok.com/" + artistName);
}
//This is the Fancount//
$("#fanCount").attr("value", fanCount);
}