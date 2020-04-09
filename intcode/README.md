##### intcode.js
在浏览器端使用javascript语言对字符串编码成纯数字格式,并解码成原字符串。
##### 安装
```javascript
    <script src="intcode.min.js"></script>
```
##### 使用
```javascript
    var txt="你好啊！abcd123456"
    var intcodestr=intcode.encode(txt);
    console.log(intcodestr);     
    输出：053076050103053097087057053090087075055055121066089087074106090068069121077122081049078103061061

    var str=intcode.decode(intcodestr);
    console.log(str);     
    输出：你好啊！abcd123456
```
##### 许可证
MIT