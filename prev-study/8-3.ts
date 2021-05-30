import { FirstOrderFunc, SecondOrderFunc, ThridOrderFunc } from './libs/function-signature';

// 1차
const inc: FirstOrderFunc<number, number> = (x: number): number => x+1;

// console.log(inc(1));

// 2차
const add: SecondOrderFunc<number, number> =
	(x: number): FirstOrderFunc<number, number> =>
	(y: number): number => x + y;

// console.log(add(1)(3));

const add3: ThridOrderFunc<number, number> =
	(x: number): SecondOrderFunc<number, number> =>
	(y: number): FirstOrderFunc<number, number> =>
	(z: number): number => x + y + z;

const _add3 = (a) => (b) => (c) => a+b+c;

console.log(add3(1)(2)(3));


