function addWidgetsfrmDashBoard() {
    frmDashBoard.setDefaultUnit(kony.flex.DP);
    var btnData = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnData",
        "isVisible": true,
        "left": "51dp",
        "onClick": AS_Button_ba98930c0938467491ca5be2057811a5,
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "121dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmDashBoard.add(btnData);
};

function frmDashBoardGlobals() {
    frmDashBoard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDashBoard,
        "enabledForIdleTimeout": false,
        "id": "frmDashBoard",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    frmDashBoard.info = {
        "kuid": "90d477b4fb8c40f588265b8204a8c930"
    };
};