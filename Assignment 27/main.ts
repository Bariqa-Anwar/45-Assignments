/*Q 27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/


 let alien_color = "'green'";

// for green colour

if ( alien_color == "'green'" ) {
    console.log("You just earned 5 points for shooting the alien ");
    
}
//for yellow color
else if (alien_color == "'yellow'") {
    console.log( "Congrats! You just earned 10 points");

}
//for red color

 else if (alien_color== "'red'"){
    console.log("Congrats! You earned 15 points");
    
}
else{
    console.log("You lose!")
};

