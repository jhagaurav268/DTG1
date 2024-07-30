let counter = new Date().getTime() + 200;
const SCREEN_TWO = {
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
                "heading": { "label": "2.PROJECT KEYWORDS:", "showHeading": true, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": ""
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "2.1 Please select and insert five codes and associated titles for keywords to describe your project, in order of importance, from among the focus (code 1000), methodology (code 2000) and outcomes (code 3000)", "showHeading": true, "class": "table-main-heading" },
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
                                "fieldAPIName": "Project_Keyword_1__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency",
                                "isCombobox" : true,
                                "options" : []
                            },
                        ]
                    }
                ]
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
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Keyword_2__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency",
                                "isCombobox" : true,
                                "options" : []
                            },
                        ]
                    }
                ]
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
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Keyword_3__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency",
                                "isCombobox" : true,
                                "options" : []
                            },
                        ]
                    }
                ]
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
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Keyword_4__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency",
                                "isCombobox" : true,
                                "options" : []
                            },
                        ]
                    }
                ]
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
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Keyword_5__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency",
                                "isCombobox" : true,
                                "options" : []
                            },
                        ]
                    }
                ]
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "Submit Document", "showHeading": true, "class": "table-sub-heading" },
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
                                "fieldAPIName": "Upload_File",
                                "isLabel": false,
                                "type": "file",
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
                                "class": "richText",
                                "fieldAPIName": "Demo_Rich_Text__c",
                                "isLabel": false,
                                "type": "text",
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "isRichText": true,
                                "formatter": "currency",
                                "value": ""
                            }
                        ]
                    },
                ]
            },
        }
       /* {
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
                                "fieldAPIName": "Project_Lead_1_Title__c",
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
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "Are you a/an", "showHeading": true, "class": "table-sub-heading" },
                "class": "",
                "hidden": false,
                "rows": ""
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "", "showHeading": false },
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
                                "class": "user-input user-required-input",
                                "fieldAPIName": "Project_Lead_1_Degree__c",
                                "isLabel": false,
                                "isInput": false,
                                "isCombobox" : false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDualList": true,
                                "isReadOnly": false,
                                "formatter": "currency",
                                "size": "3",
                                "options" : []
                            },
                        ]
                    }
                ]
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "Please indicate your specialty from the list", "showHeading": true, "class": "table-sub-heading" },
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
                                "fieldAPIName": "Project_Lead_1_Specialty__c",
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
            },
        },
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
                            }

                        ]
                    },
                ]
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
                                "label": "Name of AFP Gov Org",
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
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "Are you an", "showHeading": true, "class": "table-sub-heading" },
                "class": "",
                "hidden": false,
                "rows": ""
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "", "showHeading": false },
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
                                "class": "user-input user-required-input",
                                "fieldAPIName": "Project_Lead_2_Degree__c",
                                "isLabel": false,
                                "isInput": false,
                                "isCombobox" : false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDualList": true,
                                "isReadOnly": false,
                                "formatter": "currency",
                                "size": "3",
                                "options" : []
                            },
                        ]
                    }
                ]
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "Please indicate your specialty from the list Choose from the Selections on the Specialty List at the end of the document or at: http://tinyurl.com/4cdym66k", "showHeading": true, "class": "table-sub-heading" },
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
                                "fieldAPIName": "Project_Lead_2_Specialty__c",
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
            },
        },
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
                                "class": "user-input",
                                "fieldAPIName": "Year_1_Budget__c",
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
                                "class": "user-input",
                                "fieldAPIName": "Year_2_Budget__c",
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
                                "class": "user-input",
                                "fieldAPIName": "Final_Total_Project_Budget__c",
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
                        ]
                    },
                ]
            }
        },*/
    ]
}
export default SCREEN_TWO;