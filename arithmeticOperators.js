// These tasks are aimed at making you more comfortable with solving math problems using JS. Print each of your results to the console.

//
// BASIC ARITHMETIC PROBLEMS
//

// Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?

var oneNight = 6540;
var ticket = 15;
console.log([oneNight / ticket] + " were sold that night.");
// 436

// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?

var incomeWeek = 500;
var yearWeeks = 52;
console.log("Sylvia makes " + [incomeWeek * yearWeeks] + " every year.");
// 26000

//
// PERCENTAGE
//

// Q3. Calculate the percentage of 17/30. Expected output: number%

var sevenTeen = 17;
var thirTy = 30;
console.log("The output in percent is " + [[sevenTeen / thirTy] * 100] + "%.");
//

//
// Geometry Formulas
//

// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.

var sideLengthSquare1 = 4.75;
var sidesSquare = 4;
console.log(
  "The perimeter of square1 is " + [sideLengthSquare1 * sidesSquare] + "."
);
// 19

// Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

var sideLengTri1 = 5;
var sideLengTri2 = 6;
var sideLengTri3 = 7;
console.log(
  "The perimeter of triangle1 is " +
    [sideLengTri1 + sideLengTri2 + sideLengTri3] +
    "."
);
// 18

// Q6. Calculate the area of a square. Each side is 5cm.

var sideLengthSquare2 = 5;
console.log(
  "The area of square2 is " + [sideLengthSquare2 * sideLengthSquare2] + "."
);
// 25
