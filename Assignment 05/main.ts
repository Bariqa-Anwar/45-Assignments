/*Q: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces.*/


//Storing a person's name in a variable including some white spaces

let whitespace= "\n\t Bariqa Anwer \t\n";

//Print the name with white spaces

console.log(whitespace);

//Striping the whitespaces

let withoutwhitespace = whitespace.trim();

//Print the same name whithout the white spaces

console.log(withoutwhitespace);
