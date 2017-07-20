//Type your code here
var frmAccountDetailsConfig = {
    "formid": "frmAccountDetails",
    "frmAccountDetails": {
        "entity": "Accounts",
        "objectServiceName": "RBObjects",
        "objectServiceOptions": {
            "access": "online"
        }
    },
    "segMainData": {
        "fieldprops": {
            "widgettype": "Segment",
            "entity": "Accounts",
            "fields": {
                "lblData": {
                    "widgettype": "Label",
                    "field": "nickName"
                }
            }
        }
    }
};
//frmAccountDetails
// var frmAccountsLandingKAConfig = {
//   "formid": "frmAccountsLandingKA",
//   "frmAccountsLandingKA": {
//     "entity": "Accounts",
//     "objectServiceName": "RBObjects",
//     "objectServiceOptions" : {"access":"online"},
//   },
//   "segAccountsKA": {
//     "fieldprops": {
//       "widgettype": "Segment",
//       "entity": "Accounts",
//       "additionalFields": ["availablePoints","dueDate","openingDate","paymentTerm","maturityDate","lastStatementBalance","creditCardNumber","accountID","bankName","currentBalance","interestRate","minimumDue","principalValue","supportBillPay","supportTransferFrom","supportTransferTo","transactionLimit","transferLimit","errmsg","nickName","success"],
//       "field": {
//         "nameAccount1": {
//           "widgettype": "Label",
//           "field" : "nickName"
//         },
//         "amountAccount":{
//           "widgettype": "Label",
//           "field": "availableBalance"
//         },
//       }
//     }
//   }
// };