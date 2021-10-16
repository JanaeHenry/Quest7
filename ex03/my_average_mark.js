// average aka the mean - the sum of numbers divided by the amount of numbers
// array.length counts the # of elements in an array
//The toFixed() method converts a number into a string, rounding to a specified number of decimals.
/* function to find average:
var total = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = total / grades.length; 
*/
/* to find the average of all the grades I would first add all the numbers in the hash together.
then I would divide the total by the total number of numbers I added :),,,then voila!*/
/* Example 01
Input: [
        {"string": "Quentin", "integer": 1},
        {"string": "Fred", "integer": 1},
        {"string": "Julia", "integer": 18},
        {"string": "stephanie", "integer": 13}
       ]
Output: 8.3
*/



/*function my_average_mark(param_1) {
    let arr = Object.keys(param_1);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        
        sum += arr[i];
        avg = sum / arr.length;
        return (avg);
    }
    
};*/

/*const arr = [
    {"string": "John", "integer": 7},
    {"string": "Margot", "integer": 8},
    {"string": "Jules", "integer": 4},
    {"string": "Marco", "integer": 19}
  ]*/
  
  /*function my_average_mark(param_1) {
  const avg = param_1.reduce((sum, hash) => sum + hash.integer, 0) / param_1.length
  
  return(avg.toFixed(2))
  }; */

  function my_average_mark(param_1) {
let i = 0;
let sum = 0;
let promise = 0;
while(param_1[i] != undefined) {
    sum = sum + param_1[i]["integer"]; 
    i++;
}
promise = (sum / i).toFixed(1);
return promise;
};
 
 