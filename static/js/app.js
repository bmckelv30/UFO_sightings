// from data.js
var tableData = data;

// Use D3 to select the tbody
var tbody = d3.select("tbody");

// Append to table
tableData.forEach((sight) => {
  // Append one table row per obs
  var row = tbody.append("tr");
  // Append one cell for each var - cleaner ver
  Object.entries(sight).forEach(([key,value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});

// Getting a reference to the button on the page with the id property set to `filter`
var button = d3.select("#filter-btn");

button.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault(); 
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = tableData.filter(filter => filter.datetime === inputValue);
  
  // clear the existing output
  tbody.html("");

  filteredData.forEach((filtersight) => {
    // Append one table row per obs
    var row = tbody.append("tr");
    // Append one cell for each var - cleaner ver
    Object.entries(filtersight).forEach(([key,value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});
