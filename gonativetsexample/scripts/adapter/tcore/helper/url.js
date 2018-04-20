class CurlInfo {
    constructor() {
        this.pageName = '';
        this.pageUrl = '';
        this.formParam = {};
        this.stateParam = {};
        this.parentParam = {};
        this.otherParam = {};
        this.paramSource = {};
    }
}
export class HelperUrl {
    static parseUrl(sPageUrl) {
        let urlInfo = new CurlInfo();
        urlInfo.pageUrl = sPageUrl;
        if (sPageUrl != undefined && sPageUrl.indexOf('?') > -1) {
            urlInfo.pageName = sPageUrl.split('?')[0];
            let sParm = sPageUrl.substr(urlInfo.pageName.length + 1);
            sParm.split('&').forEach((fItem) => {
                if (fItem) {
                    let sKey = fItem.split('=')[0];
                    let sValue = fItem.substr(sKey.length + 1);
                    if (sKey && sValue) {
                        let sStart = sKey.split('_')[0];
                        let sEnd = sKey.substr(sStart.length + 1);
                        if (sStart && sEnd) {
                            if (sStart === "base") {
                                switch (sEnd) {
                                    case "key":
                                        urlInfo.baseKey = sValue;
                                        break;
                                    case "type":
                                        urlInfo.baseType = sValue;
                                        break;
                                    case "jump":
                                        urlInfo.baseJump = sValue;
                                        break;
                                    case "field":
                                        urlInfo.baseField = sValue;
                                        break;
                                    case "show":
                                        urlInfo.baseShow = sValue;
                                        break;
                                    case "leader":
                                        urlInfo.baseLeader = sValue;
                                        break;
                                    default:
                                        urlInfo.otherParam[sKey] = sValue;
                                        break;
                                }
                            }
                            else if (sStart === "form") {
                                urlInfo.formParam[sEnd] = sValue;
                            }
                            else if (sStart === "state") {
                                urlInfo.stateParam[sEnd] = sValue;
                            }
                            else if (sStart === "parent") {
                                urlInfo.parentParam[sEnd] = sValue;
                            }
                            else {
                                urlInfo.otherParam[sKey] = sValue;
                            }
                        }
                        else {
                            urlInfo.otherParam[sKey] = sValue;
                        }
                        urlInfo.paramSource[sKey] = sValue;
                    }
                }
            });
        }
        else {
            urlInfo.pageName = sPageUrl;
        }
        return urlInfo;
    }
}
