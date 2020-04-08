import {utf8} from "./lib/utf8"
/**
 * base64编码解码
 */
 var Base64 = {
    //私有key
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    /**
     * 编码
     * @param {string} text -明文
     */
    encode: function (text) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        text = utf8.encode(text);

        while (i < text.length) {
            chr1 = text.charCodeAt(i++);
            chr2 = text.charCodeAt(i++);
            chr3 = text.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }

        return output;
    },
    /**
     * 解码
     * @param {string} base64text -base64密文
     */
    decode: function (base64text) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        base64text = base64text.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < base64text.length) {
            enc1 = this._keyStr.indexOf(base64text.charAt(i++));
            enc2 = this._keyStr.indexOf(base64text.charAt(i++));
            enc3 = this._keyStr.indexOf(base64text.charAt(i++));
            enc4 = this._keyStr.indexOf(base64text.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }

        output = utf8.decode(output);
        return output;
    }
}
export default Base64