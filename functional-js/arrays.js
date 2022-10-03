const arr = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const item of arr) {
  console.log(item);
}

arr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

arr.forEach((item, index, arr) => console.log(item, index, arr));

const log = (item, index, arr) => console.log(item, index, arr);

arr.forEach(log);

arr.forEach((item, index, arr) => log(item, index, arr));

arr.forEach(console.log);

{
  const squares = [];
  for (let i = 0; i < arr.length; i++) {
    squares.push(arr[i] ** 2);
  }
  console.log(squares);
}

{
  const squares = [];
  for (const item of arr) {
    squares.push(item ** 2);
  }
  console.log(squares);
}

{
  const squares = [];
  arr.forEach((item) => {
    squares.push(item ** 2);
  });
  arr.every(isEven);
}

{
  const squares = arr.map((item) => {
    return item ** 2;
  });
  console.log(squares);
}

const squares = arr.map(square);
console.log(squares);

const evens = arr.filter(isEven);
console.log(evens);

const firstEvenNumber = arr.find(isEven);
console.log(firstEvenNumber);

const indexOfFirstEvenNumber = arr.findIndex(isEven);
console.log(indexOfFirstEvenNumber);

{
  let hasEvens = false;
  for (const item of arr) {
    if (isEven(item)) {
      hasEvens = true;
    }
  }
  console.log(hasEvens);
}

const hasEvenNumber = arr.some(isEven);
console.log(hasEvenNumber);

{
  let allEvens = true;
  for (const item of arr) {
    if (!isEven(item)) {
      allEvens = false;
    }
  }
  console.log(allEvens);
}

const allNumbersEven = arr.every(isEven);
console.log(allNumbersEven);

let acc = 0;
for (const item of arr) {
  acc += item;
}
console.log(acc);

{
  const sum = arr.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  console.log(sum);
}

const sumOfNumbers = arr.reduce(sum);
console.log(sumOfNumbers);

// sum square evens

function proceduralSumOfSquareEvens(arr) {
  let acc = 0;
  for (const item of arr) {
    if (isEven(item)) {
      acc = sum(acc, square(item));
    }
  }
  return acc;
}
console.log(proceduralSumOfSquareEvens(arr));

function declarativeSumOfSquareEvens(arr) {
  return arr //
    .filter(isEven)
    .map(square)
    .reduce(sum);
}
console.log(declarativeSumOfSquareEvens(arr));
