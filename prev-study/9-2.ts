import * as R from 'ramda';

// R.range
// console.log(
// 	R.range(1, 9+1)
// );

// R.tap
// const numbers: number[] = R.range(1, 9 + 1);
// R.tap(n => console.log(n))(numbers);

// R.pipe
// const array: number[] = R.range(1, 10);
// R.pipe(
// 	R.tap(n => console.log(n))
// )(array)

// dump
// const dump = R.pipe(
// 	R.tap(n => console.log(n))
// )

// dump(R.range(1,10));

const dump = <T>(array: T[]): T[] => R.pipe(
	R.tap(n => console.log(n))
)(array) as T[];






