export class HelperDate {
    static stringToDate(sString) {
        return new Date(Date.parse((sString.replace(/-/g, "/"))));
    }
}
