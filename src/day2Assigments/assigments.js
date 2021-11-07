function findPrime(...numbers) {
    for (let number in numbers) {
        if (numbers[number] == 2) {
            console.log(numbers[number] + " is prime")
        }
        else if (numbers[number] % 2 == 0) {
            console.log(numbers[number] + " is not prime")
        } else {
            console.log(numbers[number] + " is prime")
        }

    }
}

findPrime(2, 7, 9, 13, 24, 88);


//-----------------------------------------------------------

function friendNumbers(number1, number2) {
    let firstDivisors = 0;
    let secondDivisors = 0;
    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            firstDivisors = firstDivisors + i;
        }
    }
    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            secondDivisors = secondDivisors + i;
        }
    }
    if (firstDivisors == number2 && secondDivisors == number1) {
        console.log(number1 + " and " + number2 + " are friend numbers")
    } else {
        console.log(number1 + " and " + number2 + " are not friend numbers")
    }

}


friendNumbers(220, 284)

//--------------------------------------------------

function perfectNumbers(limit) {
    for(let i = 1; i<=limit;i++){
        let sum = 0;
        for(let j=1; j<i;j++){
            if(i%j==0){
                sum = sum+j;
            }
        }
        if (sum == i) {
            console.log(`${i} Bir Mükemmel Sayıdır.`)
        };
    }
    
} 

perfectNumbers(1000);

//-----------------------------------------------

function listPrime(limit){
    let primeNumbers = [];
   for(let i = 0; i<limit;i++){
       if(isPrime(i)){
        primeNumbers.push(i);
       }
   }
    console.log(primeNumbers)
}

function isPrime(number) {
    if(number <= 1){
        return false
    }else{
        for(let i = 2; i<number;i++){
        
            if(number % i == 0){
                return false;
            }
        }
        return true;
    }
    
}

listPrime(1000);
