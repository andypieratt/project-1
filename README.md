# project-1

//USER Story//

As a music fan I am tired of trying to find tickets and music on one page. My friend asked me to a concert but I am uncertain if I want to see the artist. I don't have much time to do research so I want to listen to snippets of the artists music while searching for the concert data.

WHen the user goes to our homepage they search for an artist.
When they click the search button the Spotify music, Seat Geek ticket links and social media buttons pop up.

The user has access to all of the artists information and when they look up the next artist the information is replaced with images, music events and links of the next artist.

Functionally placing music and events in the same location online.

//Process//
Most of us are connected to music in one form or another as a musician, singer, or fan. we had a much loftier goal and paired it down into something we could accomplish in the first project.

//Build//
We connected with the Spotify data through Rapid API. The Team was able to rapidly deploy this part of the app due to the fact that we used the embedded spotify widget for the front end design and parsed the artist URI in from the API.

It took the team a bit longer to find APIs that worked. We used a social data API through rapid API to pull as many social links off of the data as possible and then parsed in the artists name to generate the missing links.

The third API we called was through Seat Geek which allowed us to access ticket data from all over the world. We were able to pull, date, time, location and dynamic create buttons and delete them between each API call.

//DEMO//
https://andypieratt.github.io/project-1/

//Future Development//
In The future we would like to build out a youtube API that will play the artists first video below the Spotify Widget.

Links and connection to other streaming sites

The ability for the user to see the artists recent statements on social media
