///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
// function to return sum of elements in array 
function sum(fujiAcres) { 
    let sum = 0;
// Initialize sum 
   
// Iterate through all elements 
// and add them to sum 
for (let i = 0; i < fujiAcres.length; i++) 
            sum += fujiAcres[i]; 
        return sum; 
    } 
//console log the sum total of array
    console.log("Fuji Apples picked per week:" + sum(fujiAcres));

//code repeated for final two arrays
function sum(galaAcres) { 
    let sum = 0;
    
for (let i = 0; i < galaAcres.length; i++) 
            sum += galaAcres[i]; 
        return sum; 
        } 
    console.log("Gala apples picked per week:" + sum(galaAcres));

function sum(pinkAcres) { 
    let sum = 0;
        
for (let i = 0; i < pinkAcres.length; i++) 
            sum += pinkAcres[i]; 
        return sum; 
            }  
    console.log("Pink apples picked per week:" + sum(pinkAcres));

//This took a little thinking... created the totalAcres variable combining the three sum functions declared.
//This code is definitely longer/messier than it needs to be, but will support any changes in indexes to any of the arrays.
let totalAcres = sum(fujiAcres) + sum(galaAcres) + sum(pinkAcres);{
    console.log(totalAcres)
}
// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
//totalAcres = total sum acres picked over seven days. Daily Average = totalAcres/7
let averageDailyAcres = (totalAcres / 7);{
    console.log(averageDailyAcres)
}


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft > 0) {
    acresLeft -= averageDailyAcres;
    days ++
}
console.log(days);
//simply followed the steps above. Either I'm getting better at translating human instructions into code or they are just written very clearly... if I did it correctly that is!

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
const tonsPerAcre = 6.5;
//created empty arrays
let fujiTons = [];
let galaTons = [];
let pinkTons = [];
//looped through all arrays... unlike problem 1, this method requires the assumption that all arrays are the same length (7 days in a week).
for(let i = 0; i < fujiAcres.length; i++)
{
//acres picked of each type * 6.5 (tonsPerAcre) = total tons picked by apple type
    fujiTons.push(fujiAcres[i] * tonsPerAcre);
    galaTons.push(galaAcres[i] * tonsPerAcre);
    pinkTons.push(pinkAcres[i] * tonsPerAcre);
}
//console logged results
console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);






// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
//set pounds
const tonPounds = 2000;
//defined empty arrays
let fujiPounds = [];
let galaPounds = [];
let pinkPounds = [];

//looped through arrays, again assuming identical length (7 days per week).
for(let i = 0; i < fujiTons.length; i++)
{
//multiplied tons per day by tonPounds value (2000) to convert to pounds. 
//Used the push method to add new values to the new arrays as in previous problem.
    fujiPounds.push(fujiTons[i] * tonPounds);
    galaPounds.push(galaTons[i] * tonPounds);
    pinkPounds.push(pinkTons[i] * tonPounds);
}
console.log(fujiPounds);
console.log(galaPounds);
console.log(pinkPounds);






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
let fujiProfit = 0;
let galaProfit = 0;
let pinkProfit = 0;
//looped through all arrays again assuming identical length.
for(let i = 0; i < fujiPounds.length; i++)
{

//pounds * price/pound calculates profit/day
//used += operator to add the daily profit to total profit.
    fujiProfit += (fujiPounds[i] * fujiPrice);
    galaProfit += (galaPounds[i] * galaPrice);
    pinkProfit += (pinkPounds[i] * pinkPrice);
}

//console logged results / 100 to show dollar amounts instead of cents
console.log(fujiProfit / 100);
console.log(galaProfit / 100);
console.log(pinkProfit / 100);


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
//added total profits together and console logged result / 100 to show dollar amounts.
let totalProfit = (fujiProfit + galaProfit + pinkProfit);
console.log("total profit =", totalProfit / 100);