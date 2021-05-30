/* typing */
type Type3Func<T, Q, R> = (a: T, b: Q) => R;

export const f = <T>(x: T): string => `f(${x})`;
export const g = <T>(x: T): string => `g(${x})`;
export const h = <T>(x: T): string => `h(${x})`;

/* compose */
export const compose = <T>(...functions: readonly Function[]): Function => 
	(x: T): T => {
		const deepCopiedFunctions = [...functions];

		return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x);
	}

// test1
const composedFGH = compose(h, g, f);
console.log(
	composedFGH('x')
)

// test2
const inc = (x: number) => x + 1;

const composedInc = compose(inc, inc, inc);
console.log(
	composedInc(1)
);


/* pipe */
export const pipe = <T>(...functions: readonly Function[]): Function => 
	(x: T): T => {
		return functions.reduce((value, func) => func(value), x);
	}

// test1
const piped = pipe(f, g, h);
console.log(
	piped('x')
)

