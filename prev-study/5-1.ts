
const arrayLength = <T>(array: T[]): number => array.length;
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0

function abc<T>(a: T){
	return a;
}
