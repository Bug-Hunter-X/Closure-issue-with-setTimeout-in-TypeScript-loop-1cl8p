# TypeScript Closure Bug with setTimeout

This repository demonstrates a common issue encountered when using `setTimeout` within a loop in TypeScript (and JavaScript). The problem arises from how closures work with variables in loops.

## The Bug
The `printNumbers2` function intends to print numbers 1 through 10 with a slight delay using `setTimeout`. However, due to the closure over the loop variable `i`, the final value of `i` (11) is used in all the callbacks, resulting in unexpected output.

## Solution
The solution involves using an immediately invoked function expression (IIFE) or `let` within the loop to create a new scope for each iteration, ensuring that each timeout captures the correct value of `i`.