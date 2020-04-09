import Base64 from "./lib/base64"
/**
 * 字符串编码成纯数字
 */
var intcode={
    /**
     * 编码
     * @param {string} string -明文
     */
    encode:function(string){
        var base64str=Base64.encode(string);
        var intcodeStr="";
        for (var n = 0; n < base64str.length; n++) {
            var charAsciiCode=base64str.charCodeAt(n).toString();
            var charAsciiCodeLength=charAsciiCode.length;
            if(charAsciiCodeLength<3){
                charAsciiCode="0"+charAsciiCode;
            }
            intcodeStr+=charAsciiCode;
        }
        return intcodeStr;
    },
    /**
     * 解码
     * @param {string} intcodetext -密文
     */
    decode:function(intcodetext){
        //每隔3位数字后面插入一个逗号
        var newintcodetext=intcodetext.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
        var intcodetextlist=newintcodetext.split(",");
        var base64str=""
        for (var i = 0; i < intcodetextlist.length; i++) {
            var asciiCode = intcodetextlist[i];
            var char=String.fromCharCode(asciiCode);
            base64str+=char;
        }
        base64str=Base64.decode(base64str);
        return base64str;
    }
}
export default intcode