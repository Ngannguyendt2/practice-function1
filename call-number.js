function increase(number) {
    number = number + 1;
    alert(number);
}

function callNumber() {
    let value = Number(prompt("Import number"));
    increase(value);
}