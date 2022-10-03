// 'hello world'
// '<p>HELLO WORLD!</p>'

{
  const shout = (str) => str.toUpperCase();
  const punctuate = (str, punctuation) => str + punctuation;
  const wrap = (str, tag) => `<${tag}>${str}</${tag}>`;

  console.log(shout("hello world"));
  console.log(punctuate("hello world", "!"));
  console.log(wrap("hello world", "p"));

  console.log(
    //
    wrap(
      //
      punctuate(
        //
        shout("hello world"),
        "!"
      ),
      "p"
    )
  );
}

const shout = (str) => str.toUpperCase();
const punctuate = (punctuation) => (str) => str + punctuation;
const wrap = (tag) => (str) => `<${tag}>${str}</${tag}>`;

console.log(shout("hello world"));
console.log(punctuate("!")("hello world"));
console.log(wrap("p")("hello world"));

const exclamate = punctuate("!");
const wrapInP = wrap("p");

console.log(
  //
  wrapInP(
    //
    exclamate(
      //
      shout("hello world")
    )
  )
);

{
  let message = "hello world";
  message = shout(message);
  message = exclamate(message);
  message = wrapInP(message);
  console.log(message);
}

const message = [shout, exclamate, wrapInP].reduce(
  (acc, fn) => fn(acc),
  "hello world"
);

console.log(message);

{
  const pipe =
    (...fns) =>
    (x) =>
      fns.reduce((acc, fn) => fn(acc), x);

  const toHtml = pipe(shout, exclamate, wrapInP);

  console.log(toHtml("hello world"));
}

// (f o g o h)(x) = f(g(h(x)))
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const toHtml = compose(wrapInP, exclamate, shout);

console.log(toHtml("hello world"));
