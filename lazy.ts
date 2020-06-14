const getA = () => {
  console.log('run a');
  return false;
}

const getB = () => {
  console.log('run b');
  return false;
}

// not lazy
// const a = getA();
// const b = getB();
// const result = a || b;

// lazy
const result2 = getA() || getB();

console.log({ result2 })
