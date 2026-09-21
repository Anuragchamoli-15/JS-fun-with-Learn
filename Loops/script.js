let inp = document.querySelectorAll("input");
let btn = document.querySelectorAll("button");
let p = document.querySelector("#outPut");

let inp1 = inp[0];
let resultInp = inp[1];

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "Armstrong Number") {
      let num2 = Number(inp1.value);
      let length = num2.toString().length;
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
      let divisor = [];
      let perfectOriginal = perfectNum;

      for (let i = 1; i < perfectNum; i++) {
        if (perfectNum % i === 0) {
          nums = i;
          divisor.push(i);
          sum = nums + sum;
        }
      }

      resultInp.value = sum;
      console.log(divisor);

      if (perfectOriginal === sum) {
        p.innerText =
          perfectOriginal + " is a Perfect  Number its divisor is " + divisor;
      } else {
        p.innerText = perfectOriginal + " is not a Perfect  Number";
      }
    }

    if (btn.innerText === "Fibonacci Series") {
      let num = Number(inp1.value);
      let x = 0;
      let y = 1;
      let z = 1;
      let arr = [];

      while (z < num) {
        z = x + y;
        x = y;
        y = z;

        if (z <= 10) {
          arr.push(z);
        }
      }
      resultInp.value = arr;

      let x2 = 0;
      let y2 = 1;
      let z2 = 0;
      let arr2 = [];
      for (let i = 0; i <= num; i++) {
        z2 = x2 + y2;
        x2 = y2;
        y2 = z2;
        arr2.push(z2);
      }
      p.innerText = arr2 + " is  Fibonacci Series for " + num + " disit";
    }

    if (btn.innerText === "Strong Number") {
      let num = Number(inp1.value);
      let sum = 1;
      let nums = 0;
      let result = 0;
      let numsArr = []

      while (num > 0) {
        nums = num % 10;
        numsArr.push(nums)
        for (let i = 1; i <= nums; i++) {
          sum = sum * i;
        }
        result = sum + result;
        num = parseInt(num / 10);
        sum = 1;
      }
      resultInp.value = result
      p.innerText = result + " is Strong Number"

    }
  });
});
