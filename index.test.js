// 主程式 index.js
// function repeat(string,times){
//     var result = ""
//     for(var i = 0; i < times;i++){
//         result+=string;
//     }
//     return result
// }
// module.exports = repeat
var repeat = require("./index")
describe("測試 repeat",function() {
    test('a 重覆5次要等於 aaaaa', function() {
      expect(repeat("a",5)).toBe("aaaaa");
    });
    test('abc 重覆2次要等於 abcabc', function() {
      expect(repeat("abc",2)).toBe("abcabc");
    });
    test(' ""空字串 重覆10次要等於 ""空字串', function() {
      expect(repeat("",10)).toBe("");
    });
})
// 寫完怎麼跑？修改package.json檔案的scripts test

// "scripts": {
//   "test": "jest"   //改成 jest
// 原: "echo \"Error: no test specified\" && exit 1"
// },
// 要對單一檔案做執行："test": "jest index.test.js" -> 改成 jest接檔案名稱。