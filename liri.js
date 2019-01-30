require("dotenv").config();

var axios= require ("axios");
var fs= require ("fs");

var Spotify= require("node-spotify-api")

//variables
var keys = require("./keys.js");
var moment = require('moment');
var spotify = new Spotify(keys.spotify);



var command= process.argv[2];
//  console.log(userInput);


//store the user input in a variable
var userInput= process.argv[3];
// console.log(userInput);


//insert that band name into the URL
//store the band name in a variable
function concert() {
var bandURL= "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"

//make a request using axios for the band information
// Make a request for a user with a given ID - from Axious NPM 
axios.get(bandURL)
  .then(function (response) {
    console.log("__________________________________")
    // console.log(response.data);

    console.log ("Artist: " + response.data[0].lineup[0]);
    console.log ("Name of the venue: " + response.data[0].venue.name);
      var date = moment(response.data[0].datetime).format("MM/DD/YYYY");
    console.log("Date: " + date)
    console.log("Venue location: " + response.data[0].venue.city);
      console.log("__________________________________")
})
.catch(function (error) {
console.log(error);
});
}

//setting up function for Spotify to call on the IDS 
function artist(){
  spotify.search({ type: 'track', query: userInput }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

// console.log(data);
    console.log("__________________________________")
    console.log ("Artist: " + data.tracks.items[0].artists[0].name);
    console.log ("The Song's Name: " + data.tracks.items[0].name);
    console.log ("Link of the Song on Spotify: " + data.tracks.items[0].external_urls.spotify);
    console.log ("Album: " + data.tracks.items[0].album.name); 
    console.log("__________________________________")
})

};

function movie() {
  var title= "http://www.omdbapi.com/?t=" + userInput + "&plot=short&apikey=trilogy"

//make a request using axios for the movie information
// Make a request for a user with a given ID - from Axious NPM 
axios.get(title).then(
  function(response) {
     console.log("__________________________________")
     console.log("Tittle of the movie: " + response.data.Title);
     console.log("Year the movie came out: " + response.data.Year);
     console.log("The movie's rating is: " + response.data.imdbRating);
     console.log("Rotten Tomatoes Rating of the movie: " + response.data.Ratings);
     console.log("Country where the movie was produced: " + response.data.Country);
     console.log("Language of the movie: " + response.data.Language);
     console.log(" Plot of the movie: " + response.data.Plot);
     console.log("Actors in the movie: " + response.data.Actors);
     console.log("__________________________________")
  }
);
}

//fs
var doWhatItSays = function(){

fs.readFile("random.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");
    command=dataArr[0];
    userInput=dataArr[1]
  if (command==="spodify-this-song"){
    artist(userInput);
  }
  else if (command==="movie-this"){
    movie(userInput);
  }
  else if (command==="concert-this"){
    concert(userInput);
  }
  else if (command==="do-what-it-says"){
    doWhatItSays(userInput);
  }
  
  // We will then re-display the content as an array for later use.
  // console.log(dataArr);

});
}
// //pars (gathering the correct infomation that we need from the request response)

// Display the relevant responce information
if (command==="spotify-this-song"){
  //  console.log(userInput);
   artist(userInput);
}
else if (command==="movie-this"){
  // console.log(userInput);
  movie();
  
}
else if (command==="concert-this"){
  // console.log(userInput);
  concert();
}
else if (command==="do-what-it-says"){
  console.log(userInput);
  doWhatItSays();
}

//Append Data to log.txt
// fn.appendFile("log.txt",artist,movie,concert)