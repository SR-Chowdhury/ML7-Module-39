/**
 * Single Tread with synchronous
 */
const func1 = () => console.log('three');

console.log('one');
console.log('two');
func1();
console.log('four');


/**
 * Single Tread with Asynchronous
 */
const func2 = () => console.log(3);
console.log(1);
console.log(2);
setTimeout(func2, 2000);
console.log(4);


