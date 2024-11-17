// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");
// const h3 = document.getElementById("m3");
// const h4 = document.getElementById("m4");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const value1Input = document.getElementById("value-1");
//   const value2Input = document.getElementById("value-2");

//   let value1 = parseInt(value1Input.value);
//   let value2 = parseInt(value2Input.value);

//   h1.textContent = `First Value Entered: ${value1}`;
//   h2.textContent = `Second Value Entered: ${value2}`;

//   value1 += value2;
//   value2 = value1 - value2;
//   value1 -= value2;

//   h3.textContent = `Value 1 after Swapped: ${value1}`;
//   h4.textContent = `Value 2 after Swapped: ${value2}`;
// });

// ASSIGNMENT 17
// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const valueInput = document.getElementById("input");
//   input = valueInput.value;

//   h1.textContent = `Value Entered: ${input}`;

//   let swappedOutput = "";
//   for (const char of input) {
//     swappedOutput += letterSwapper(char);
//   }
//   h2.textContent = `Value after Swap: ${swappedOutput}`;
// });

// function letterSwapper(letter) {
//   if (letter === letter.toUpperCase()) {
//     return letter.toLowerCase();
//   } else {
//     return letter.toUpperCase();
//   }
// }

// ASSIGNMENT 17 END

// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const valueInput = document.getElementById("input");
//   input = valueInput.value;

//   h1.textContent = `Value Entered: ${input}`;

//   let output;
//   if (parseInt(input) % 2 == 0) {
//     output = `The number is Even`;
//   } else {
//     output = "The number is Odd";
//   }

//   h2.textContent = `Result: ${output}`;
// });

// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const valueInput = document.getElementById("input");
//   input = valueInput.value;

//   h1.textContent = `Value Entered: ${input}`;
//   h2.textContent = "Result: ";

//   let fib = fibonacci(input);

//   for (let i = 0; i < input; i++) {
//     if (i == input - 1) {
//       h2.textContent += `${fib[i]}`;
//     } else {
//       h2.textContent += `${fib[i]}, `;
//     }
//   }
// });

// function fibonacci(n) {
//   arr = [0, 1];
//   for (let i = 2; i < n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   return arr;
// }

// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const valueInput = document.getElementById("input");
//   input = parseInt(valueInput.value);

//   h1.textContent = `Value Entered: ${input}`;

//   let pin = randomGenerator(input);

//   h2.textContent = `${input} digit pin generated was: ${pin}`;
// });

// function randomGenerator(n) {
//   num = "1";
//   for (let i = 1; i <= n; i++) {
//     num += "0";
//   }

//   return Math.floor(Math.random() * parseInt(num));
// }

// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const valueInput = document.getElementById("input");
//   input = valueInput.value.split(", ");
//   h1.textContent = `Value Entered: ${input}`;
//   let resultArr = counter(input);
//   h2.innerHTML = `Positive Numbers: ${resultArr[0]}<br>Negative Numbers: ${resultArr[1]}`;
// });

// function counter(input) {
//   pos = 0;
//   neg = 0;
//   for (const ele of input) {
//     if (parseInt(ele) < 0) {
//       neg++;
//     } else {
//       pos++;
//     }
//   }
//   return [pos, neg];
// }

// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");
// const h3 = document.getElementById("m3");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let inputArr = [];
//   let outputStr = "";
//   // prepping the input
//   const valueInput = document.getElementById("input");
//   const valueN = document.getElementById("input-n").value;

//   let input = valueInput.value;

//   h1.textContent = `Value Entered: ${input}`;
//   inputPos = valueN.split(",");

//   for (const element of inputPos) {
//     inputArr.push(parseInt(element));
//   }

//   h2.textContent = `Position Entered: ${inputArr}`;

//   for (let i = 0; i < input.length; i++) {

//     outputStr += input[inputArr[i]];
//   }

//   h3.textContent += `String after positions Changed: ${outputStr}`;
// });

// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");
// const h3 = document.getElementById("m3");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   outputArr = [];
//   // prepping the input

//   const valueN = document.getElementById("input-n").value;

//   h1.innerHTML = `Value Entered: ${valueN}`;

//   outputStr = checkedPalindromeString(valueN);

//   if (outputStr == true) {
//     h2.textContent = `Palindrome`;
//   } else {
//     h2.textContent = `Not Palindrome`;
//   }
// });

// function checkedPalindromeString(word) {
//   let reverseStr = "";
//   for (let index = word.length - 1; index >= 0; index--) {
//     reverseStr += word[index];
//   }
//   return reverseStr === word;
// }

// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");
// const h3 = document.getElementById("m3");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   outputArr = [];
//   // prepping the input

//   const inputS = document.getElementById("input-n");
//   const inputP = document.getElementById("input-pos");
//   const inputC = document.getElementById("input-n-chars");

//   let inputString = inputS.value;
//   let inputPosition = parseInt(inputP.value);
//   let inputNoChars = parseInt(inputC.value);

//   h1.innerHTML = `String Entered: ${inputString}`;

//   outputStringArr = inputString.split(" ");

//   for (let i = 0; i < outputStringArr.length; i++) {
//     if (i == inputPosition) {
//       outputStringArr[i] = removeChars(outputStringArr[i], inputNoChars);
//     }
//   }

//   console.log(outputStringArr);
//   h2.textContent = `The output String is: ${outputStringArr.join(" ")}`;
// });

// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");
// const h3 = document.getElementById("m3");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   outputArr = [];
//   // prepping the input

//   const inputS = document.getElementById("input-n");

//   let inputString = inputS.value;

//   h1.innerHTML = `String Entered: ${inputString}`;

//   h2.textContent = `The Vowel Count in the String is: ${countVowels(
//     inputString
//   )}`;
// });

// function countVowels(word) {
//   count = 0;
//   vowels = "aeiou";
//   for (const char of word) {
//     if (vowels.includes(char.toLowerCase())) {
//       count++;
//     }
//   }

//   return count;
// }

// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");
// const h3 = document.getElementById("m3");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   outputArr = [];
//   // prepping the input

//   const inputS = document.getElementById("input-n");

//   let inputString = inputS.value.trim();

//   h1.innerHTML = `String Entered: ${inputString}`;

//   h2.textContent = `The Reverse of the string is: ${reverseStr(inputString)}`;
// });

// function reverseStr(str) {
//   if (str.length === 0) {
//     return str;
//   }

//   return reverseStr(str.substring(1)) + str[0];
// }

// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");
// const h3 = document.getElementById("m3");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   outputArr = [];
//   // prepping the input

//   const inputHeight = document.getElementById("input-h");
//   const inputWidth = document.getElementById("input-w");

//   let height = parseInt(inputHeight.value.trim());
//   let width = parseInt(inputWidth.value.trim());

//   h1.innerHTML = `Width: ${width} <br> height: ${height}`;

//   const Rect = {
//     width: width,
//     height: height,

//     calcArea: function () {
//       h2.textContent = `Area of the Rectangle: ${this.width * this.height}`;
//     },

//     calcPerimeter: function () {
//       h3.textContent = `Perimeter of the Rectangle: ${
//         this.width * 2 + this.height * 2
//       }`;
//     },
//   };

//   Rect.calcArea();
//   Rect.calcPerimeter();
// });

// const form = document.getElementById("form");
// const h1 = document.getElementById("m1");
// const h2 = document.getElementById("m2");
// const h3 = document.getElementById("m3");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const empName = document.getElementById("name").value;
//   const empId = parseInt(document.getElementById("emp-id").value);
//   const empSal = parseInt(document.getElementById("salary").value);
//   const deptName = document.getElementById("dept-name").value;

//   const EmpObj = {
//     empName: empName,
//     empId: empId,
//     empSal: empSal,
//     deptName: deptName,
//   };

//   h1.innerHTML = `Employee Name: ${EmpObj.empName} <br> Employee Id: ${EmpObj.empId} <br>
//   Employee Salary: ${EmpObj.empSal} <br> Dept Name: ${EmpObj.deptName}`;

//   delete EmpObj.deptName;

//   for (const [key, value] of Object.entries(EmpObj)) {
//     h2.innerHTML += `${key}:${value} <br>`;
//   }
// });
//assignment 26
function islandPerimeter(grid) {
  let perimeter = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        directions.forEach((direction) => {
          const nr = r + direction[0];
          const nc = c + direction[1];

          if (
            nr < 0 ||
            nr >= rows ||
            nc < 0 ||
            nc >= cols ||
            grid[nr][nc] === 0
          ) {
            perimeter += 1;
          }
        });
      }
    }
  }

  return perimeter;
}

function handleCalculate() {
  const gridInput = document.getElementById("gridInput").value.trim();
  const outputDiv = document.getElementById("output");

  const grid = JSON.parse(gridInput);

  if (!Array.isArray(grid) || grid.length === 0 || !Array.isArray(grid[0])) {
    alert("Invalid input format. Please enter a valid 2D grid.");
  }

  const cols = grid[0].length;
  for (let row of grid) {
    if (!Array.isArray(row) || row.length !== cols) {
      alert("Invalid grid. All rows must have the same number of columns.");
    }
    for (let cell of row) {
      if (cell !== 0 && cell !== 1) {
        alert("Invalid cell value. Only 0 (water) and 1 (land) are allowed.");
      }
    }
  }

  const perimeter = islandPerimeter(grid);

  outputDiv.innerHTML = `<strong>Perimeter:</strong> ${perimeter}`;
}

document
  .getElementById("calculateBtn")
  .addEventListener("click", handleCalculate);
