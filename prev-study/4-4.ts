
/* callback */
type cb = () => void;

const init = (callback: cb): void => {
	console.log('default init');

	console.dir(callback);
	callback();
	console.log('all init');
}

// init(() => 3);


/* 고차 함수 */
type NumberToNumberFunc = (number) => number;

const add = (a: number): NumberToNumberFunc => {
	const _add: NumberToNumberFunc = (b: number) => {
		return a + b;
	}	

	return _add;
};
