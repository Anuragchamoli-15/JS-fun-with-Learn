// Beginner Question

let num = Number(prompt("enter a number chek it is negative or positive"));

if (num > 0) {
  console.log(`${num} is positive`);
} else {
  console.log(`${num} is negative`);
}

let year = Number(prompt("enter a year check it is leap or not"));

if ((year % 100 != 0 && year % 4 === 0) || year % 400 === 0) {
  console.log(`${year} is leap year`);
} else {
  console.log(`${year} is not leap year`);
}

let num2 = Number(prompt("enter a number chek it is negative or positive"));

if (num2 == 0) {
  console.log(`${num} is zero`);
} else {
  console.log(`${num} is not zero`);
}

let day = "monday";

switch (day) {
  case "monday":
    console.log(`day is not sunday`);
    break;
 case "sunday":
    console.log(`day is sunday`);
    break;
  default:
    console.log("helo");
}
