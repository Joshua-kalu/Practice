console.log("Hello World!");

function circumferenceOfCircle(radius) {
    const PI = 3.142;
    return 2 * PI * radius;
}

function areaOfCircle(radius) {
    const PI = 3.142;
    return PI * radius * radius;
}

console.log(Math.round(circumferenceOfCircle(10)))
console.log(Math.round(areaOfCircle(10)))

let foodStuff = ['Garri', 'Rice', 'Beans', 'Bread'];
foodStuff.push('Meat');

console.log(foodStuff);

let index = foodStuff.indexOf('Meat');
console.log(index);

