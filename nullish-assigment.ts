const getName = (name?: string) => {
  // expected '' empty string pass condition

  // not OK
  // return name || 'JS Dżem';

  // OK
  return name ?? 'JS Dżem';
}

const somename = getName('');

console.log({ somename });