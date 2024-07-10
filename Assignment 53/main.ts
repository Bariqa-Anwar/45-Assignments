/*Q 53:Pulling apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows
,like coding, languages, tools and software frameworks. Find a way to get three specific skills from this list and show them*/


let programmer_skills = {
    languages: ["Typescript" , "Javascript" , "Python" , "C++"],
    tools: ["Git" , "Docker" , "WebPack"],
    softwareFramework: ["React" , "Angular" , "Vue"]
};

let { languages, tools, softwareFramework} = programmer_skills;

console.log(`Language: ${languages[1]}, Framework: ${softwareFramework[0]}, Tool: ${tools[2]}`);