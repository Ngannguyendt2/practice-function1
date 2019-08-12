function callStar(string) {
    let array1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
    let array2 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
    let count = 0;
    for (let i = 0; i < array1.length; i++) {
        if (string == array1[i]) {
            alert('Star ' + string + ' belong ' + array2[i]);
        } else {
            count++;
        }
    }
    if (count == array1.length) {
        alert('Star ' + string + ' not find');
    }
}

function input() {
    let star = prompt('Import star');
    callStar(star);
}