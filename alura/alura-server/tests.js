// This lib allow us to access the file system.
const fs = require('fs');


// This function allows us to read the books.json file.
// The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
const presentData = JSON.parse(fs.readFileSync("books.json"));
const newData = { id: '4', title: "Arthur" };

// This function allows us to write in the books.json file.
// stringify() allows us to convert a JSON object to a string.
fs.writeFileSync("books.json", JSON.stringify([...presentData, newData]));

console.log(JSON.parse(fs.readFileSync("books.json")))