// number type
// parseInt(string, radix) -> radix，轉成幾進位(可省略)
var a = 0
var b = "20"
console.log(a+b)
console.log(a+parseInt(b,10))
console.log(a+parseInt(b))
// parseFloat() -> 帶有小數的字串轉為數字
var c = "20.55"
console.log(c)
console.log(parseFloat(c))
// parseFloat().toFixed()   -> toFixed指定保留幾位小數，並四捨五入。
var d = "20.1234"
console.log(d)
console.log(parseFloat(d).toFixed(2))
//Math
console.log(Math.PI)
console.log(Math.ceil(20.455)) //無條件進位
console.log(Math.floor(20.555)) //無條件捨去
console.log(Math.round(20.555)) //四捨五入
console.log(Math.sqrt(25)) //開根號
console.log(Math.pow(2,5)) //取次方，2的10次方。
console.log(Math.random()) //random()：隨機產出0~0.9999999...的小數(包含0不會有1)。
console.log(Math.floor(Math.random()*10)) //結合Math.floor捨去小數，可以得到0~9的隨機數。
//把數字變成字串的用法：
var e = 5
console.log(e.toString(),typeof e.toString())   //第一種方法：toString()
var f = 6
console.log(f + "" ,typeof (f + ""))     //第二種方法：加上空字串
//------------------------------------------------------------------------------------//
// string type
//轉換大小寫
var g = "LOREM IPSUM DOLOR SIT".toLowerCase()
var h = "amet consectetur pisicing".toUpperCase()
console.log(g)
console.log(h)
//每個字都有相對應的字碼(ASCII)
var i = "ABCD".charCodeAt(3)  //68
console.log(i)

var j = String.fromCharCode(65)  //A
console.log(j)

var k = "lorem ipsum dolor sit"
var l = k.indexOf("ipsum")
console.log(l)     //6 有出現該字會回傳第一位位置
var m = k.indexOf("ipsum!!!")
console.log(m)     //-1  沒有該字會回傳負數

var n = "lorem ipsum dolor sit lorem".replace("lorem" , "AAA")
console.log(n)     //AAA ipsum dolor sit lorem 取代掉原本的字，但只會換掉第一個

var o = "lorem,ipsum,dolor,sit,ipsum,dolor,sit".split(",")
console.log(o)   //以,切分，把字串轉成陣列比較好處理字串。

var p = "   lorem ipsum  ".trim()
console.log(p)   //lorem ipsum  -> 把前後空格給去掉
//------------------------------------------------------------------------------------//
// array type
//join
var q = ["aaa","bbb","ccc"]
console.log(q.join("")) //aaabbbccc -> 把陣列轉成字串輸出，可指定連接符號

//map filter
var r = [2,1,4,-3,6,8,-1]
console.log(
    r
    .map (function(x){ //map() 方法會建立一個新的陣列
        return x*2
    })
    .filter (function(x){
        return x>0 //filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
    })
)

//slice  splice
var s = ["a","b","c","d","e"]
//slice 回傳一個新陣列物件，為原陣列選擇之 begin 至 end --> .slice(begin,end)
console.log(s.slice(2,4))  //['c', 'd'] -> 第2到第4(4不要)
console.log(s)   //slice不會改到原本的陣列

//splice 可插入與刪除，會改變原本的陣列(不同於slice僅回傳一個新的陣列)
var t = ["a","b","c"]
t.splice(1,0,"zzz")   //在[1]位置前插入一個"zzz"
t.splice(3,1,"zzz")   //在[3]位置原本值改為"zzz"
console.log(t)   //splice會改變到原本的陣列


//sort
var u = ["cat","apple","dog","banana","egg"]
u.sort()
console.log(u)  //按字母排序
var v = [13,40,3,6,84,2]
v.sort()
console.log(v)  //按字串排序，不會按大小