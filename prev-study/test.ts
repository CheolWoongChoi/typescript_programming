// interface IAgeable {
// 	age?: number;
// }

// function getAge(o: IAgeable) {
// 	console.warn(typeof o);
	
// 	return o && o.age ? o.age : 0;
// }

// console.log(getAge(undefined));
// console.log(getAge(null));
// console.log(getAge({ age: 32 }));


let f = function(a,b) {return a+b}
let v = f(1,2);

console.log(f);
console.log(v);