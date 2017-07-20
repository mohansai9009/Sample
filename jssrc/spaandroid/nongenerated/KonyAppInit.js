kony = kony || {};
kony.sdk = kony.sdk || {};
kony.sdk.mvvm = kony.sdk.mvvm || {};
kony.sdk.mvvm.v2 = kony.sdk.mvvm.v2 || {};
kony.sdk.mvvm.initApplicationForms = function(appContext) {
    try {
        var frmAccountDetailsModelConfigObj = appContext.getFactorySharedInstance().createConfigClassObject(frmAccountDetailsConfig);
        var frmAccountDetailsControllerObj = appContext.getFactorySharedInstance().createFormControllerObject("kony.sdk.mvvm.frmAccountDetailsController", appContext, frmAccountDetailsModelConfigObj);
        var frmAccountDetailsControllerExtObj = appContext.getFactorySharedInstance().createFormControllerExtObject("kony.sdk.mvvm.frmAccountDetailsControllerExtension", frmAccountDetailsControllerObj);
        frmAccountDetailsControllerObj.setControllerExtensionObject(frmAccountDetailsControllerExtObj);
        var frmAccountDetailsFormModelObj = appContext.getFactorySharedInstance().createFormModelObject("kony.sdk.mvvm.frmAccountDetailsFormModel", frmAccountDetailsControllerObj);
        var frmAccountDetailsFormModelExtObj = appContext.getFactorySharedInstance().createFormModelExtObject("kony.sdk.mvvm.frmAccountDetailsFormModelExtension", frmAccountDetailsFormModelObj);
        frmAccountDetailsFormModelObj.setFormModelExtensionObj(frmAccountDetailsFormModelExtObj);
        appContext.setFormController("frmAccountDetails", frmAccountDetailsControllerObj);
    } catch (err) {
        var exception = appContext.getFactorySharedInstance().createExceptionObject(kony.sdk.mvvm.ExceptionCode.CD_ERROR_APP_INIT_FORMS, kony.sdk.mvvm.ExceptionCode.MSG_ERROR_APP_INIT_FORMS, err);
        kony.sdk.mvvm.log.error(exception.toString());
        throw exception;
    }
};