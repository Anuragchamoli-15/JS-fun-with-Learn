let inp = document.querySelectorAll("input");
let btn = document.querySelectorAll("button");
let p = document.querySelector("#outPut");

let inp1 = inp[0];
let resultInp = inp[1];

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "Armstrong Number") {
      let num2 = Number(inp1.value);
      let length = num2.toString().length
      let newNum2 = 0;
      let result = 0;
      let original2 = num2;

      while (num2 > 0) {
        newNum2 = num2 % 10;


        result = newNum2 ** length + result;
        num2 = parseInt(num2 / 10);
      }
      resultInp.value = result;
      if (original2 === result) {
        p.innerText = original2 + " is a Armstrong Number";
      } else {
        p.innerText = original2 + " is not a Armstrong Number";
      }
    }

    //************ */ palindromeNum

    if (btn.innerText === "Palindrome Number") {
      let palindromeNum = Number(inp1.value);
      let newNum = 0;
      let palindromeNumOriginal = palindromeNum;

      while (palindromeNum > 0) {
        newNum = (palindromeNum % 10) + newNum * 10;
        palindromeNum = parseInt(palindromeNum / 10);
      }

      resultInp.value = newNum;

      if (palindromeNumOriginal === newNum) {
        p.innerText = palindromeNumOriginal + " is a Palindrome  Number";
      } else {
        p.innerText = palindromeNumOriginal + " is not a Palindrome  Number";
      }
    }

    if (btn.innerText === "Perfect Number") {
      let perfectNum = Number(inp1.value);
      let nums = 0;
      let sum = 0;
      let divisor = []
      let perfectOriginal = perfectNum;

      for (let i = 1; i < perfectNum; i++) {
        if (perfectNum % i === 0) {
          nums = i;
          divisor.push(i)
          sum = nums + sum;
        }
      }

      resultInp.value = sum;
      console.log(divisor)

      if (perfectOriginal === sum) {
        p.innerText = perfectOriginal + " is a Perfect  Number its divisor is " + divisor;
      } else {
        p.innerText = perfectOriginal + " is not a Perfect  Number";
      }
    }
  });
});

// *****************perfect Number
let perfectNum = 28;
let nums = 0;
let sum = 0;
let perfectOriginal = perfectNum;

for (let i = 1; i < perfectNum; i++) {
  if (perfectNum % i === 0) {
    nums = i;
    sum = nums + sum;
  }
}

if (perfectOriginal === sum) {
  console.log("sum is perfect of " + perfectOriginal);
} else {
  console.log("sum is not perfect of " + perfectOriginal);
}
