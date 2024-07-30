let counter = new Date().getTime() + 100;
const SCREEN_ONE = {
    "id": ++counter,
    "elements": [
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "APPLICANT PROJECT PROPOSAL", "showHeading": true, "class": "table-global-heading" },
                "class": "",
                "hidden": false,
                "rows": ""
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "1.PROJECT SUMMARY", "showHeading": true, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": ""
            }
        },
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
                                "label": "Next Collaborator",
                                "class": "",
                                "isLabel": true,
                                "isDisabled": false,
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Next_Collaborator__c",
                                "isLabel": false,
                                "isInput": true,
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
                "heading": { "label": "Project title", "showHeading": true, "class": "table-main-heading" },
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
                                "class": "user-input",
                                "fieldAPIName": "Project_Title__c",
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
                "heading": { "label": "Project Lead #1", "showHeading": true, "class": "table-sub-heading" },
                "class": "",
                "hidden": false,
                "rows": ""
            }
        },
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
                                "label": "Name",
                                "class": "",
                                "fieldAPIName": "",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "Title",
                                "class": "",
                                "fieldAPIName": "",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                        ]
                    },
                    {
                        "id": ++counter,
                        "label": "Testing",
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Lead_1_Name__c",
                                "isLabel": false,
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Lead_1_Title__c",
                                "isLabel": false,
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            }
                        ]
                    },
                    {
                        "id": ++counter,
                        "label": "Testing",
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "Name of Institution",
                                "class": "",
                                "fieldAPIName": "",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "Name of AFP GO",
                                "class": "",
                                "fieldAPIName": "",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                        ]
                    },
                    {
                        "id": ++counter,
                        "label": "Testing",
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "PL_1_Name_of_Institution__c",
                                "isLabel": false,
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency",
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "PL1_Name_of_AFP_Governance_Organization__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency",
                                "isCombobox" : true,
                                "options" : []
                            }
                        ]
                    }
                ]
            }
        },
        // {
        //     "section": {
        //         "id": ++counter,
        //         "heading": { "label": "Are you a/an", "showHeading": true, "class": "table-sub-heading" },
        //         "class": "",
        //         "hidden": false,
        //         "rows": ""
        //     }
        // },
        // {
        //     "section": {
        //         "id": ++counter,
        //         "heading": { "label": "", "showHeading": false },
        //         "class": "",
        //         "hidden": false,
        //         "rows": [
        //             {
        //                 "id": ++counter,
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "Project_Lead_Degree_1__c",
        //                         "isLabel": false,
        //                         "isInput": false,
        //                         "isCombobox" : false,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDualList": true,
        //                         "isReadOnly": false,
        //                         "formatter": "currency",
        //                         "size": "3",
        //                         "options" : []
        //                     },
        //                 ]
        //             }
        //         ]
        //     }
        // },
        // {
        //     "section": {
        //         "id": ++counter,
        //         "heading": { "label": "Please indicate your specialty from the list.", "showHeading": true, "class": "table-sub-heading" },
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
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "Project_Lead_1_Specialty__c",
        //                         "isLabel": false,
        //                         "isInput": false,
        //                         "type": "text",
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "formatter": "currency",
        //                         "isCombobox" : true,
        //                         "options" : []
        //                     }
        //                 ]
        //             },
        //         ]
        //     },
        // },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "Contact Email", "showHeading": true, "class": "table-sub-heading" },
                "class": "",
                "hidden": false,
                "rows": ""
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "", "showHeading": false, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": [
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Lead_1_Email__c",
                                "isLabel": false,
                                "type": "text",
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            }
                        ]
                    },
                ]
            },
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "Project Lead #2 (optional)", "showHeading": true, "class": "table-sub-heading" },
                "class": "",
                "hidden": false,
                "rows": ""
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "", "showHeading": false, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": [
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "Name",
                                "class": "",
                                "fieldAPIName": "Id",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "Title",
                                "class": "",
                                "fieldAPIName": "Id",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            }
                        ]
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Lead_2_Name__c",
                                "isLabel": false,
                                "type": "text",
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Lead_2_Title__c",
                                "isLabel": false,
                                "isInput": true,
                                "type": "text",
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            },
                        ]
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "Name of Institution",
                                "class": "",
                                "fieldAPIName": "Id",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "Name of AFP GO",
                                "class": "",
                                "fieldAPIName": "Id",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            }
                        ]
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "PL_2_Name_of_Institution__c",
                                "isLabel": false,
                                "type": "text",
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "PL2_Name_of_AFP_Governance_Organization__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "text",
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency",
                                "isCombobox" : true,
                                "options" : []
                            }
                        ]
                    },
                ]
            }
        },
        /*{
            "section": {
                "id": ++counter,
                "heading": { "label": "", "showHeading": false, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": [
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "Name of Institution",
                                "class": "",
                                "fieldAPIName": "Id",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "Name of AFP GO",
                                "class": "",
                                "fieldAPIName": "Id",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            }
                        ]
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "PL_2_Name_of_Institution__c",
                                "isLabel": false,
                                "isInput": true,
                                "type": "text",
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "PL2_Name_of_AFP_Governance_Organization__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "text",
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency",
                                "isCombobox" : true,
                                "options" : []
                            }
                        ]
                    },
                ]
            }
        },*/
        // {
        //     "section": {
        //         "id": ++counter,
        //         "heading": { "label": "Are you an", "showHeading": true, "class": "table-sub-heading" },
        //         "class": "",
        //         "hidden": false,
        //         "rows": ""
        //     }
        // },
        // {
        //     "section": {
        //         "id": ++counter,
        //         "heading": { "label": "", "showHeading": false },
        //         "class": "",
        //         "hidden": false,
        //         "rows": [
        //             {
        //                 "id": ++counter,
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "",
        //                         "class": "user-input user-required-input",
        //                         "fieldAPIName": "Project_Lead_Degree_2__c",
        //                         "isLabel": false,
        //                         "isInput": false,
        //                         "isCombobox" : false,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDualList": true,
        //                         "isReadOnly": false,
        //                         "formatter": "currency",
        //                         "size": "3",
        //                         "options" : []
        //                     },
        //                 ]
        //             }
        //         ]
        //     }
        // },
        // {
        //     "section": {
        //         "id": ++counter,
        //         "heading": { "label": "Please indicate your specialty from the list.", "showHeading": true, "class": "table-sub-heading" },
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
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "Project_Lead_2_Specialty__c",
        //                         "isLabel": false,
        //                         "isInput": false,
        //                         "type": "text",
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "formatter": "currency",
        //                         "isCombobox" : true,
        //                         "options" : []
        //                     }
        //                 ]
        //             },
        //         ]
        //     },
        // },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "Contact Email", "showHeading": true, "class": "table-sub-heading" },
                "class": "",
                "hidden": false,
                "rows": ""
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "", "showHeading": false, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": [
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Lead_2_Email__c",
                                "isLabel": false,
                                "type": "text",
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency"
                            }
                        ]
                    },
                ]
            },
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "Project Duration", "showHeading": true, "class": "table-sub-heading" },
                "class": "",
                "hidden": false,
                "rows": ""
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "", "showHeading": false, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": [
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Duration__c",
                                "isLabel": false,
                                "type": "text",
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "formatter": "currency",
                                "isCombobox" : true,
                                "options" : []
                            }
                        ]
                    },
                ]
            },
        },
        // {
        //     "section": {
        //         "id": ++counter,
        //         "heading": { "label": "Next Collaborator", "showHeading": true, "class": "table-sub-heading" },
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
        //                 "class": "",
        //                 "hidden": false,
        //                 "columns": [
        //                     {
        //                         "label": "",
        //                         "class": "user-input",
        //                         "fieldAPIName": "Next_Collaborator__c",
        //                         "isLabel": false,
        //                         "type": "text",
        //                         "isInput": true,
        //                         "isTextarea": false,
        //                         "isCurrency": false,
        //                         "isDisabled": false,
        //                         "formatter": "currency",
        //                         "isCombobox" : false
        //                     }
        //                 ]
        //             },
        //         ]
        //     },
        // },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "Project Funding Details", "showHeading": true, "class": "table-sub-heading" },
                "class": "",
                "hidden": false,
                "rows": ""
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "", "showHeading": false, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": [
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "Year 1 Budget",
                                "class": "",
                                "fieldAPIName": "Id",
                                "isLabel": true,
                                "isInput": false,
                                "type": "text",
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "Year 2 Budget (if applicable)",
                                "class": "",
                                "fieldAPIName": "Id",
                                "isLabel": true,
                                "isInput": false,
                                "type": "text",
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "Total Budget",
                                "class": "",
                                "fieldAPIName": "Id",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                        ]
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input line-item",
                                "fieldAPIName": "Project_Funding_Year_1__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": false,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input line-item",
                                "fieldAPIName": "Project_Funding_Year_2_if_applicable__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": false,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input line-item-total",
                                "fieldAPIName": "Total_Project_Funding__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                // "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                // "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                        ]
                    },
                ]
            }
        },
    ]
}
export default SCREEN_ONE;