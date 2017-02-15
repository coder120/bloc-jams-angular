(function() {
  
     function SongPlayer(Fixtures) {
      
        var SongPlayer = {};
         
        var currentAlbum = Fixtures.getAlbum();
         
    var getSongIndex = function(song) {
     return currentAlbum.songs.indexOf(song);
 };
         /**
    * @function playSong
    * @desc stop audio file and makes song.playing equal to true in order to show pause
    * @param {Object} song
    */
    var stopSong = function(song) {
      currentBuzzObject.stop();
      SongPlayer.currentSong.playing = null;
    };
         
    /**
    * @desc song from album
    * @type {Object}
    */

     SongPlayer.currentSong = null;
    
     /**
 * @desc Buzz object audio file
 * @type {Object}
 */
     var currentBuzzObject = null;
  
/**
 * @function setSong
 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
 * @param {Object} song
 */
    
    var setSong = function(song) {
    if (currentBuzzObject) {
         stopSong(song);
    }
 
    currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
    });
 
    currentSong = song;
 };
        
         /**
    * @function playSong
    * @desc play audio file and makes song.playing equal to true in order to show pause
    * @param {Object} song
    */
    
     var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    };
   /**
    * @function SongPLayer.play
    * @desc plays song, prevents already playing song to be played again, and shows play
    * @param {Object} song
    */
        
     SongPlayer.play = function(song) {
         song = song || SongPlayer.currentSong;
         if (currentSong !== song) {
             setSong(song);
              playSong(song);
         } else if (currentSong === song) {
             if (currentBuzzObject.isPaused()) {
                 currentBuzzObject.play();
         }
     }
 };
    /**
    * @function SongPlayer.pause
    * @desc if song is currently playing, pauses song
    * @param {Object} song
    */

  SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
     currentBuzzObject.pause();
     song.playing = false;
  }
  
  /**
    * @function SongPlayer.previous
    * @desc find the previous song in songs' index and plays it
    */
   SongPlayer.previous = function() {
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex--;
       
       if (currentSongIndex < 0) {
          stopSong(song);
     } else {
         var song = currentAlbum.songs[currentSongIndex];
         setSong(song);
         playSong(song);
     }
 };
       /**
    * @function SongPlayer.previous
    * @desc find the next song in songs' index and plays it
    */
         
         SongPlayer.next = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex++;
	
	  if (currentSongIndex > currentAlbum.songs.length - 1) {
        stopSong(song);


      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };
         
  return SongPlayer;
 };
     angular
         .module('blocJams')
         .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();