export class HelperObject {
    /**
     * 浅层克隆
     *
     * @static
     * @template T
     * @template U
     * @param {T} target
     * @param {U} source
     * @returns
     */
    static assign(target, source) {
        return Object.assign(target, source);
    }
    static formatReplace(sInput, oReplace) {
        var re = new RegExp("\\[\\[(\\w*:\\w*)\\]\\]", "gi");
        var sReturn = sInput;
        if (sInput == undefined || sInput == null) {
            return sReturn;
        }
        var aExec = sReturn.match(re);
        if (aExec != null) {
            for (var i = 0; i < aExec.length; i++) {
                var sMathText = aExec[i];
                var aSplit = sMathText
                    .replace('[[', '')
                    .replace(']]', '')
                    .split(':');
                var sKeyName = aSplit[0];
                var sValueName = aSplit[1];
                if (oReplace[sKeyName] != undefined && oReplace[sKeyName][sValueName] != undefined) {
                    var reg = new RegExp("(\\[\\[)" + aSplit[0] + ":" + aSplit[1] + "(\\]\\])", "g");
                    sReturn = sReturn.replace(reg, oReplace[sKeyName][sValueName]);
                }
            }
        }
        // console.log(sReturn);
        return sReturn;
    }
    /**
     * 转换操作  该操作无实际意义  仅仅用于定义的转换
     *
     * @static
     * @template T
     * @param {*} source
     * @returns
     */
    static parseTs(source) { return source; }
}
