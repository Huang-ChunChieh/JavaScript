// 今天小明想知道某個月份的季節？
var month = 10
switch(month){
    case 12:
    case 1:
    case 2:
        console.log("Winter")
        break
    case 3:
    case 4:
    case 5:
        console.log("Spring")
        break
    case 6:
    case 7:
    case 8:
        console.log("Summer")
        break
    case 9:
    case 10:
    case 11:
        console.log("Fall")
        break
    default:
        console.log("Input Error")
}
// case可以一起也可以分開，使用break讓程式碼不會再往下跑，default會在上面都不符合時執行。