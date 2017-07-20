//startup.js file
var appConfig = {
    appId: "rbMVVMApp",
    appName: "rbMVVMApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.20.3.27",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    eventTypes: [],
    url: null,
    secureurl: null,
    middlewareContext: "rbMVVMApp"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeFBox0296c9c6d0d884f();
    frmAccountDetailsGlobals();
    frmDashBoardGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 7200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmDashBoard.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: []
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};