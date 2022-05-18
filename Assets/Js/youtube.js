$("#searchBtn").click(function () {
  var searchEl = $("#searchInput").val();
  localStorage.setItem("artist-name", searchEl);
  getYoutube();
});

function getYoutube() {
    var artistName = localStorage.getItem("artist-name");
    var options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'seatgeek-seatgeekcom.p.rapidapi.com',
        'X-RapidAPI-Key': '75080e53e7msh0421906c88ed526p142680jsndffae68637d9'
    },
    };

    fetch(
        'seatgeek-seatgeekcom.p.rapidapi.com/performers' +
        artistName +
        "&type=multi&offset=0&limit=10&numberOfTopResults=5",
        options
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            // var artistUri = data.artists.items[0].data.uri;
            // console.log(artistUri);
            // var uri = artistUri.substring(15);
            // localStorage.setItem("uri", uri);
        });
        addId();
}

