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
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value").toLowerCase();
    var inputState = d3.select("#state").property("value").toLowerCase();
    var inputCountry = d3.select("#country").property("value").toLowerCase();
    var inputShape = d3.select("#shape").property("value").toLowerCase();

 // Filter by Data:
   if (inputDate!=""){
    console.log(inputDate)
    var filterData = tableData.filter(tableData => tableData.datetime == inputDate);
   };
   if (inputCity!=""){
    console.log(inputCity);
    var filterData = tableData.filter(tableData => tableData.city == inputCity);
   };
   if (inputState!=""){
    console.log(inputState);
    var filterData = tableData.filter(tableData => tableData.state == inputState);
   };
   if (inputCountry!=""){
    console.log(inputCountry);
    var filterData = tableData.filter(tableData => tableData.country == inputCountry);
   };
   if (inputShape!=""){
    console.log(inputShape);
    var filterData = tableData.filter(tableData => tableData.shape == inputShape);
   };

   inserTable(filterData);
});
