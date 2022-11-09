//在處理字串上要做到換行或是連接上，要使用換行符號(\n)或是連接符號(+)
//換行
var str = "aaa" + "\n" +  "bbb" + "\n" + "ccc"
console.log(str)
//aaa
//bbb
//ccc

//連接
function sayhi(name) {
    console.log("Hello," + name.toUpperCase() + ". Now is " + new Date())
}
sayhi("fang")
// Hello,FANG Now is Fri Sep 30 2022 11:16:27 GMT+0800 (台北標準時間)


// 使用 ` 來更簡潔的完成。
var str2 = 
`aaa
bbb
ccc`
console.log(str2)

function sayhi2(name) {
    console.log(`hello,${name.toUpperCase()}. Now is ${new Date()}`)   //運用${}來內嵌
}
sayhi2("fang") 