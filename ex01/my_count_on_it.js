
/*Input: ["This", "is", "the", "way"]
Output: 
Create a function
array as parameter
returns an array with the length of each strings
Return Value: [4, 2, 3, 3]*/

/*function my_count_on_it(param_1) {
for(let i = 0; i < param_1; i++){

}
};*/

/*function my_count_on_it(param_1) {
let i = 0
    while(i < param_1.length){
        i++;
        return param_1.length[i];
    
}*/

/*function my_count_on_it(param_1) {
    let arr = []
    for(let i = 0; i < param_1.length; i++){
        arr.push(param_1[i]);
    }
    return arr;
};*/

/*function my_count_on_it(param_1) {
    for(let i = 0; i < my_count_on_it.length; i++){
        console.log(my_count_on_it[i].length);
    }
};*/

/*function my_count_on_it(param_1) {
    console.log(my_count_on_it);

   let resultArray = my_count_on_it.map((param_1) => {
        return param_1.length;
});
}
console.log(resultArray);*/

function my_count_on_it(param_1) {
    let arr=[]
     for(let i = 0; i < param_1.length; i++){
         arr.push(param_1[i].length)
     }
     return arr;
 };