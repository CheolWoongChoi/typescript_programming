interface IValuable<T> {
	value: T;
}

class Valuable<T> implements IValuable<T> {
	constructor(public value: T) {}
}

const printValue = <Q, T extends IValuable<Q>>(o: T): void => console.log(o.value);
// const printValue = <T extends IValuable<T>>(o: T): void => console.log(o.value);

// printValue(new Valuable(1));
// printValue(new Valuable(true));
// printValue(new Valuable('hello'));
// printValue(new Valuable([1, 2, 3]));


// new 타입 제약
// const create = <T extends {new(): T}>(type: T): T => new type();
const create = <T>(type: {new(...args): T}, ...args): T => new type(...args);

class Point {
	constructor(public x: number, public y: number) {}
}

[
	create(Date),
	create(Point, 0, 0)
].forEach(s => console.log(s));


// 인덱스 타입 제약
const obj = { name: 'Jane', age: 22, city: 'Seoul', country: 'Korea' }
const pick = <T, K extends keyof T>(obj: T, keys: K[]) => 
	keys.map(key => ({ [key]: obj[key] }))
			.reduce((result, value) => ({ ...result, ...value}), {})

console.log(
	pick(obj, ['name', 'age']),
	pick(obj, ['nam', 'agge'])
)

