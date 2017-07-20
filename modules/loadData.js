kony = kony || {};
kony.sdk = kony.sdk || {};
kony.sdk.mvvm = kony.sdk.mvvm || {};
kony.sdk.mvvm.log = kony.sdk.mvvm.log || {};
kony.sdk.mvvm.constants = kony.sdk.mvvm.constants || {};
var apptype = {"APPTYPE":"MFAPP"};
kony.sdk.mvvm.KonyApplicationContext.init(apptype);
kony.sdk.mvvm.userObj = {};
var session_token;

function getIdentityService(){
  //initializing the application context
  kony.sdk.mvvm.KonyApplicationContext.init();
alert("hhh");
  var configParams = {
     "ShowLoadingScreenFunction": ShowLoadingScreen
    };
   var params = {
    "authParams": {
        "username": "konyrbdev",
        "password": "kony1234",
        "loginOptions": {
            "isOfflineEnabled": false
        }
    },
    "options": {
        "access": "online"
    },
    "identityServiceName": "CustomLogin",
    "configParams": configParams
    };
    kony.sdk.mvvm.KonyApplicationContext.appServicesLogin(params, applicationInitialSuccessCallback, applicationErrorCallback);
}

function applicationInitialSuccessCallback() 
{
        if (kony.sdk.mvvm.KonyApplicationContext.getAppInstance()) {
                try {
                    session_token =  kony.sdk.getCurrentInstance().currentBackEndToken.value;
                    alert("session token value==="+session_token);
                  var appInstance = kony.sdk.mvvm.KonyApplicationContext.getAppInstance();
      			  kony.sdk.mvvm.initApplicationForms(appInstance);
                  alert(",,,lllll");
                  navigateToAccountDetails();
                } catch (error) {
                  alert(",,,,,");
                  	applicationErrorCallback(error);
                }
            }
          	else{
                alert("app not intialized");
            	alert(response["status"]+": "+response["msg"]);
          	}
}

function applicationErrorCallback(error) {
        kony.sdk.mvvm.log.error("failed to load app" + error);
        if (error instanceof kony.sdk.mvvm.Exception) {
            switch (error.code) {
                case 70:
                case 79:
                case 125:
                    error.message = i18n_deviceConnectionError ;
                    return;
                case 25:
                case 69:
                case 12:
                    return;
                case 17:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 26:
                    error.message = i18n_appLaunchError;
                    break;
                default:
                    return;
            
            }
            alert(error.message);
        } else
            alert(error.errorMessage);
}


function ShowLoadingScreen(){
  kony.application.showLoadingScreen(null,"fetching identity token", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
}
  
function navigateToAccountDetails(){
  alert("inside navigate to account details");
  frmAccountDetails.show();
  var navigationObject = new kony.sdk.mvvm.NavigationObject();    
     navigationObject.setRequestOptions("segMainData",{"headers":{"session_token":session_token}});
      var appInstance = kony.sdk.mvvm.KonyApplicationContext.getAppInstance();
        var controller = appInstance.getFormController("frmAccountDetails");
        controller.loadDataAndShowForm(navigationObject);
}