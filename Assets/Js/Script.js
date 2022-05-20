$("#searchBtn").on("click", function () {
  localStorage.clear();
  var searchEl = $("#searchInput").val();
  var spotifyPlaceholder = $("#placeholderSpotify");
  localStorage.setItem("artist-name", searchEl);
  spotifyPlaceholder.remove();
  $("#spotifyTitle").attr(
    "class",
    "visible d-flex flex-row justify-space-around"
  );
  $("#spotifyContainer").attr("class", "visible container float-left");
  $("#eventContainer").attr("class", "visible float-right");
  $("#socialContainer").attr("class", "visible d-flex flex-row");
  $("#artistContainer").attr(
    "class",
    "visible d-flex flex-rox justify-content-center"
  );
  getArtist();
  getSocial();
  getLocation();
});

function getArtist() {
  var artistName = localStorage.getItem("artist-name");
  console.log(artistName);
  var options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      "X-RapidAPI-Key": "75080e53e7msh0421906c88ed526p142680jsndffae68637d9",
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
      console.log(data);
      var uri = artistUri.substring(15);
      localStorage.setItem("uri", uri);
      addId();
    });
}

function addId() {
  var uri = localStorage.getItem("uri", uri);
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
      var avatar = data.result[0].avatar_medium;

      localStorage.setItem("instagram", instagram);
      localStorage.setItem("twitter", twitter);
      localStorage.setItem("youtube", youtube);
      localStorage.setItem("tiktok", tiktok);
      localStorage.setItem("fanCount", fanCount);
      localStorage.setItem("avatar", avatar);
      addSocialButtons();
    });
}

function addSocialButtons() {
  var instagram = localStorage.getItem("instagram");

  $("#socialInsta").attr("src", "https://instagram" + instagram);
}

var instagram = localStorage.getItem("instagram");
dd060f5f9e6cf8c5115513a3fffec34038066e98;
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

//This is the social link for the artists Twitter//
dd060f5f9e6cf8c5115513a3fffec34038066e98;
$("#socialTwit").attr("link", "https://twitter.com/" + twitter);
if (twitter === null) {
  var artistName = localStorage.getItem("artist-name");
  $("#socialTwit").attr("link", "https://twitter.com/" + artistName);
}

//This is social Link for the artists Youtube//
dd060f5f9e6cf8c5115513a3fffec34038066e98;
$("#social").attr("link", "https://youtube.com/" + youtube);
if (youtube === null) {
  var artistName = localStorage.getItem("artist-name");
  $("#socialTube").attr("link", "https://youtube.com/" + artistName);
  var twitter = localStorage.getItem("twitter");
  var youtube = localStorage.getItem("youtube");
  var tiktok = localStorage.getItem("tiktok");
  var fanCount = localStorage.getItem("fanCount");
  var artistName = localStorage.getItem("artist-name");
  var avatar = localStorage.getItem("avatar");

  $("#artistAvatar").attr("src", avatar);
  //This is the Fancount//
  $("#fanCount").text("Followers: " + fanCount);

  //THis is the social link for the artists Instagram//
  if (instagram !== null) {
    $("#socialInsta").attr("href", "https://instagram.com/" + instagram);
  } else {
    $("#socialInsta").attr("href", "https://instagram.com/" + artistName);
  }
  //This is the social link for the artists Twitter//
  if (twitter !== null) {
    $("#socialTwit").attr("href", "https://twitter.com/" + twitter);
  } else {
    $("#socialTwit").attr("href", "https://twitter.com/" + artistName);
  }

  //This is social Link for the artists Youtube//
  if (youtube !== null) {
    $("#socialTube").attr("href", "https://youtube.com/" + youtube);
  } else {
    $("#socialTube").attr("href", "https://youtube.com/" + artistName);
  }

  //This is the social link for the artists tiktok//

  if (tiktok !== null) {
    $("#socialTikTok").attr("href", "https://tiktok.com/" + tiktok);
  } else {
    $("#socialTwit").attr("href", "https://tiktok.com/" + artistName);
  }
}

// ONLY EDIT BELOW THIS LINE//

function getLocation() {
  var lat;
  var lon;
  function showPosition(pos) {
    var crd = pos.coords;
    lat = crd.latitude;
    lon = crd.longitude;
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);
    console.log(crd);
  }
  navigator.geolocation.getCurrentPosition(showPosition);
  getSeatGeek();
}

//This is the Fancount//
$("#fanCount").attr("value", fanCount);

function getBrainz() {
  var artistName = localStorage.getItem("artist-name");
  var lat = localStorage.getItem("lat", lat);
  var lon = localStorage.getItem("lon", lon);
  var options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer 39ZknzasXO5GhLiw0Un7yPVHLYhnLPMMOzpNQZn3",
    },
  };
  console.log(options);
  fetch(
    "https://api.predicthq.com/v1/events/?q=" +
      artistName +
      "&location_around.offset=50mi&limit=10&location_around.origin=" +
      lat +
      "%2C" +
      lon,
    options
  );
}

function getSeatGeek() {
  var artistName = localStorage.getItem("artist-name");

  fetch(
    "https://api.seatgeek.com/2/events?q=" +
      artistName +
      "&range=50mi&client_id=NjA3NjEwfDE2NTMwMTA4ODMuODU1MzQwMg"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

  var events = data.events;

  for (let i = 0; i < events.length; i++) {
    var eventList = $("<ul>");
    $("#artistEvents").append(eventList);

    var eventListItem = $("<li>");
    eventListItem.append(events[i].title);

    if (events[i].data_tbd === false) {
      var dateTime = data.events[i].datetime_local;
      dateTime = dateTime.split("T").join(" ");
      var format = "YYYY/MM/DD hh:mm:ss";
      var convertedDateTime = moment(dateTime, format);
      eventListItem.append(
        convertedDateTime.format("MM/DD/YY hh:mm A") + "</br>"
      );
    } else {
      eventListItem.append("Date and Time TBD");
    }
    eventListItem.append("Venue: " + events[i].venue.name + "</br>");
    eventListItem.append(
      "Location: " + events[i].venue.display_location + "</br>"
    );

    var ticketBtn = $("<button>", {
      text: "Buy Tickets",
      class: "btn btn-primary",
      click: function () {
        window.open(events[i].url);
      },
    });
    eventListItem.append(ticketBtn);

    eventList.append(eventListItem);
  }
}

// var options = {
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//     Authorization: "NjA3NjEwfDE2NTMwMTA4ODMuODU1MzQwMg",
//   },
// var date = geo.results[0].start;
// var venue = geo.results[0].entities[0].name;
// var artist = geo.console.log(geo);

// function getBrainz() {
//   var artistName = localStorage.getItem("artist-name");
//   var lat = localStorage.getItem("lat", lat);
//   var lon = localStorage.getItem("lon", lon);
//   var options = {
//     method: "GET",
//     headers: {
//     "Accept": "application/json",
//     "Authorization": "Bearer 39ZknzasXO5GhLiw0Un7yPVHLYhnLPMMOzpNQZn3",
//   }};
//   console.log(options);
//   fetch(
//     "https://api.predicthq.com/v1/events/?q=" +
//       artistName +
//       "&location_around.offset=50mi&limit=10&location_around.origin=" +
//       lat +
//       "%2C" +
//       lon, options,
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (geo) {
//       var date = geo.results[0].start;
//       var venue = geo.results[0].entities[0].name;
//       var artist = geo.
//       console.log(geo);
//     });

// }

// var instagram = data.result[0].other_social_profiles.instagram_username;
// var twitter =
//   data.result[0].other_social_profiles.twitter.twitter_username;
// var youtube =
//   data.result[0].other_social_profiles.youtube.youtube_channel_name;
// var tiktok = data.result[0].unique_id;
// var fanCount = data.result[0].follower_count;

// localStorage.setItem("instagram", instagram);
// localStorage.setItem("twitter", twitter);
// localStorage.setItem("youtube", youtube);
// localStorage.setItem("tiktok", tiktok);
// localStorage.setItem("fanCount", fanCount);
//       localStorage.setItem("avatar", avatar)
//     });
//   addSocialButtons();
//   }

// function addSocialButtons() {
// var instagram = localStorage.getItem("instagram");
// var twitter = localStorage.getItem("twitter");
// var youtube = localStorage.getItem("youtube");
// var tiktok = localStorage.getItem("tiktok");
// var fanCount = localStorage.getItem("fanCount");
// var artistName = localStorage.getItem("artist-name");
// var avatar = localStorage.getItem("avatar")
