/* Stylesheet by Shannon Horwitz, 2024 */
// initialzie function called when the script loads
function initialize(){
    jsAjax();
    addColumns(cityPop);
};

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