/*Q 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.*/


let magicians: string[] = ["Whizz" , "Steve" , "Goerge"];

function show_magicians ( magician: string[]) {
    magician.forEach( magician => {
        console.log( magician);
    });
    
}
show_magicians(magicians);