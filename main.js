for (let i = 1; i <= 100; i++) {
    //Prima controllo che il numero sia divisibile
    // sia per 3 che per 5 poi tutto il resto
    if(i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if(i % 3 == 0) {
        console.log('Fizz');
    } else if(i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
    
}
