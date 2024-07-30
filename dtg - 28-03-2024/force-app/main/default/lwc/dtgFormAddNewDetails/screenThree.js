let counter = new Date().getTime() + 300;
const SCREEN_THREE = {
    "elements": [
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "", "showHeading": false, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": [
                    {
                        "id": ++counter,
                        "label": "Testing",
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "<h1 style='text-align:center'>PLAIN LANGUAGE ABSTRACT</h1>",
                                "class": "table-main-heading",
                                "fieldAPIName": "Id",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            }
                        ]
                    }
                ]
            }
        }, 
        {
            "section": {
                "id": ++counter,
                "heading": { "label": `3.1 Please describe the proposed project using non-technical language emphasizing the research question and its importance to health care delivery. If you receive the award, this summary description will be posted on the IFPOC public website and will be included in press releases. Ensure that your description can be understood outside your research field. – Maximum 1250 characters including spaces`, "showHeading": true, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": [
                    {
                        "id": ++counter,
                        "label": "Testing",
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input custom-textarea",
                                "fieldAPIName": "Plain_Language_Abstract_Summary__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": `3.2 What is the innovation and main question or hypothesis for this proposal? Maximum 1250 characters including spaces `, "showHeading": true, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": [
                    {
                        "id": ++counter,
                        "label": "Testing",
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input custom-textarea",
                                "fieldAPIName": "Innovation_and_Main_Question_Hypothesis__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": `3.3 Please describe how this project will influence the healthcare system or influence patient care? Maximum 1250 characters including spaces `, "showHeading": true, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": [
                    {
                        "id": ++counter,
                        "label": "Testing",
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input custom-textarea",
                                "fieldAPIName": "Influence_on_Healthcare_Patient_Care__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": `3.4 Please describe your knowledge translation plan for the results of this project (how will you share/disseminate your results and/or spread your innovation)? Maximum 1250 characters including spaces`, "showHeading": true, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": [
                    {
                        "id": ++counter,
                        "label": "Testing",
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input custom-textarea",
                                "fieldAPIName": "Knowledge_Translation_Plan_for_Results__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            }
                        ]
                    }
                ]
            }
        },
        // {
        //     "section": {
        //         "id": ++counter,
        //         "heading": { "label": "Project Lead #1", "showHeading": true, "class": "table-sub-heading" },
        //         "class": "",
        //         "hidden": false,
        //         "rows": ""
        //     }
        // },
        // {
        //     "section": {
        //         "id": ++counter,
        //         "heading": { "label": "", "showHeading": false, "class": "table-main-heading" },
        //         "class": "",
        //         "hidden": false,
        //         "rows": [
        //             {
        //                 "id": ++counter,
        //                 "label": "Testing",
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "Name",
        //                         "class": "",
        //                         "fieldAPIName": "",
        //                         "isLabel": true,
        //                         "isInput": false,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "type": "text",
        //                         "formatter": "currency"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": ++counter,
        //                 "label": "Testing",
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "Project_Lead_P2_Name__c",
        //                         "isLabel": false,
        //                         "isInput": true,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "type": "text",
        //                         "formatter": "currency"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": ++counter,
        //                 "label": "Email",
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "Email",
        //                         "class": "",
        //                         "fieldAPIName": "",
        //                         "isLabel": true,
        //                         "isInput": false,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "type": "text",
        //                         "formatter": "currency"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": ++counter,
        //                 "label": "Testing",
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "PL_2_Email__c",
        //                         "isLabel": false,
        //                         "isInput": true,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "type": "text",
        //                         "formatter": "currency",
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // },
        // {
        //     "section": {
        //         "id": ++counter,
        //         "heading": { "label": "Project Lead #2 (If Applicable)", "showHeading": true, "class": "table-sub-heading" },
        //         "class": "",
        //         "hidden": false,
        //         "rows": ""
        //     }
        // },
        // {
        //     "section": {
        //         "id": ++counter,
        //         "heading": { "label": "", "showHeading": false, "class": "table-main-heading" },
        //         "class": "",
        //         "hidden": false,
        //         "rows": [
        //             {
        //                 "id": ++counter,
        //                 "label": "Testing",
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "Name",
        //                         "class": "",
        //                         "fieldAPIName": "",
        //                         "isLabel": true,
        //                         "isInput": false,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "type": "text",
        //                         "formatter": "currency"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": ++counter,
        //                 "label": "Testing",
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "Project_Lead_P21_Name__c",
        //                         "isLabel": false,
        //                         "isInput": true,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "type": "text",
        //                         "formatter": "currency"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": ++counter,
        //                 "label": "Email",
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "Email",
        //                         "class": "",
        //                         "fieldAPIName": "",
        //                         "isLabel": true,
        //                         "isInput": false,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "type": "text",
        //                         "formatter": "currency"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": ++counter,
        //                 "label": "Testing",
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "PL_21_Email__c",
        //                         "isLabel": false,
        //                         "isInput": true,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "type": "text",
        //                         "formatter": "currency",
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // },
        // {
        //     "section": {
        //         "id": ++counter,
        //         "heading": { "label": "", "showHeading": false, "class": "table-main-heading" },
        //         "class": "",
        //         "hidden": false,
        //         "rows": [
        //             {
        //                 "id": ++counter,
        //                 "label": "Testing",
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "AFP Physician Compensation Funded by the Innovation Fund(list names with time commitment e.g. 1 day/ wk. per yr.)",
        //                         "class": "table-sub-heading",
        //                         "fieldAPIName": "",
        //                         "isLabel": true,
        //                         "isInput": false,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "type": "text",
        //                         "formatter": "currency"
        //                     },
        //                     {
        //                         "label": "Year 1 Budget[A]",
        //                         "class": "table-sub-heading",
        //                         "fieldAPIName": "",
        //                         "isLabel": true,
        //                         "isInput": false,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "type": "text",
        //                         "formatter": "currency"
        //                     },
        //                     {
        //                         "label": "Year 2 Budget[B]",
        //                         "class": "table-sub-heading",
        //                         "fieldAPIName": "",
        //                         "isLabel": true,
        //                         "isInput": false,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "type": "text",
        //                         "formatter": "currency"
        //                     },
        //                     {
        //                         "label": "Total Inn. Fund Budget [E] (A+B)",
        //                         "class": "table-sub-heading",
        //                         "fieldAPIName": "",
        //                         "isLabel": true,
        //                         "isInput": false,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "type": "text",
        //                         "formatter": "currency"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": ++counter,
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "AFP_Physician__c",
        //                         "isLabel": false,
        //                         "isInput": false,
        //                         "type": "number",
        //                         "step": "0.01",
        //                         "isTextarea": false,
        //                         "isCurrency": true,
        //                         "maxLength": 14,
        //                         "placeholder": "$",
        //                         "isDisabled": false,
        //                         "isReadOnly": false,
        //                         "formatter": "currency"
        //                     },
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "AFP_Physician1__c",
        //                         "isLabel": false,
        //                         "isInput": false,
        //                         "type": "number",
        //                         "step": "0.01",
        //                         "isTextarea": false,
        //                         "isCurrency": true,
        //                         "maxLength": 14,
        //                         "placeholder": "$",
        //                         "isDisabled": false,
        //                         "isReadOnly": false,
        //                         "formatter": "currency"
        //                     },
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "AFP_Physician2__c",
        //                         "isLabel": false,
        //                         "isInput": false,
        //                         "type": "number",
        //                         "step": "0.01",
        //                         "isTextarea": false,
        //                         "isCurrency": true,
        //                         "maxLength": 14,
        //                         "placeholder": "$",
        //                         "isDisabled": false,
        //                         "isReadOnly": false,
        //                         "formatter": "currency"
        //                     },
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "AFP_Physician3__c",
        //                         "isLabel": false,
        //                         "isInput": false,
        //                         "type": "number",
        //                         "step": "0.01",
        //                         "isTextarea": false,
        //                         "isCurrency": true,
        //                         "maxLength": 14,
        //                         "placeholder": "$",
        //                         "isDisabled": false,
        //                         "isReadOnly": false,
        //                         "formatter": "currency"
        //                     },
        //                 ]
        //             },
        //             {
        //                 "id": ++counter,
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "AFP_Physician4__c",
        //                         "isLabel": false,
        //                         "isInput": false,
        //                         "type": "number",
        //                         "step": "0.01",
        //                         "isTextarea": false,
        //                         "isCurrency": true,
        //                         "maxLength": 14,
        //                         "placeholder": "$",
        //                         "isDisabled": false,
        //                         "isReadOnly": false,
        //                         "formatter": "currency"
        //                     },
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "AFP_Physician5__c",
        //                         "isLabel": false,
        //                         "isInput": false,
        //                         "type": "number",
        //                         "step": "0.01",
        //                         "isTextarea": false,
        //                         "isCurrency": true,
        //                         "maxLength": 14,
        //                         "placeholder": "$",
        //                         "isDisabled": false,
        //                         "isReadOnly": false,
        //                         "formatter": "currency"
        //                     },
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "AFP_Physician6__c",
        //                         "isLabel": false,
        //                         "isInput": false,
        //                         "type": "number",
        //                         "step": "0.01",
        //                         "isTextarea": false,
        //                         "isCurrency": true,
        //                         "maxLength": 14,
        //                         "placeholder": "$",
        //                         "isDisabled": false,
        //                         "isReadOnly": false,
        //                         "formatter": "currency"
        //                     },
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "AFP_Physician7__c",
        //                         "isLabel": false,
        //                         "isInput": false,
        //                         "type": "number",
        //                         "step": "0.01",
        //                         "isTextarea": false,
        //                         "isCurrency": true,
        //                         "maxLength": 14,
        //                         "placeholder": "$",
        //                         "isDisabled": false,
        //                         "isReadOnly": false,
        //                         "formatter": "currency"
        //                     },
        //                 ]
        //             },
        //         ]
        //     }
        // }
    ]
}
export default SCREEN_THREE;