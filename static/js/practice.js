// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello(){
    console.log("Hello there!");
  }

// Original addition function
function addition(a, b) {
  return a + b;
}

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
  var total = addition(c, d) * 2;
  return total;
}

//refactored into a single line
doubleAddition = (c, d) => addition(c, d) * 2;

var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

for (var i = 0; i < 5; i++) {
   console.log("I am " + i);

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

for (var i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
}

function buildTable(data) {
  tbody.html("");
}

// With below function, we have done the following:

// Looped through each object in the array
// Appended a row to the HTML table
// Added each value from the object into a cell

data.forEach((dataRow) => {
  let row = tbody.append("tr");
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}