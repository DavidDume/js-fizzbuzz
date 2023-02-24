
const container = document.querySelector('#container');

for (let i = 1; i <= 100; i++) {

    let box = document.createElement('div');
    box.classList.add('numero');
    let num = document.createElement('span');
    //Prima controllo che il numero sia divisibile
    // sia per 3 che per 5 poi tutto il resto
    if(i % 3 == 0 && i % 5 == 0) {
        num.innerHTML = 'fizzbuzz';
        box.classList.add('fizzbuzz');
    } else if(i % 3 == 0) {
        num.innerHTML = 'fizz';
        box.classList.add('fizz');
    } else if(i % 5 == 0) {
        num.innerHTML = 'buzz';
        box.classList.add('buzz');
    } else {
        num.innerHTML = i;
    }
    
    box.append(num);
    container.append(box);
}