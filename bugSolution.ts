function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // Works as expected

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, 0);
    })(i);
  }
}

printNumbers2(10); // Prints 1 to 10 with delay

function printNumbers3(n: number): void {
    for (let i = 1; i <= n; i++) {
      setTimeout(() => {
        console.log(i);
      }, 0);
    }
  }
  
  printNumbers3(10); //Prints 1 to 10 with delay