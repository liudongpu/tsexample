
export interface IGuideSystemInfo{
    version:string
}



export interface IGuideActionSheet{
    title:string
    labels:string[]
    success:any
}



export interface IGuideBook {

    navigateUrl(that, sPageUrl : string);

    urlCurrentInfo(that);

    stateInValue(that, sKey : string, oVal : any);

    stateUpValue(that, sKey : string):any;

    stateInObject(that, oObject);

    stateInForm(that, sStart : string, oObject : any);

    stateUpForm(that, sStart : string);

    storeGetObject < T > (sKey : string) : Promise < T >;

    storeSetObject < T > (sKey : string, tValue : T) : Promise < void >;
    storeSetItem(sKey : string, sValue : string) : Promise < void >;

    storeRemoveItem(sKey : string) : Promise < void >;

    fetchPost(sUrl : string, oJsonInput : any) : Promise < any >;
    checkFlagProduct() : boolean;

    componentMessageAlert(sTitle : string, sMessage : string);

    componentMessageConfirm(sTitle : string, sMessage : string, fCall : Function);
    


    

    systemInfo() : IGuideSystemInfo;


    execSpecific(sSpecificName:string,oParam?:any):any;

}



