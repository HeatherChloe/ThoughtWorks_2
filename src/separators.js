'use strict';

function thousands_separators(num) {
    var src   = num.toString();
    var src_a = src.split(".");
    var src_f = src_a[0];
    var len   = src_f.length;
    var i     = 0;
    var j     = 0;
    var des   = "";
    var des_r = "";
    for(i = len - 1; i >= 0; --i, ++j){
        //When j equal to 3 set a comma
        if(j == 3){
            j = 0;
            len++;
            des_r += ",";
        }
        des_r += src_f[i];
    }
    for(i = len - 1; i >= 0; --i){
        des += des_r[i];
    }
    if(typeof(src_a[1]) != "undefined" || parseInt(src_a[1]) == 0){
        des += ".";
        des += src_a[1];
    }
    return des;
}

module.exports = thousands_separators;
