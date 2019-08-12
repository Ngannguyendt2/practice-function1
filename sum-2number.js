function compare(num1, num2) {
    if (num1 > num2) {
        alert("Number 1 bigger number 2");
    } else {
        let sum = 0;
        sum = sumFunction(num1, num2);
        alert("Sum is " + sum);
    }
}
function sumFunction(value1, value2) {
    let sum = value1 + value2;
    return sum;
}

function call() {
    let number1 = Number(prompt("Import number 1"));
    let number2 = Number(prompt("Import number 2"));
    compare(number1, number2);
}