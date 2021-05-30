/* 화살표 함수 */
type Person = {
	name: string;
	age: number;
}

const makePerson = (name: string, age: number = 10): Person => ({ name: name, age: age });

// console.log(makePerson('Jack'));
// console.log(makePerson('Jack', 33));


/* 색인 키와 값 */

// 색인 가능 타입(indexable type)
type KeyValueType = {
	[key: string]: string;
}

const makeObject = (key: string, value: string): KeyValueType => ({ [key]: value });
console.log(makeObject('name', 'jack'));
console.log(makeObject('firstName', 'Jane'));