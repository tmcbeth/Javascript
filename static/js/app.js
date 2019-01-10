// from data.js
var tableData = data;

// YOUR CODE HERE!

// select table
var table = d3.select("#ufo-table");

// Select Filter button

submit = d3.select("#filter-btn");

submit.on("click", function () {
    
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(data);

    var filteredData = data.filter(date => date.datetime === inputValue);

    console.log(filteredData);
    

    filteredData.forEach(function (ufoReport) {
        console.log(ufoReport);
        var row = table.append("tr");

        Object.entries(ufoReport).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = table.append("td");
            cell.text(value);
        });
    });
});