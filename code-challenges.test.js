// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

describe("People function", () => {
  it("Takes in an array of objects and returns an array with a sentence about each person with their names capitalized", () => {
    const output = ["Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is a president of the galaxy.",
      "Arthur Dent is a radio employee."]

    // first test my helper method to capitalize the name
    expect(capitalizeName(people[0].name)).toEqual("Ford Prefect")
    
    // now test people list
    expect(peopleList(people)).toEqual(output)
  })
})

/*
  function: peopleList
  param: arr of objects with names and occupations
  create an array for peopleList - an array of sentences about each person 
  for each object of the array
  call a helper function to get the name capitalized
    split the name by " " to get an array
    map and toUpperCase() on the first letter
    join(" ")
    return a string of the name capitalized
  use string interpolation to then PUSH onto the peopleList
  "${person.nameCapitalized} is a ${person.occupation}."
  return peopleList
*/


// b) Create the function that makes the test pass.

// Takes an array of objects, where each object represents a person
// with key-values for names and occupations,
// and returns an array of sentences about each person.
const peopleList = (people) => {
  let sentences = []
  people.forEach(person => {
    let sentence = `${capitalizeName(person.name)} is a ${person.occupation}.`
    sentences.push(sentence)
  })
  return sentences
}

// Helper method to capitalize the name of a person
const capitalizeName = (nameLowerCase) => {
  return nameLowerCase.split(" ")
                      .map(name => name[0].toUpperCase() + name.substring(1))
                      .join(" ")
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("Remainders of Nums Divided by 3", () => {
  it("Takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const output1 = [ 2, 0, -1, 0 ]
    const output2 = [ 2, 1, -1 ]

    expect(mod3(hodgepodge1)).toEqual(output1)
    expect(mod3(hodgepodge2)).toEqual(output2)
  })
})


// b) Create the function that makes the test pass.

/*
  func: mod3
  param: arr of mixed data types 
  filter for nums, use typeof(val) === "number"
  then map, return the val % 3
  return the result
*/
const mod3 = (arr) => {
  return arr.filter(val => typeof(val) === "number")
            .map(num => num % 3)
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("Sum of numbers cubed", () => {
  it("Takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const output1 = 99
    const output2 = 1125

    expect(sumAndCubed(cubeAndSum1)).toEqual(output1)
    expect(sumAndCubed(cubeAndSum2)).toEqual(output2)
  })
})


// b) Create the function that makes the test pass.

/*
sumAndCubed
param: array of nums
Need to cube each number and sum them all together
Going to try out reduce((prevVal, currVal)) => returns new prevVal, initialVal)
initialVal is optional
If no initialVal specified, then prevVal is the first element, currVal is second element.
If initialVal is specified, then prevVal = initialVal and currVal is the first element
ex 1:
prevVal   currVal     new prevVal
0   +   2^3   =       8
8   +   3^3   =       35
35    +   4^3 = 35 + 64 =   99
Looks like this checks out.. so use (prevVal + currVal ** 3), and make initialVal be 0
*/

const sumAndCubed = (arr) => {
  return arr.reduce((prev, curr) => prev + curr ** 3, 0)
}