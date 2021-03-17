function switchCaseSequential(num) {
    // Writte code below this line
    var answer;
    switch (true) {
        case num < 4:
            answer = "Low";
            break;
        case num < 7:
            answer = "Mid";
            break;
        case num < 10:
            answer = "High";
            break;
    }


    // Write code above this line
    return answer;

}
switchCaseSequential(1);
switchCaseSequential(2);
switchCaseSequential(3);
switchCaseSequential(4);
switchCaseSequential(5);
switchCaseSequential(6);
switchCaseSequential(7);
switchCaseSequential(8);
switchCaseSequential(9);
console.log(switchCaseSequential()); // Change this line
module.exports = switchCaseSequential;