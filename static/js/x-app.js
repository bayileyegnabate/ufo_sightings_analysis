 // import data from data.js
 const tableData = data;
 // reference the html table using d3
 var tbody = d3.select("tbody");

 // build table
 function buildTable(data) {
 	// clear existing data
 	tbody.html("");

 	// loop through each object in the data
 	// append a row and cells for each value in the row
 	data.forEach((dataRow) => {
 		// append a row to the table body
 		let row = tbody.append("tr");

 		// loop through each field in the dataRow and add each value as a table cell(td)
 		Object.values(dataRow).forEach((val) => {
 			let cell = row.append("td");
 			cell.text(val);
		});
 	});
 }

 // handle clicks
 function handleClick() {
    // grab the datetime value from the filter
 	let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    // let state = d3.select("#state").property("value");
    // let shape = d3.select("#shape").property("value");
    // let country = d3.select("#country").property("value");
 	let filteredData = tableData;

    let filterInputs = [date, city];
    let filters = [];

    for (let i=0; i<filterInputs.length; i++){
        if (filterInputs[i]) {
            filters.push(filterInputs[i]);
        }
    }

    //
    return filters;

}



//  	// use date input to filter
//  	if (date) {
//  		// apply filter to the table data to only keep the rows where the datetime value
//  		// matches the filter value
//  		filteredData = filteredData.filter((row) => row.datetime === date);
//  	} else if (city) {
//         filteredData = filteredData.filter((row) => row.city === city);
//     }
//  	// rebuild the table using the filtered data
//  	buildTable(filteredData);
// }


// 
// attach an event to listen for the form btn
// 
d3.selectAll("#filter-btn").on("click", handleClick);

// 
// build the table when the page loads
// 
buildTable(tableData);


console.log(handleClick());