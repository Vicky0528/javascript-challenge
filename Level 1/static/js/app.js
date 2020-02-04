// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//when First Run the Html, set a default values to tbody

function inserTable(data){
    data.forEach(d=> {
        var row = tbody.append("tr");
        Object.entries(d).forEach(([key,value])=> {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

inserTable(tableData);

var click = d3.select("#filter-btn");

click.on("click", function(){
    
    tbody.html("");

  // user input as variable
    var inputElement = d3.select("#datetime");
    var InputValue = inputElement.property("value");

 // Filter Data
    var filterData = tableData.filter(tableData => tableData.datetime == InputValue);
    inserTable(filterData);
});
