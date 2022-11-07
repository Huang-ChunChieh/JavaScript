// do...while 迴圈：先做再說，會先執行一次後再判斷條件，直到條件終止後，才會跳出迴圈
var i = 1
do{
    console.log(i)
    i++
}while(i<=5)//執行條件
// 跳出迴圈時i=6，但因為外面沒有印出所以看不到。可以加一行console.log來看看
console.log(i)  //6 (好console.log不用嗎？)