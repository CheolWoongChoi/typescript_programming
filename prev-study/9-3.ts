import * as R from 'ramda';

const numbers: number[] = R.range(1, 9+1);

// R.add
// const incNumbers = R.pipe(
// 	R.map(R.add(1)),
// 	R.tap(a => console.log('after add(1):', a))
// ) as any;

// const newNumbers = incNumbers(numbers);


// R.addIndex
// const indexedMap = R.addIndex(R.map);

const addIndex = R.pipe(
	// @ts-ignore
	R.addIndex(R.map)(R.add),
	R.tap(a => console.log(a))
)

// @ts-ignore
const newNumbers = addIndex(R.range(1, 10));
