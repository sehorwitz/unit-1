/* Stylesheet by Shannon Horwitz, 2024 */
// initialzie function called when the script loads
function initialize(){
    jsAjax();
    addColumns(cityPop);
};
// create cityPop array
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

//function to create a table with cities and their populations
function addColumns(cityPop){

    //create the table element
    var table = document.createElement("table");

    //create a row
    var row = document.createElement("tr");

    //loop through each index in the cityPop array
    for(var i = 0; i < cityPop.length; i++){
		// if the index is 0, add the header
        if (i == 0) {
			// define the header to be inserted
            row.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th><th>City Size</th>")
			// insert the header
            table.appendChild(row);
			// set the citySize variable
            var citySize;
            // if the index in cityPop is less than 100000, set the citySize variable to Small
            if (cityPop[i].population < 100000){citySize = 'Small';} 
			// if the index in cityPop is less than 500000, set the citySize variable to Medium
            else if (cityPop[i].population < 500000){citySize = 'Medium';}
			// otherwise, set the citySize variable to Large
            else {citySize = 'Large';};
        }
        else {
			// set the citySize variable
            var citySize;
			// if the index in cityPop is less than 100000, set the citySize variable to Small
            if (cityPop[i].population < 100000){citySize = 'Small';} 
			// if the index in cityPop is less than 500000, set the citySize variable to Medium
            else if (cityPop[i].population < 500000){citySize = 'Medium';}
			// otherwise, set the citySize variable to Large
            else {citySize = 'Large';};

        };

        //assign row structure to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td>" + "<td>" + citySize + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }
	// add the table to the mydiv html element
    document.querySelector("#mydiv").appendChild(table);
};

// create the addEvents function
function addEvents(){
	// create the event listener based on the table element, utilizing mouseover, based on a function
	document.querySelector("table").addEventListener("mouseover", function(){
		// set the beginning of the string to be added to and passed onto the table 
		var color = "rgb(";
		// loop through the three indices that exist in RGB color
		for (var i=0; i<3; i++){
			// use the built in Math.round and Math.random to set the random variable
			var random = Math.round(Math.random() * 255);
			// add the random variable to the color string variable
			color += random;
			// if the index is less than two, add a comma to the color string variable
			if (i<2){
				color += ",";
			// if the index is not less than two, add an ending parentheses
			} else {
				color += ")";
		};
	}; 
	// apply the color to the table
	document.querySelector("table").style.color = color;
})};
// apply the addEvents function to the mydiv html element when the user mouses over the mydiv html element
document.querySelector("#mydiv").addEventListener("mouseover", addEvents);

// create the click me function
function clickme(){
	// display to the user a message
	alert('Hey, you clicked me!');
};
// apply the clickme function to the mydiv html element when the user clicks the mydiv html element
document.querySelector("#mydiv").addEventListener("click", clickme);

// define jsAjax function
function jsAjax(){
    //use Fetch to retrieve data
    fetch('data/MegaCities.geojson')
        // convert data to usable form
        .then(function(response){
            return response.json();
        })
        // send converted data to callback function 
        .then(callback) 
};

// define callback function
function callback(response){
    // define myData variable
    var myData = response;
    // pass data to anther function
    nextFunction(myData);
};

// define nextFunction function
function nextFunction(data){
	// apply the header to the html element
    document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br> ' + JSON.stringify(data));
};

// call initialize
document.addEventListener('DOMContentLoaded',initialize);