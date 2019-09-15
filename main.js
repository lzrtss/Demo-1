import { task1 } from './src/task1.js';
import { task2 } from './src/task2.js';
import { task3 } from './src/task3.js';
import { task4 } from './src/task4.js';
import { task5 } from './src/task5.js';
import { task6 } from './src/task6.js';
import { task7 } from './src/task7.js';

// Task 1: Chessboard
document.querySelector('#chess-btn-draw').addEventListener('click', () => {
  const chessWidth = Number(document.querySelector('#chess-width').value);
  const chessHeight = Number(document.querySelector('#chess-height').value);
  const chessSymbol = document.querySelector('#chess-symbol').value;
  const chessOutput = document.querySelector('#output-task1');

  const result = task1(chessWidth, chessHeight, chessSymbol);
  if (result.reason) {
    chessOutput.style = 'color:red; border-color:red';
    chessOutput.innerHTML = result.reason;
  } else {
    chessOutput.style = 'border-color:green';
    chessOutput.innerHTML = result;
  }

  document.querySelector('#chess-width').value = '';
  document.querySelector('#chess-height').value = '';
  document.querySelector('#chess-symbol').value = '';
});

// Task 2: Envelopes Analisys
document.querySelector('#envelopes-btn').addEventListener('click', () => {
  const env1A = Number(document.querySelector('#env1-a').value);
  const env1B = Number(document.querySelector('#env1-b').value);
  const env2C = Number(document.querySelector('#env2-c').value);
  const env2D = Number(document.querySelector('#env2-d').value);
  const envOutput = document.querySelector('#output-task2');

  const [a, b, c, d,] = [env1A, env1B, env2C, env2D,];

  let result = task2({ a, b }, { c, d });
  if (result.reason) {
    envOutput.style = 'color:red; border-color:red';
    envOutput.innerHTML = result.reason;
  } else if (result === 0) {
    result = 'Mentioned envelops cannot be put inside of each other';
    envOutput.style = 'border-color:green';
    envOutput.innerHTML = result;
  } else if (result === 1) {
    result = 'First envelop (with sides \'a\' and \'b\') can be put inside the second one';
    envOutput.style = 'border-color:green';
    envOutput.innerHTML = result;
  } else if (result === 2) {
    result = 'Second envelop (with sides \'c\' and \'d\') can be put inside the first one';
    envOutput.style = 'border-color:green';
    envOutput.innerHTML = result;
  }

  document.querySelector('#env1-a').value = '';
  document.querySelector('#env1-b').value = '';
  document.querySelector('#env2-c').value = '';
  document.querySelector('#env2-d').value = '';
});

// Task 3: Triangles Sorting
document.querySelector('#triangles-btn').addEventListener('click', () => {
  // Triangle1
  const ABC = document.querySelector('#triangle-abc').value;
  const sideA = Number(document.querySelector('#triangle-a').value);
  const sideB = Number(document.querySelector('#triangle-b').value);
  const sideC = Number(document.querySelector('#triangle-c').value);
  // Triangle2
  const DEF = document.querySelector('#triangle-def').value;
  const sideD = Number(document.querySelector('#triangle-d').value);
  const sideE = Number(document.querySelector('#triangle-e').value);
  const sideF = Number(document.querySelector('#triangle-f').value);
  // Triangle3
  const GHI = document.querySelector('#triangle-ghi').value;
  const sideG = Number(document.querySelector('#triangle-g').value);
  const sideH = Number(document.querySelector('#triangle-h').value);
  const sideI = Number(document.querySelector('#triangle-i').value);

  const obj1 = { vertices: ABC, a: sideA, b: sideB, c: sideC };
  const obj2 = { vertices: DEF, d: sideD, e: sideE, f: sideF };
  const obj3 = { vertices: GHI, g: sideG, h: sideH, i: sideI };

  const trianglesOutput = document.querySelector('#output-task3');
  const result = task3([obj1, obj2, obj3]);
  if (result.reason) {
    trianglesOutput.style = 'color:red; border-color:red';
    trianglesOutput.innerHTML = result.reason;
  } else {
    trianglesOutput.style = 'border-color:green';
    trianglesOutput.innerHTML = result;
  }
});

// Task 4: Palindrome
document.querySelector('#palindrome-btn').addEventListener('click', () => {
  const palindromeNum = document.querySelector('#palindrome').value;
  const palindromeOutput = document.querySelector('#output-task4');

  const result = task4(palindromeNum);
  if (result instanceof Object) {
    palindromeOutput.style = 'color:red; border-color:red';
    palindromeOutput.innerHTML = result.reason;
  } else {
    palindromeOutput.style = 'border-color:green';
    palindromeOutput.innerHTML = result;
  }

  document.querySelector('#palindrome').value = '';
});

// Task 5: Lucky Tickets
document.querySelector('#tickets-btn').addEventListener('click', () => {
  const minTicket = parseInt(document.querySelector('#min-ticket').value, 10);
  const maxTicket = parseInt(document.querySelector('#max-ticket').value, 10);
  const ticketsOutput = document.querySelector('#output-task5');

  const [min, max,] = [minTicket, maxTicket,];
  const arg = { min, max, };

  const result = task5(arg);
  if (result.reason) {
    ticketsOutput.style = 'color:red; border-color:red';
    ticketsOutput.innerHTML = result.reason;
  } else {
    ticketsOutput.style = 'border-color:green';
    ticketsOutput.innerHTML = `
    WinMethod: ${result.winMethod}
    SimpleCount: ${result.simpleCount}
    ComplexCount: ${result.complexCount}`;
  }

  document.querySelector('#min-ticket').value = '';
  document.querySelector('#max-ticket').value = '';
});

// Task 6: Number Sequence
document.querySelector('#sequence-btn').addEventListener('click', () => {
  const sequenceLength = parseInt(document.querySelector('#sequence-length').value);
  const sequenceStart = parseInt(document.querySelector('#sequence-start').value);
  const sequenceOutput = document.querySelector('#output-task6');

  const result = task6(sequenceLength, sequenceStart);
  if (result.reason) {
    sequenceOutput.style = 'color:red; border-color:red';
    sequenceOutput.innerHTML = result.reason;
  } else {
    sequenceOutput.style = 'border-color:green';
    sequenceOutput.innerHTML = result;
  }

  document.querySelector('#sequence-length').value = '';
  document.querySelector('#sequence-start').value = '';
});

// Task 7: Fibonacci Sequence
document.querySelector('#fibo-btn').addEventListener('click', () => {
  const fiboMin = Number(document.querySelector('#fibo-min').value);
  const fiboMax = Number(document.querySelector('#fibo-max').value);
  const fiboLength = Number(document.querySelector('#fibo-length').value);
  const fiboOutput = document.querySelector('#output-task7');

  const [min, max, length,] = [fiboMin, fiboMax, fiboLength,];
  const arg = { min, max, length };

  console.log(arg);

  const result = task7(arg);
  if (result.reason) {
    fiboOutput.style = 'color:red; border-color:red';
    fiboOutput.innerHTML = result.reason;
  } else {
    fiboOutput.style = 'border-color:green';
    fiboOutput.innerHTML = result;
  }

  document.querySelector('#fibo-min').value = '';
  document.querySelector('#fibo-max').value = '';
  document.querySelector('#fibo-length').value = '';
});
