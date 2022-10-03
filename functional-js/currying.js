{
  // function sum(a, b) {
  //   return a + b;
  // }

  const sum = (a, b) => a + b;

  console.log(sum(2, 3));
  console.log(sum(2, 4));
}

{
  // function sum(a) {
  //   return (b) => {
  //     return a + b;
  //   };
  // }

  const sum = (a) => (b) => a + b;

  const sumTwo = sum(2);
  console.log(sumTwo(3));
  console.log(sumTwo(4));

  console.log(sum(2)(3));
}

const arr = [1, 2, 3, 4, 5];

{
  const sum = (a) => (b) => a + b;
  const sumTwo = sum(2);
  console.log(arr.map(sumTwo));
}

const sum = (a) => (b) => a + b;
console.log(arr.map(sum(2)));
