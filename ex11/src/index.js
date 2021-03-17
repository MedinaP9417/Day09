function switchCase(letter) {
    // Only change code below this line
    var animals;
    switch (letter) {
        case "a":
            animals = "antelope";
            break;
        case "b";
        animals = "bird";
        break;
        case "c";
        animals = "cat";
        break;
        default:
            animals = "stuff";
            break;
    }
    return animals;
}
switchCase("a");
switchCase("b");
switchCase("c");
switchCase("d");
switchCase("4");

console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase("4"));

// Only change code above this line
console.log(switchCase(letter)); // Change this line
module.exports = switchCase;