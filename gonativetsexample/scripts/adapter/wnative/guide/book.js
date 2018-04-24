import { AsyncStorage, Alert } from 'react-native';
import { TCoreCommonFunc, TCoreHelperUrl } from "../../tcore/index";
import { NavigationActions } from 'react-navigation';
class Book {
    navigateUrl(that, sPageUrl) {
        let oPageNavTemp = null;
        if (that && that.props && that.props.navigation) {
            oPageNavTemp = that.props.navigation;
        }
        else if (that && that.navigate) {
            oPageNavTemp = that;
        }
        if (oPageNavTemp) {
            let urlInfo = TCoreHelperUrl.parseUrl(sPageUrl);
            if (urlInfo.baseJump === "reset") {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({
                            routeName: urlInfo.pageName,
                            params: {
                                url: sPageUrl
                            }
                        })]
                });
                oPageNavTemp.dispatch(resetAction);
            }
            else if (urlInfo.baseJump === "replace") {
                let aAction = {
                    type: 'CustomNav/replace',
                    routeName: urlInfo.pageName,
                    params: {
                        url: sPageUrl
                    }
                };
                oPageNavTemp.dispatch(aAction);
            }
            else if (urlInfo.baseJump == "back") {
                oPageNavTemp.goBack();
            }
            else {
                //if (sTemplateUrl !== sPageUrl) {
                oPageNavTemp.navigate(urlInfo.pageName, { url: sPageUrl });
                //}
            }
        }
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
    stateUpValue(that, sKey) { return that.state[sKey]; }
    stateInObject(that, oObject) {
        that.setState(oObject);
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
        for (var p in that.state) {
            if (p.startsWith(sFormStart)) {
                oValue[p.substr(sFormStart.length)] = that.state[p];
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
        return AsyncStorage.getItem(sKey);
    }
    storeSetItem(sKey, sValue) {
        return AsyncStorage.setItem(sKey, sValue);
    }
    storeRemoveItem(sKey) {
        return AsyncStorage.removeItem(sKey);
    }
    fetchPost(sUrl, oJsonInput) {
        return fetch(sUrl, {
            method: 'POST',
            body: TCoreCommonFunc.jsonStringify(oJsonInput)
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.error(response);
            }
        });
    }
    checkFlagProduct() {
        let bReturn = true;
        if (__DEV__ != undefined && __DEV__ === true) {
            console.log(__DEV__);
            bReturn = false;
        }
        return bReturn;
    }
    componentMessageAlert(sTitle, sMessage) {
        Alert.alert(sTitle, sMessage, [
            {
                text: '确认'
            }
        ]);
    }
    componentMessageConfirm(sTitle, sMessage, fCall) {
        Alert.alert(sTitle, sMessage, [
            {
                text: '取消',
                onPress: () => console.log('Cancel Pressed!')
            }, {
                text: '确认',
                onPress: () => {
                    fCall();
                }
            }
        ]);
    }
    systemInfo() {
        return { version: '' };
    }
    execSpecific(sSpecificName, oParam) {
        switch (sSpecificName) {
            case "nativekeepalive":
                //
                break;
            default:
                break;
        }
    }
}
const GuideBook = new Book();
export { GuideBook };
