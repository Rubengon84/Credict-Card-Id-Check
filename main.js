// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [8, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:


function checkCard(array) {

  let copyArray = array;
  let last = copyArray.pop();
  let doubleArray = [];
  let singleArray = [];
  const decimalTointeger = (decimal) => { //Convert a decimal number in the sum of his digits.
    let rest = decimal % 10;
    let result = 1+rest;
    return result;
  }
  const sum = (arr) => arr.reduce(function (a,b){return a+b;}); // Fuction make the total sum of the all elements of Array.

  for(let i= copyArray.length-1; i >= 0; i--){// loop to go truth the Array from the left.
    let double = copyArray[i] *2;
      if( double >= 10) {
        double = decimalTointeger(double);
      }
    doubleArray.unshift(double);// Make a new array with double de digits.
    i= i - 1;
    if( i === -1) {
      break;
    } else{
    singleArray.unshift(copyArray[i]); // Make a new array of the other number single.
  }
}

let sumTotal = sum(doubleArray) + sum(singleArray); // Make the Sum of the 2 Arrays
let digitX = 10 - (sumTotal % 10);  // show the digit.


if(digitX === last) { //Check the last digict with the result of Luhn algorithm.
  return true;
}
else{
  return false;
}
  
};



function findInvalidCards(array) { // function for checking invalidcards in an Array, retunr an Array
  let invalidCards=[];
  array.forEach(element => {
    let arrayChecked = checkCard(element);
    if(!arrayChecked){
      invalidCards.push(element);
    }
  });
  return invalidCards;
};

function checkedCompany(array) {// Check the company of the credit card.
  if(array[0] === 3) {
    return 'Amex';
  }else if (array[0] === 4){
    return 'Visa';
  }else if (array[0] === 5){
    return 'Mastercard';
  }else if (array[0] === 6){
    return 'Discover';
  }else{
    return 'Company not found';
  }
};

function idInvalidCardCompanies(array) { // return an Array of cards companies without duplicates.
  let companies = [];
  array.forEach(element =>{
    let company = checkedCompany(element);
     if (company != 'Company not found'){ // check if Company is 'Not found'.
    let duplicate = companies.includes(company);// check if the company is in the Array of companies.
      if(!duplicate){
    companies.push(company);
    }
  }
  });
  return companies;
};

function checkEverything(array){ // Completed function that log to the console an Array of Ivalid Cards and the companies.
  let arr = findInvalidCards(array);
  console.log(arr);
  console.log(idInvalidCardCompanies(arr));
}

checkEverything(batch);

