let array = [];

array.push(10);
array.push(2);
array.push(3);

console.log(array);

array.pop();

console.log(array);

array.push(8);
array.push(4);
array.push(3);

console.log(array);

array.unshift(1);
console.log(array);

array.shift();
console.log(array);

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log(array.includes(9));

console.log(array.every(item => item === 10)); // se todos são iguais a 10
console.log(array.some(item => item === 10)); // se possui algum índice no valor 10

console.log(array.reverse());
