export class HelperMap {
    static parseMap(oAttr) {
        var mMap = new Map();
        for (let k in oAttr) {
            mMap.set(k, oAttr[k]);
        }
        return mMap;
    }
    static stringIsEmpty(cs) {
        return cs == undefined || cs == null || cs.length == 0;
    }
    static objectToMap(oAttr) {
        var mMap = new Map();
        for (let k in oAttr) {
            mMap.set(k, oAttr[k]);
        }
        return mMap;
    }
    static mapToObject(oMap) {
        let oReturn = {};
        oMap.forEach((v, k) => oReturn[k] = v);
        return oReturn;
    }
    static stringToObject(sParm) {
        return this.mapToObject(this.stringToMap(sParm));
    }
    static stringToMapArray(sParm) {
        let oMap = this.stringToMap(sParm);
        let aItems = [];
        oMap.forEach((v, k) => {
            aItems.push({ key: k, value: v });
        });
        return aItems;
    }
    static stringToMap(sParm) {
        let oReturn = new Map();
        if (sParm)
            sParm.split('&').forEach((fItem) => {
                if (!this.stringIsEmpty(fItem)) {
                    let sKey = fItem.split('=')[0];
                    let sValue = fItem.substr(sKey.length + 1);
                    oReturn.set(sKey, sValue);
                }
            });
        return oReturn;
    }
    static formatMapbyObject(oObject, sPropName) {
        var oMap = new Map();
        if (oObject.hasOwnProperty(sPropName)) {
            for (var sKey in oObject[sPropName]) {
                var sVal = oObject[sPropName][sKey];
                oMap.set(sKey, sVal);
            }
        }
        return oMap;
    }
    static mapAssign(oTarget, oSource) {
        oSource.forEach((v, k) => {
            oTarget.set(k, v);
        });
        return oTarget;
    }
    static stringToSet(sString) {
        let oSet = new Set();
        if (sString != undefined && sString != null) {
            sString
                .split(',')
                .forEach(s => {
                if (s != '') {
                    oSet.add(s);
                }
            });
        }
        ;
        return oSet;
    }
    static setToString(oSet) {
        let aString = [];
        oSet.forEach(f => aString.push(f));
        return aString.join(',');
    }
    static upChildrenMap(mMap, sStart) {
        let mReturn = new Map();
        mMap.forEach((v, k) => {
            if (k.startsWith(sStart)) {
                mReturn.set(k.substr(sStart.length), v);
            }
        });
        return mReturn;
    }
}
