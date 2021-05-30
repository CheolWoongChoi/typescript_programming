// intro
const callMap = <T, U>(fn: (T) => U) => <T extends { map(fn) }>(b: T) => b.map(fn);

callMap(a => a+1)([1])


// example
class Monad<T> {
	constructor(public value: T) {}
	
	static of<U>(value: U): Monad<U> { 
		return new Monad<U>(value);
	}

	map<U>(fn: (x: T) => U): Monad<U> {
		return new Monad<U>(fn(this.value));
	}
}

const callMonad = (fn) => (b) => Monad.of(b).map(fn).value;

// Monad<number>(1)

callMonad((a: number) => a+1)(1)
callMonad((a: number[]) => a.map(value => value+1))([1, 2, 3, 4])

