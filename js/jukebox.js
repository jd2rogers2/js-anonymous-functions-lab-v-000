$(document).ready(function(){
  menu();
  play();
  pause();
  show();
});

var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
var artists = Object.keys(jukeboxSongs);
var theArtist = artists[Math.floor(Math.random()) * artists.length];
var songToPlay = jukeboxSongs[theArtist];

function menuMessage() {
  return $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
}

function playMessage() {
  return $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
  return "now playing " + songToPlay + " by " + theArtist;
}

function pauseMessage() {
  return $('#songPaused').html(songToPlay + " is paused");
}

function showMessage() {
  var songs = "";
  for (var key in jukeboxSongs) {
    songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
  }
  return $('#showSongs').html(songs);
}

function randomNumber() {
  return Math.floor(Math.random());
}

function menu() {
  $('#menu').on('click', menuMessage);
}

function play() {
  $('#play').on('click', playMessage);
}

function pause() {
  $('#pause').on('click', pauseMessage);
}

function show() {
  $('#show').on('click', showMessage);
}
