function add(a, b) {
    return a + b;
}

function multiply(x, y) {
    return x * y;
}

function divide(c, d) {
    if(d === 0) {
        return 'Error: Division by zero';
    }
    return c / d;
}
let result1 = add(5, 3);
console.log(result1);

let result2 = multiply(10, 5);
console.log(result2);
let result3 = divide(20, 0);
console.log(result3);

// Age 