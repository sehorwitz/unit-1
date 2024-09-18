// Summary of Changes:
// 1. Moved header creation outside the loop in addColumns.
// 2. Attached event listeners to the table rather than #mydiv.
// 3. Called addEvents after the table is created.
// 4. Fixed bracket issues in addEvents.
// -Anwar

// Function to create a table with cities and their populations
function addColumns(cityPop) {
	// Create the table element
	var table = document.createElement("table");

	// Create and append the header row outside the loop to avoid redundancy
	var header = "<tr><th>City</th><th>Population</th><th>City Size</th></tr>";
	table.insertAdjacentHTML('beforeend', header); // Insert header row into the table -Anwar

	// Loop through cityPop array to add data rows
	for (var i = 0; i < cityPop.length; i++) {
		// Determine city size based on population
		var citySize;
		if (cityPop[i].population < 100000) {
			citySize = 'Small';
		} else if (cityPop[i].population < 500000) {
			citySize = 'Medium';
		} else {
			citySize = 'Large';
		}

		// Create and insert row with city data
		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td><td>" + citySize + "</td></tr>";
		table.insertAdjacentHTML('beforeend', rowHtml); // Insert data row into the table -Anwar
	}

	// Append the table to the mydiv element
	document.querySelector("#mydiv").appendChild(table); // Append the table to the div with id 'mydiv' -Anwar
}

// Create the addEvents function
function addEvents() {
	// Apply the mouseover event to the table to change color
	document.querySelector("table").addEventListener("mouseover", function() {
		var color = "rgb(";
		for (var i = 0; i < 3; i++) {
			var random = Math.round(Math.random() * 255); // Generate a random number between 0 and 255 -Anwar
			color += random;
			if (i < 2) {
				color += ",";
			} else {
				color += ")";
			}
		}
		// Apply the generated color to the table's text
		document.querySelector("table").style.color = color; // Change the text color of the table -Anwar
	});

	// Apply click event to the table
	document.querySelector("table").addEventListener("click", function() {
		alert('Hey, you clicked me!'); // Show an alert when the table is clicked -Anwar
	});
}

// Assuming cityPop is an array of objects with city and population properties
// Define the cityPop array before using it in the initialize function


// Initialize function to set up the table and events
function initialize(){
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

	addColumns(cityPop); // Create the table with city data -Anwar
	addEvents(); // Bind events to the table after it is created -Anwar
}

// Call initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initialize); // Ensure initialize is called when the DOM is fully loaded -Anwar


/*
------------------------
Code Review Comments:
------------------------

1. // initialzie function called when the script loads
   - Typo in the word "initialzie." It should be "initialize." -Anwar

2. if (i == 0) { 
   // You are adding the header inside the loop, which is inefficient. The header should only be added once, outside the loop. Adding it inside means you are checking this condition unnecessarily for every iteration. -Anwar

3. row.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th><th>City Size</th>");
   // The header creation should be outside the loop, as it only needs to be added once. This also means that the citySize calculation in this block is redundant for the header row. -Anwar

4. var citySize; 
   // Declaring `var citySize;` inside both branches of the `if` statement is unnecessary. You could declare it once before the conditional logic to avoid repetition. -Anwar

5. if (cityPop[i].population < 100000){citySize = 'Small';} 
   // This logic for calculating `citySize` is duplicated in both the header block and the rows block. The population condition logic only applies to the actual rows of city data, not the header, so it should be moved outside of the header section. -Anwar

6. else if (cityPop[i].population < 500000){citySize = 'Medium';} 
   // The same `citySize` calculation is repeated twice unnecessarily. Consolidating this logic will make the code cleaner. -Anwar

7. var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td>" + "<td>" + citySize + "</td></tr>";
   // This string concatenation is repetitive. Using template literals (e.g., `rowHtml = `<tr><td>${cityPop[i].city}</td><td>${cityPop[i].population}</td><td>${citySize}</td></tr>`;) would make the code cleaner and easier to read. -Anwar

8. document.querySelector("table").addEventListener("mouseover", function(){
   // You are applying the event listener directly to the table inside this function. However, the mouseover event is also applied globally to the entire "mydiv" element. This can cause confusion and lead to unexpected behavior. Ideally, the event listener should be applied specifically to the table itself and not `#mydiv`. -Anwar

9. document.querySelector("#mydiv").addEventListener("mouseover", addEvents);
   // Adding the event listener to the entire `#mydiv` is inefficient. It triggers the event even if the user interacts with any part of the `#mydiv` element rather than just the table. This could cause issues if other content is added to `#mydiv`. The event listener should be directly applied to the table element instead. -Anwar

10. var color = "rgb(";
   // Using `var` for the `color` variable is outdated. You should prefer using `let` or `const` to ensure proper scoping. In this case, `let` would be more appropriate since the value of `color` is being modified. -Anwar

11. document.querySelector("table").style.color = color;
   // You're applying the color change to the text color of the table. To make the effect more noticeable, consider applying the color to the table's background or borders instead of the text color. -Anwar

12. document.querySelector("#mydiv").addEventListener("click", clickme);
   // Similar to the hover event, this click event is applied to the entire `#mydiv` element rather than specifically to the table. The event should be applied directly to the table to avoid conflicts if other content is added to `#mydiv`. -Anwar

13. document.addEventListener('DOMContentLoaded',initialize);
   // While this is technically correct, a more common pattern today is to place the `<script>` tag at the end of the body element. This eliminates the need for the 'DOMContentLoaded' event listener since the script will run after the DOM is fully loaded. -Anwar

------------------------
End of Comments -Anwar
------------------------
*/
