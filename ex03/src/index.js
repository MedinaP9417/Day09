// Only change code below this line
function myEqualFunction(num) {
    if (num == 23) {
        return "Equal";
    }
    return "Not equal";

}

myEqualFunction(5 == 23);
myEqualFunction(23 == 23);
myEqualFunction("23" == 23);
myEqualFunction('23' == 23);
myEqualFunction("text" == 23);
console.log(myEqualFunction("==", 23));


// Only change code above this line
module.exports = myEqualFunction;