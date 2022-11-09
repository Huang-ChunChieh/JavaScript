// 借別人的東西來用：require，語法var 變數 = require("module名稱")
// 用node.js所提供的可以直接輸入module名稱，自己寫的要有路徑。
var os = require("os")
const double = require("./module.js")
console.log(os.platform())

// 把東西借給別人:export
// 檔案名稱.exports = 要輸出的東西 ( -> 這裡以function double做輸出)
// 用exports語法來把自己寫變成module並在其他地方用require語法引入。
// module.js
// function double(x){
//     return x*2
// }
// module.exports = double
var moudle = require("./module.js") //.js可省略
console.log(moudle(2))