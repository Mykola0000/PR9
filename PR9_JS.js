
let arr1 = [
    1,
    5,
    9,
    4,
    {
        name: "John Doe",
        mark: 85,
        subject: "JS"
    },
    function(number) {
        return number ** 4;
    },
    function(obj) {
        console.log(obj.name);
    },
    -6,
    14
];


console.log("Масив arr1:");
arr1.forEach(item => console.log(item));


arr1.splice(arr1.indexOf(5), 1, 8);


arr1.splice(arr1.indexOf(4), 0, "Hello");


let arr2 = arr1.slice().filter(item => typeof item === 'function');


console.log("Масив arr2 (функції з arr1):");
arr2.forEach(item => console.log(item));


let arr3 = arr1.slice().filter(item => typeof item === 'number' && item !== -6 && item !== 14);


console.log("Масив arr3 (числа 1, 8 і 9 з arr1):");
arr3.forEach(item => console.log(item));


let arr3Reversed = arr3.slice().reverse();


console.log("Масив arr3Reversed:");
arr3Reversed.forEach(item => console.log(item));


console.log("Індекс числа -6 у масиві arr1:", arr1.indexOf(-6));


let filteredArr1 = arr1.filter(item => typeof item === 'number' && item > 4);
console.log("Числові елементи arr1, більші за 4:", filteredArr1);

arr1.find(item => typeof item === 'function')(arr1.find(item => typeof item === 'object'));


let powerOfMinus6 = arr1.find(item => typeof item === 'function')(arr1.find(item => item === -6));
console.log("Четвертий степінь числа -6:", powerOfMinus6);


console.log("Масив arr1 (for...in):");
for (let index in arr1) {
    console.log(arr1[index]);
}


console.log("Властивості об’єкта з arr1 (for...in):");
for (let index in arr1) {
    if (typeof arr1[index] === 'object') {
        for (let key in arr1[index]) {
            console.log(key + ": " + arr1[index][key]);
        }
    }
}


console.log("Масив arr1 (for...of):");
for (let item of arr1) {
    console.log(item);
}


arr1.version = "1.0.0";


console.log("Масив arr1 з властивістю version (for...in):");
for (let key in arr1) {
    console.log(arr1[key]);
}
