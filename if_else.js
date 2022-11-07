// 今天小明想買個車票但他不知道要買什麼票？(1) 20歲以下學生票 (2) 21~64歲一般票 (3) 65歲以上老年票。
var age = 50
if(age >= 65){
    console.log("請購買老年票")
}else if(age >= 20){
    console.log("請購買成人票")
}else{
    console.log("請購買兒童票")
}