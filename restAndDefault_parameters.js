// Rest Parameters
var obj1 = {
  a: 1,
  b: 2
}
var obj2 = {
    ...obj1,  //展開
    c: 3
}
var {a, ...rest} = obj2
console.log(a, rest)  //1 { b: 2, c: 3 }


// Default Parameters：function的參數可以給預設值
function repeat(str = "abc", times = 1) {
    return str.repeat(times)
}
console.log(repeat()) //即使這邊沒有給值，還是會依預設值執行，不會報錯。

// 解構上運用
const obj = {
    d: 1
}
const {d = 123 , e = "hello"} = obj  //在解構時給預設值
console.log(d,e)  //1 hello
//原obj沒有e值還是會因為有預設值而被印出，而d不會印出預設值。