////write a program  in to 1-50 even and odd in to typescript.///
////Even Number///
// function evenNumber(){
//     for (let i=1; i<=50; i++){
//         if(i % 2 === 0){
//             console.log(i);
//         }
//     }
// }
// evenNumber();
//Odd Number ////
// for (let i=1; i<=50; i++){
//     if (i % 2 !== 0){
//         console.log(i);
//     }
// }
///Prime number ////
function primeNumber(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function printPrimeNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        if (primeNumber(i)) {
            console.log(i);
        }
    }
}
printPrimeNumbers(1, 50);
