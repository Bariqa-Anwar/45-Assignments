/*Q:21 They think of something you could store in a Typescript Object.
Write a program that creates Objects containing these items*/

interface items {
    name: string,
    price: number,
    
}

// Creating an object

let novel: items ={
    name: "CHICKEN SOUP",
    price: 60,
    
};

console.log(`novel name: ${novel.name}, price: $${60}`);