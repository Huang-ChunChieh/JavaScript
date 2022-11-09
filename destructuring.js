// 在ES6之前要用變數拿裡面的資料做法只能一行一行分開命名。但在有了Destructuring之後可以更簡單的寫。
const arr = [1, 2, 3]
//下面三行可以用解構寫成一行
var first = arr[0]
var second = arr[1]
var third = arr[2]
//解構：
var [first,second,third ] = arr  //命名可以自取
console.log(second,third) //2 3
console.log(arr)

const obj = {
  name: "fang",
  age: 20,
  address: "taiwan"
}
//下面三行可以用解構寫成一行
var name = obj.name
var age = obj.age
var address = obj.address
//解構：
var {name, age, address} = obj //命名要對應到上面obj內的key不然會undefined
console.log(age,address)
console.log(obj)