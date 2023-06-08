// 1. create a function that will be able to convert figure from fahrenheit to celsius

function fahrenheit_to_celsius(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9
    return celsius;
}
    
    temperature_in_fahrenheit = 75
temperature_in_celsius = fahrenheit_to_celsius(temperature_in_fahrenheit)
console.log(temperature_in_celsius)

// fahernheitTocelsius (23.8)

// 2. create a function that will calculate the average of numbers in an array 

function findAverage(array){
    let average=0;
    for(let i=0;i< array.length;i++){
        let currentNum = array[i]
        average+=currentNum;
    }
    average= average/array.length
    return average;
}
console.log(findAverage([1,4,7]));
//ANS= findAverage(4)


//QUESTION 3:create a function that checks if a number,'n' is divisible by two numbers 'X & 'Y ,all input are positive ,non-zero digits.

function isDivisible(n,x,y){
    if( n % x ==0 && n % y == 0){

        return true;
    }else 
        return false;
    
}

console.log(isDivisible(2,3,5))

// ANS=isDivisible(false)


//QUESTION 4:Create a function that will output the first 100 prime number

function isPrime(n) {

    if (n < 2)
       return '${n} is not a prime'

    
    for (let i = 2; i < n; i++){
        if (n % i ===0) {
            return '${n} is not a prime number'
        }
    }
    return '${n} is a prime number'   
}
console.log(isprime(29)); 

// Ans=29 is a prime number


//QUESTION 5:Create a function that will return a boolean specifying if a number is a prime number.

function isPrime(n) {
    
    if ( n < 2)
        return '${n} false'


    for (let i = 2; i < n;i++){
        if (n % i === 0) {
            return '${n} false'
        }
    }
    return '${n} true' 
}
console.log(isPrime(2));

//ANS= isPrime(true)




//QUESTION 7:Write a program that prints the numbers from 1 to 100,but for multiples of 3 prints "FIZZ" instead of the number and for the multiple 
//of 5 print"BUZZ" for numbers which are multiples of both 3 & 5 print "FIZZBUZZ".

function fizzbuzz(){
    array=[]
    count=1
    while (count<=100){
        if(count%15===0){
            array.push('fizz')
        }else if(count%5===0){
            array.push('buzz')
        }else if (count%3===0){
            array.push('fizzbuzz')
        }else{
            array.push(count)
        }
        count++
        
    }
    console.log(array)
}
fizzbuzz();