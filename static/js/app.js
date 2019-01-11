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
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    var inputValue = inputElement.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");

    console.log(inputValue);
    console.log(data);

    // var filteredData = data.filter(date => date.datetime === inputValue);

    var filter = {
        datetime: inputValue,
        city: cityValue,
        state: stateValue,
        country: countryValue,
        shape: shapeValue
    }

    filteredData = data.filter(function(item) {
        
        for (var key in filter) {
            if (item[key] === undefined || item[key] != filter[key])
                return false;
            
        }
        return true;
      });

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