

/*function my_map_mult_two (array) {
    var sum = 2;
    for (var i = 0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}
console.log(my_map_mult_two[1,2,3,4,5]); 

function my_map_mult_two(param_1) {
let arr = param_1
    for(let i = 0; i < arr.length; i++){
return i*2;
}
};*/

//Input: [1, 2, 3, 4, 5]
////MY_CODE// [1*2, 2*2, 2*3, 2*4, 2*5]
////////////////////Output: [2, 4, 6, 8, 10]

function my_map_mult_two(param_1) {
   let arr=[]
    for(let i = 0; i < param_1.length; i++){
        arr.push(param_1[i] * 2)
    }
    return arr;
};   
    