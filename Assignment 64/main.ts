/*Q 64: Combine Strings and Niumbers: Write a function that merges a piece of text with a number. For example, if provided
with "Age:" and 30, it should give back "Age:30".*/

function combineStringAndNumber (text: string, number: number): string {
    return text + number;
}

console.log(combineStringAndNumber("Age:", 30));