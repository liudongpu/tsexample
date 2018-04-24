import { TCoreCommonFunc, TCoreHelperUrl } from "../../tcore/index";
class Book {
    navigateUrl(that, sPageUrl) {
        wx.navigateTo({ url: sPageUrl });
    }
    urlCurrentInfo(that) {
        let sPageUrl = that.props.navigation.state.params.url;
        let oUrlInfo = TCoreHelperUrl.parseUrl(sPageUrl);
        return oUrlInfo;
    }
    stateInValue(that, sKey, sVal) {
        let oObject = {};
        oObject[sKey] = sVal;
        this.stateInObject(that, oObject);
    }
    stateUpValue(that, sKey) {
        return that.data[sKey];
    }
    stateInObject(that, oObject) {
        that.setData(oObject);
    }
    stateInForm(that, sStart, oObject) {
        let oState = {};
        for (var p in oObject) {
            oState['form_' + sStart + '_' + p] = oObject[p];
        }
        this.stateInObject(that, oState);
    }
    stateUpForm(that, sStart) {
        let oValue = {};
        let sFormStart = 'form_' + sStart + '_';
        for (var p in that.data) {
            if (p.startsWith(sFormStart)) {
                oValue[p.substr(sFormStart.length)] = that.data[p];
            }
        }
        return oValue;
    }
    storeGetObject(sKey) {
        return this
            .storeGetItem(sKey)
            .then((value) => {
            if (value) {
                return TCoreCommonFunc.jsonParse(value);
            }
            else {
                return null;
            }
        });
    }
    storeSetObject(sKey, tValue) {
        return this.storeSetItem(sKey, TCoreCommonFunc.jsonStringify(tValue));
    }
    storeGetItem(sKey) {
        return new Promise(resolve => {
            wx.getStorage({
                key: sKey,
                success: (res) => {
                    resolve(res.data);
                }
            });
        });
    }
    storeSetItem(sKey, sValue) {
        return new Promise(resolve => {
            wx.setStorageSync(sKey, sValue);
            resolve();
        });
    }
    storeRemoveItem(sKey) {
        return new Promise(resolve => {
            wx.removeStorage({
                key: sKey,
                success: (res) => {
                    resolve(res.data);
                }
            });
        });
    }
    fetchPost(sUrl, oJsonInput) {
        /*
        return fetch(sUrl, {
            method: 'POST',
            body: TCoreCommonFunc.jsonStringify(oJsonInput)
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error(response)
            }
        })
        */
        return new Promise((resolve) => {
            wx.request({
                url: sUrl,
                data: TCoreCommonFunc.jsonStringify(oJsonInput),
                method: "POST",
                success: function (res) {
                    resolve(res.data);
                }
            });
        });
    }
    checkFlagProduct() {
        let bReturn = true;
        return bReturn;
    }
    componentMessageAlert(sTitle, sMessage) {
        wx.showModal({ title: sTitle, content: sMessage, showCancel: false });
    }
    componentMessageConfirm(sTitle, sMessage, fCall) {
        wx.showModal({ title: sTitle, content: sMessage, success: function (res) {
                if (res.confirm) {
                    fCall();
                }
                else if (res.cancel) {
                    console.log('用户点击取消');
                }
            } });
    }
    systemInfo() {
        return { version: '' };
    }
    execSpecific(sSpecificName, oParam) {
        switch (sSpecificName) {
            default:
                break;
        }
    }
}
const GuideBook = new Book();
export { GuideBook };
