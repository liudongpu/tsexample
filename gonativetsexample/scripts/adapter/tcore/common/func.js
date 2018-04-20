export class CommonFunc {
    static jsonParse(sText) {
        return JSON.parse(sText);
    }
    static jsonStringify(oT) {
        return JSON.stringify(oT);
    }
    static jsonStringifyBeautify(oT) {
        return JSON.stringify(oT, null, 2);
    }
}
