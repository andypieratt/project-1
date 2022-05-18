$("#searchBtn").click(function () {
  var searchEl = $("#searchInput").val();
  localStorage.setItem("artist-name", searchEl);
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
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'social-media-data-tt.p.rapidapi.com',
    'X-RapidAPI-Key': '75080e53e7msh0421906c88ed526p142680jsndffae68637d9'
  }};

    fetch(
        'https://social-media-data-tt.p.rapidapi.com/live/user/search/?q=' + artistName + "&keyword=" + artistName + "&limit=5", options
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var instagram = data.result[0].other_social_profiles.instagram_username;
            var twitter = data.result[0].other_social_profiles.twitter.twitter_username;
            var youtube = data.result[0].other_social_profiles.youtube.youtube_channel_name;
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
  var instagram = localStorage.getItem("instagram");
   var twitter = localStorage.getItem("twitter");
    var youtube = localStorage.getItem("youtube");
    var tiktok = localStorage.getItem("tiktok");
    var fanCount = localStorage.getItem("fanCount");
  $("#socialInsta").attr(
    "link",
    "https://instagram.com/" + instagram
  );
    if(instagram === null) {
       var artistName = localStorage.getItem("artist-name");
       $("#socialInsta").attr(
    "link",
    "https://instagram.com/" + artistName
       )}

   $("#socialTwit").attr(
    "link",
    "https://twitter.com/" + twitter
  );
     if(twitter === null) {
       var artistName = localStorage.getItem("artist-name");
       $("#socialTwit").attr(
    "link",
    "https://twitter.com/" + artistName
       )}


   $("#social").attr(
    "link",
    "https://youtube.com/" + instagram
  );
  if(youtube === null) {
       var artistName = localStorage.getItem("artist-name");
       $("#socialTube").attr(
    "link",
    "https://youtube.com/" + artistName
       )}

   $("#socialTikTok").attr(
    "link",
    "https://tiktok.com/" + instagram
      );if(twitter === null) {
       var artistName = localStorage.getItem("artist-name");
       $("#socialTwit").attr(
    "link",
    "https://tiktok.com/" + artistName
       )}

   $("#socialInsta").attr(
    "link",
    "https://tiktok.com/" + instagram
    );



}