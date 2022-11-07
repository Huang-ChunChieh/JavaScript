function sayHi(){
    console.log("Hi")
}
sayHi()

var sayHello = function(){
    console.log("Hello")
}
sayHello()

// 函式結構

// function 函式名稱(參數) {
//    return  
//      使用return來傳東西。要直接寫在後面，若寫在下一行會被視為沒東西而undefined。
//      return後面的下一行都不會被執行。
// }
// console.log(函式名稱(引數)) //傳入引數

// f(x)=2x
function double(x){
    return x*2
}
console.log(double(10))