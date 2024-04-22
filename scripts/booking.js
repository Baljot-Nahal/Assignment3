/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var totalCost = 0;

var daysCounter = 0;
var dailyRate = 35;
var calculatedCost = document.getElementById("calculated-cost");
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
var clear = document.getElementById("clear-button");
var fullDay = document.getElementById("full");
var halfDay = document.getElementById("half");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clickedApply(){
    // the second condition is for the added challenge, ! checks if its not clicked then add the clicked condition
    if(this.classList.contains('blue-hover') && !this.classList.contains('clicked')){
        daysCounter += 1;
        dailyRate = 35;
        calculate();
    }  
}
monday.addEventListener('click', clickedApply);
tuesday.addEventListener('click', clickedApply);
wednesday.addEventListener('click', clickedApply);
thursday.addEventListener('click', clickedApply);
friday.addEventListener('click', clickedApply);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function removeClick(){
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");

    totalCost = 0;
    daysCounter = 0;
    calculate();
}

clear.addEventListener('click', removeClick);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function changeRate(){
    dailyRate = 20;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    calculate();
}

    halfDay.addEventListener('click', changeRate);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDayChange(){
    dailyRate = 35;
    halfDay.classList.remove('clicked');
    fullDay.classList.add('clicked');
    calculate();
}

    fullDay.addEventListener('click', fullDayChange);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    totalCost = dailyRate * daysCounter;
    calculatedCost.innerHTML = totalCost;
}


