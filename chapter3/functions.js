// First way of writing a function
function onePlusAvg(x, y) {
    return Math.round(1 + (x + y) / 2)
}


// Second way of writing a function (latest syntax must use)
const onePlusAvg2 = (x, y) => {
    return Math.round(1 + (x + y) / 2);
}


let a = 50;
let b = 60;
let c = 90;

console.log(onePlusAvg(a, b));
console.log(onePlusAvg(b, c));
console.log(onePlusAvg(c, d));
