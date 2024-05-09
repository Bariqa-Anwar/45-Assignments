/*Q 42: Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() 
that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() 
to see that the list has actually been modified.*/


//from 41
let magicians: string[] = ["Whizz" , "Steve" , "Goerge"];

function show_magicians ( magicians: string[]) {
    magicians.forEach( magicians => {
        console.log( magicians);
    });
    
}
show_magicians(magicians);



//for 42
let magicians_new: string[] = ["Whizz" , "Steve" , "Goerge"];

function make_great ( magicians: string[]) {
    
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " 'The great'";
    }
}
make_great(magicians);    // modifies the original array
show_magicians(magicians); //shows modified names
