##### base64.js
在浏览器端使用javascript语言对字符串进行base64编码和解码。
##### 安装
```javascript
    <script src="base64.min.js"></script>
```
##### 使用
```javascript
    var txt="abcd123456"
    var base64str=Base64.encode(txt);
    console.log(base64str);     YWJjZDEyMzQ1Ng==

    var str=Base64.decode(base64str);
    console.log(str);     abcd123456
```
##### 许可证
MIT