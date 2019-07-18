'use strict';


//--------------------------------------------------------------
//GLOBAL VARIABLES

//fill array with times
var openHoursArr = ['6am', '7am', '8am', '9am', '10 am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//grabbing the myTable id from html
var tableBody = document.getElementById('tableBody');

//allLocationsArr to hold current and future locations
var allLocationsArr = [];

//this array holds the names of all the locations, so they can be later referenced as th data
var tableHeadersArr = [];

//connect javascript to the formid in html
var formEl = document.getElementById("myForm");

//------------------------------------------------/
//CONSTUCTOR
function Locationbio(name, maxCustomers, minCustomers, avgPurchase){
    //name
    this.name = name;
    //maxCustomers
    this.maxCustomers = maxCustomers;
    //minCustomers
    this.minCustomers = minCustomers;
    //avgPurchase
    this.avgPurchase = avgPurchase;
    this.customerArray = [];
    this.hourlySalesArr = [];
    this.oneDayTotal = 0;
    //push into the allLocations array
    allLocationsArr.push(this);
    //push location names into header array
    tableHeadersArr.push(this.name);
};
//--------------------------------------------------
// END CONSTRUCTOR
// TODO: create table loop.
//----------------------------------------------------------\\

//TODO: Helper Functions---------------------------------
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function addElement(childElType, childContent, parentEl){
    var childElement = document.createElement(childElType);
    childElement.textContent = childContent;
    parentEl.appendChild(childElement);
}

//--------------------------------------------------------------
//PROTOTYPES

//for loop to have a random number of customers per hour
//create number generator for customers/hour
//push random number back into the constructor

Locationbio.prototype.generateCustomerArray = function(){
    for(var i = 0; i< openHoursArr.length; i++){
        var randomCustomerNumber = randomNumber(this.minCustomers, this.maxCustomers);
        this.customerArray.push(randomCustomerNumber)
    };
};

Locationbio.prototype.generateSalesArray = function(){
    for(var i=0; i< openHoursArr.length; i++){
        var randomCookiesPerHour = (Math.ceil(this.customerArray[i] * this.avgPurchase))
        this.hourlySalesArr.push(randomCookiesPerHour);
        
        this.oneDayTotal += randomCookiesPerHour;
    };
};

Locationbio.prototype.renderTable = function(){
    // generate arrays
    this.generateCustomerArray();
    this.generateSalesArray();

    // make a tr
    var trEl = document.createElement('tr');
    // append to body
    tableBody.appendChild(trEl);

    // make the store name
        // make a th
    var thEl = document.createElement('th');
        // give it content - this.name
    thEl.textContent = this.name;
        // append to tr
    trEl.appendChild(thEl);

    // loop over sales array
    for(var i = 0; i < openHoursArr.length; i++){
        var tdEl = document.createElement('td');
        tdEl.textContent = this.hourlySalesArr[i];
        trEl.appendChild(tdEl);
    }
    
    var thEl = document.createElement('th');
    // give it content - this.name
    thEl.textContent = this.oneDayTotal;
    // append to tr
    trEl.appendChild(thEl);
    // make the total
        // make a td
    
        // give it content - this.total
        // append to tr
}

//OBJECT INSTANCES----------------------------------------
new Locationbio('firstAndPike', 23, 65, 6.3);
new Locationbio('Alki', 2, 16, 4.6);


function renderHeader(){
    // create a tr
    var trEl = document.createElement('tr');
    // append to the table body
    tableBody.appendChild(trEl);
    
    // create th
    var thEl = document.createElement('th');
    // text content: 'location'
    thEl.textContent = 'Location';
    // append to th to tr
    trEl.appendChild(thEl);

    for(var i = 0; i < openHoursArr.length; i++){
        // make table th
        var thEl = document.createElement('th');
        // add text content - hours at i
        thEl.textContent = openHoursArr[i];
        // append to tr
        trEl.appendChild(thEl);

    }

    // create th
    var thEl = document.createElement('th');
    // text content: 'location'
    thEl.textContent = 'Total';
    // append to th to tr
    trEl.appendChild(thEl);

}


function makeFooterRow(){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    
    thEl.textContent = 'Hourly Totals';
    trEl.appendChild(thEl);
    
    var totalOfTotals = 0;
    for(var i = 0; i < openHoursArr.length; i++){
        var hourlyTotal = 0;
        for (var j = 0; j < allLocationsArr.length; j++){
            hourlyTotal += allLocationsArr[j].hourlySalesArr[i];
            totalOfTotals += allLocationsArr[j].hourlySalesArr[i];
        }
        thEl = document.createElement('th');
        thEl.textContent = hourlyTotal;
        trEl.appendChild(thEl);
    }
    thEl = document.createElement('th');
    thEl.textContent = totalOfTotals;
    trEl.appendChild(thEl);
    tableBody.appendChild(trEl);
}

formEl.addEventListener("submit", function(event){
    event.preventDefault();
    var name = event.target.name.value
    var maxCustomers = event.target.maxCustomers.value
    var minCustomers = event.target.minCustomers.value
    // console.log(minCustomers);
    var avgPurchase = event.target.avgPurchase.value
    
    console.log('max = ', maxCustomers, 'min = ', minCustomers, 'name = ', name, 'avg = ', avgPurchase);
    new Locationbio(name, maxCustomers, minCustomers, avgPurchase);
    
    tableBody.innerHTML = "";
    renderHeader();
    for(var i=0; i<allLocationsArr.length; i++){
        allLocationsArr[i].renderTable();
    };
    makeFooterRow();
    
});

//render page --------------------------------------


renderHeader();
for(var i=0; i<allLocationsArr.length; i++){
    allLocationsArr[i].renderTable();
};
makeFooterRow();

//END PAGE----------------------------------------------------