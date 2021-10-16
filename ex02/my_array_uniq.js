/*function my_array_uniq(param_1) {
    let arr=[]
     for(let i = 0; i < param_1.length; i++){
         arr.push(param_1.filter)
     }
     return arr;
 };*/

/* function my_array_uniq(param_1) {
    for(let i = 0; i < param_1.length; i++)
    return new Set(my_array_uniq.filter)
};*/

function my_array_uniq(param_1) {
    const unique = param_1.filter((value, index) => {
        return param_1.indexOf(value) === index;
    }
    );
    return unique;
};