let a = 10
a = 15
const b = 20
// b = 30
// b重覆給值會報錯Assignment to constant variable.
console.log(a)
console.log(b)
// let與const的差異：
// const-->宣告值不能改變
// let-->宣告值可以改變

// 然而使用物件卻可以改到裡面的值，這是因為變數的型別。const c的記憶體位置沒有被改變。

const c = {
  number: 10
}
console.log(c)
c.number = 20
console.log(c) //{ number: 20 }
// 差異	   初始值	重複宣告	重複賦值	Scope	      Hoisting
// var	 |   X	  |   O	    |    O	   | function | 宣告提升，值不提升
// let	 |   X	  |   X	    |    O	   | block{}  |       TDZ
// const |	 O	  |   X	    |    X	   | block{}  |       TDZ