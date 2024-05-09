/*Q 40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take 
in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the 
function to make three dictionaries representing different albums. Print each return value to show that Objects are storing 
the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an 
album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one 
new function call that includes the number of tracks on an album.*/

function make_album ( artist:string, title:string) {
    return {artist, title}; 
    }
 
let album1 = make_album("Artist One", "The first Album");
let album2 = make_album("Artist Two", "The Second Album");
let album3 = make_album("Artist Three", "The Third Album");

console.log(album1);
console.log(album2);
console.log(album3);

//number of tracks
function trackAlbum (artist:string, title:string, numberOfTracks?:number) {
    return { artist, title, numberOfTracks};
}
 
let album4 = trackAlbum("Artist Four", "The fourth Album", 50);
let album5 = trackAlbum ("Artist five", "The fifth Album", 46);
let album6 = trackAlbum("Artist six", "The sixth Album", 72);

console.log(album4);
console.log(album5);
console.log(album6);
