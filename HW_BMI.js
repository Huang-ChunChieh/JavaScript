var weight = 70
var height = 177/100
// BMI = weight / {height(m) ＊ height(m)}
var BMI = weight/(height*height)
console.log("UR BMI :", BMI)

if(BMI < 18.5){
    console.log("體中過輕")
}else if(BMI >= 18.5 && BMI <24){
    console.log("正常")
}else if(BMI >= 24 && BMI < 27){
    console.log("過重")
}else if(BMI >= 27 && BMI <30){
    console.log("輕度肥胖")
}else if(BMI >= 30 && BMI <35){
    console.log("中度肥胖")
}else if(BMI >= 35){
    console.log("重度肥胖")
}