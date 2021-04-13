//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE


/*

Write a function that can count the number of
genders in the dataset. The function will 
accept a string and an array as arguements. 
The output should be a number. 

*/

function genderCount(array, genderEnter){
//CODE BELOW HERE

//to hold the count
var count = 0;

//iterating over the array 
for(var i = 0; i <= array.length - 1; i++){


//What condition are we checking for?
//What needs to be true?
if(array[i].gender === genderEnter) {
   
   //add one to count when the input gender matches the one in the dataset
    
    
    count++ 
  
  
  }

}


console.log(count)
} 
//CODE ABOVE HERE
 
  genderCount(customers, 'male')