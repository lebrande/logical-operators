const getName = (a?: string) => {
  // expected '' empty string pass condition

  // not OK
  return a || 'JS Dżem';

  // OK
  // return a ?? 'JS Dżem';
}

const name = getName('');

console.log({ name });