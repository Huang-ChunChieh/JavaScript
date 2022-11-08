// 請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1。
function position(string){
    for(var index = 0; index < string.length; index++){
        if(string[index] >= "A" && string[index] <= "Z")
        return string[index] + " " + index
    }
    return -1
}
console.log(position("abcd")) //正確回傳值：-1
console.log(position("AbcD")) //正確回傳值：A 0
console.log(position("abCD")) //正確回傳值：C 2

// 請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案。
function stars(n){
    starCount = ""
    for(var x = 0; x < n; x++){
        starCount = starCount + "*"
        console.log(starCount)
    }
}
stars(3)

// 請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。
// （質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除）
function isPrime(n){
    for(i = 2; i < n; i++){
        if(n%i === 0){
            return "isn't prime";
        }
    }
    if(n === 1 || n < 1){ //1 is not prime/num<1 is not prime too
        return "isn't prime"
    }
    return "is prime"
}
console.log(isPrime(1))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(37))
console.log(isPrime("a"))