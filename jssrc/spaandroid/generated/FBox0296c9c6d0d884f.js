function initializeFBox0296c9c6d0d884f() {
    FBox0296c9c6d0d884f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "40dp",
        "id": "FBox0296c9c6d0d884f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox0296c9c6d0d884f.setDefaultUnit(kony.flex.DP);
    var lblData = new kony.ui.Label({
        "id": "lblData",
        "isVisible": true,
        "left": "116dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "6dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    FBox0296c9c6d0d884f.add(lblData);
}