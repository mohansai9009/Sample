function addWidgetsfrmAccountDetails() {
    frmAccountDetails.setDefaultUnit(kony.flex.DP);
    var flxData = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxData",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxData.setDefaultUnit(kony.flex.DP);
    var segMainData = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblData": "Label"
        }, {
            "lblData": "Label"
        }, {
            "lblData": "Label"
        }],
        "groupCells": false,
        "height": "70%",
        "id": "segMainData",
        "isVisible": true,
        "left": "1%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0296c9c6d0d884f,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "10%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblData": "lblData"
        },
        "width": "98%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxData.add(segMainData);
    frmAccountDetails.add(flxData);
};

function frmAccountDetailsGlobals() {
    frmAccountDetails = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAccountDetails,
        "enabledForIdleTimeout": false,
        "id": "frmAccountDetails",
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
    frmAccountDetails.info = {
        "kuid": "0efd60c970eb442aa49763cab78e597a"
    };
};