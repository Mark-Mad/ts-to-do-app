export{}
type Combine = string | number;
type Numeric = number | boolean;

type Universal = Combine & Numeric;


// let a: Universal = false;
let b: Universal = 1;
// let c: Universal = 'text'

console.log(b)