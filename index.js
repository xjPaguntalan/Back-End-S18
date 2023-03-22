/*
	
//Note: strictly follow the variable names and function names from the instructions.

*/

function addNum(addNum1, addNum2) {
    sum = addNum1 + addNum2;
    console.log("Displayed sum of " +addNum1+ " and " +addNum2);
    console.log(sum);
};

addNum(5, 15);

function subNum(subNum1, subNum2) {
    diff = subNum1 - subNum2;
    console.log("Displayed difference of " +subNum1+ " and " + subNum2);
    console.log(diff);
};

subNum(20, 5);

function multiplyNum(multiplyNum1, multiplyNum2) {
    console.log("The product of " +multiplyNum1+ " and " +multiplyNum2+ ":");
    return multiplyNum1 * multiplyNum2;
}

let product = multiplyNum(50, 10);
console.log(product);

function divideNum(divideNum1, divideNum2) {
    console.log("The quotient of " +divideNum1+ " and " +divideNum2+ ":");
    return divideNum1 / divideNum2;
};

let quotient = divideNum(50, 10);
console.log(quotient);

function getCircleArea(radius) {
    console.log("The result of getting the area of a circle with " +radius+ " radius:");
    return 3.14159 * (radius ** 2);
};

let circleArea = getCircleArea(15);
console.log(circleArea);

function getAverage(num1, num2, num3, num4) {
    console.log("The average of " +num1+ "," +num2+ "," +num3+ " and " +num4+ ":");
    return (num1 + num2 + num3 + num4) / 4;
};

let averageVar = getAverage(20, 40, 60, 80);
console.log(averageVar);

function checkIfPassed(score, total) {
    console.log("Is " +score+ "/" +total+ " a passing score?");
    return (score / total) * 100;
};

let isPassed = checkIfPassed(38, 50) > 75;
console.log(isPassed);

//Do not modify
//For exporting to test.js
try {
	module.exports = {
		addNum,subNum,multiplyNum,divideNum,getCircleArea,getAverage,checkIfPassed
	}
} catch (err) {

}
