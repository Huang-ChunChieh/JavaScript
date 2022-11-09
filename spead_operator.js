// Spread Operator 用...把值展開
var arr1 = [1, 2, 3]
var arr2 = [arr1, 4, 5, 6, ]  //[ 4, 5, 6, [ 1, 2, 3 ] ]
console.log(arr2)
// arr2 內有一個arr1，可以加上...把arr1給展開
var arr2 = [...arr1, 4, 5, 6, ] //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr2)

function add(a, b, c) {
  return a + b + c
}
var arr = [1,2,3]
console.log(add(...arr)) //加上...可以取到arr的值

//複製array但不相等
var arr1 = [1, 2, 3]
var arr2 = [...arr1]
console.log(arr1)
console.log(arr2)
console.log(arr1 === arr2) //fslse

var obj1 = {
    a: 1,
    b: 2
  }
  var obj2 = {
    ...obj1,
    b: 3,  //有和objㄧ樣key的值會依書寫先後順序決定
    c: 3
  }
  console.log(obj1,obj2)
  // obj1內的值被複製貼到obj2內，