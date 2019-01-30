# liri-node-app

BUILDING LIRI:

 LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

In the terminal you have 4 command options as the end user to choose from: 
    1. "movie-this"
    2. "concert-this"
    3. "spotify-this"
    4. "do-what-it-says"

Each command will provide different information:

    1.-->"movie-this" command will provide the user the following:
          *Tittle of the movie: 
          *Year the movie came out:
          *Rotten Tomatoes Rating of the movie: 
          *Country where the movie was produced:
          *Language of the movie:
          *Plot of the movie:
          *Actors in the movie:
    
    2.-->"concert-this" command will provide the user the following: 
          *Name of the artist:
          *Name of the venue:
          *Venue Location:
          *Date of the event (MM/DD/YYYY):

    3.-->"spotify-this-song" command will provide the user the following:
          *Artist(s):
          *The song;s name:
          *A preview link of the song from Spotify:
          *The album that the song is from:
          **If no song is provided then your program will default to "The Sign" by Ace of Base.
        
    4.-->"do-what-it-says" command will provide the user the following:
        *LIRI will take the text iside of a file named random.txt and then use it to call one of LIRI's commands.