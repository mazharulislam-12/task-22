// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

const fibo = [0, 1];
for(let i = 2; i < 11; i++){
    fibo[i] = fibo[i-1] + fibo[i-2] ;
}
console.log(fibo);

// 01. practice--------
const fibo = [0, 1];
for(let i = 2; i < 11; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
} 
console.log(fibo);

// 02. practice ---------
const fibo = [0, 1];
for(let i = 2; i < 11; i++){
    fibo[i] = fibo[i-1] + fibo[i-2]; 
}
console.log(fibo);
