//P2 Form SCREEN_THREE
let counter = new Date().getTime() + 100;
const P2P4_SCREEN_ONE = {
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
                                "label": "<h1 style='text-align:center'>Innovation Fund Budget And Financial Statement</h1>",
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
                "heading": { "label": "Project Code (will be assigned if project is approved)", "showHeading": true, "class": "table-main-heading" },
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
                                "isInput": true,
                                "isTextarea": false,
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
                            }
                        ]
                    },
                    {
                        "id": ++counter,
                        "label": "Email",
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "Email",
                                "class": "",
                                "fieldAPIName": "",
                                "isLabel": true,
                                "isInput": false,
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
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Lead_1_Email__c",
                                "isLabel": false,
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency",
                            }
                        ]
                    }
                ]
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "Project Lead #2 (If Applicable)", "showHeading": true, "class": "table-sub-heading" },
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
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Lead_2_Name__c",
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
                        "label": "Email",
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "Email",
                                "class": "",
                                "fieldAPIName": "",
                                "isLabel": true,
                                "isInput": false,
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
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Project_Lead_2_Email",
                                "isLabel": false,
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency",
                            }
                        ]
                    }
                ]
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "AFP Physician Compensation Funded by the Innovation Fund", "showHeading": true, "class": "table-heading1" },
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
                                "label": "",
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
                                "label": "",
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
                                "label": "",
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
                                "label": "",
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
                                "label": "INTERIM REPORT/ FINAL for 1 Year Projects",
                                "class": "table-sub-heading",
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
                                "label": "FINAL for 2 Year Projects",
                                "class": "table-sub-heading",
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
                                "label": "",
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
                                "label": "",
                                "class": "",
                                "fieldAPIName": "",
                                "isLabel": true,
                                "isInput": false,
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
                                "label": "",
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
                                "label": "",
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
                                "label": "",
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
                                "label": "",
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
                                "label": "Year 1",
                                "class": "table-sub-heading",
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
                                "label": "Year 2",
                                "class": "table-sub-heading",
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
                                "label": "Year 1 & 2",
                                "class": "table-sub-heading",
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
                                "label": "(if applicable)",
                                "class": "table-sub-heading",
                                "fieldAPIName": "",
                                "isLabel": true,
                                "isInput": false,
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
                                "label": "AFP Physician Compensation Funded by the Innovation Fund(list names with time commitment e.g. 1 day/ wk. per yr.)",
                                "class": "table-sub-heading",
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
                                "label": "Year 1 Budget[A]",
                                "class": "table-sub-heading",
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
                                "label": "Year 2 Budget[B]",
                                "class": "table-sub-heading",
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
                                "label": "Total Inn.Fund Budget[E](A+B)",
                                "class": "table-sub-heading",
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
                                "label": "Year 1 Inn.Fund Actuals[C]",
                                "class": "table-sub-heading",
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
                                "label": "Year 2 Inn.Fund Actuals[D]",
                                "class": "table-sub-heading",
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
                                "label": "Total Inn.Fund Actual Spend [F](C+D)",
                                "class": "table-sub-heading",
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
                                "label": "Variance Versus Budget [G](F-E)",
                                "class": "table-sub-heading",
                                "fieldAPIName": "",
                                "isLabel": true,
                                "isInput": false,
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
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "AFP_Physician_Compen_Fund_by_Inn_Fund_1__c",
                                "isLabel": false,
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Year_1_Inn_Budget_A1__c",
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
                                "fieldAPIName": "Year_2_Inn_Budget_B1__c",
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
                                "fieldAPIName": "Total_Inn_Fund_Budget_A1_B1__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "AFP_Year_1_Inn_Fund_Actuals_C1__c",
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
                                "fieldAPIName": "AFP_Year_2_Inn_Fund_Actuals_D1__c",
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
                                "fieldAPIName": "AFP_Total_Inn_Fund_Actual_Spend_C1_D1__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "AFP_Variance_Versus_Bud_C1_D1_A1_B1__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
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
                                "fieldAPIName": "AFP_Physician_Compen_Fund_by_Inn_Fund_2__c",
                                "isLabel": false,
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Year_1_Inn_Budget_A2__c",
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
                                "fieldAPIName": "Year_2_Inn_Budget_B2__c",
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
                                "fieldAPIName": "Total_Inn_Fund_Budget_A2_B2__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "AFP_Year_1_Inn_Fund_Actuals_C2__c",
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
                                "fieldAPIName": "AFP_Year_2_Inn_Fund_Actuals_D2__c",
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
                                "fieldAPIName": "AFP_Total_Inn_Fund_Actual_Spend_C2_D2__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "AFP_Variance_Versus_Bud_C2_D2_A2_B2__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
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
                                "fieldAPIName": "AFP_Physician_Compen_Fund_by_Inn_Fund_3__c",
                                "isLabel": false,
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Year_1_Inn_Budget_A3__c",
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
                                "fieldAPIName": "Year_2_Inn_Budget_B3__c",
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
                                "fieldAPIName": "Total_Inn_Fund_Budget_A3_B3__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "AFP_Year_1_Inn_Fund_Actuals_C3__c",
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
                                "fieldAPIName": "AFP_Year_2_Inn_Fund_Actuals_D3__c",
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
                                "fieldAPIName": "AFP_Total_Inn_Fund_Actual_Spend_C3_D3__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "AFP_Variance_Versus_Bud_C3_D3_A3_B3__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
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
                                "fieldAPIName": "AFP_Physician_Compen_Fund_by_Inn_Fund_4__c",
                                "isLabel": false,
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Year_1_Inn_Budget_A4__c",
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
                                "fieldAPIName": "Year_2_Inn_Budget_B4__c",
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
                                "fieldAPIName": "Total_Inn_Fund_Budget_A4_B4__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "AFP_Year_1_Inn_Fund_Actuals_C4__c",
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
                                "fieldAPIName": "AFP_Year_2_Inn_Fund_Actuals_D4__c",
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
                                "fieldAPIName": "AFP_Total_Inn_Fund_Actual_Spend_C4_D4__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "AFP_Variance_Versus_Bud_C4_D4_A4_B4__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
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
                                "fieldAPIName": "AFP_Physician_Compen_Fund_by_Inn_Fund_5__c",
                                "isLabel": false,
                                "isInput": true,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Year_1_Inn_Budget_A5__c",
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
                                "fieldAPIName": "Year_2_Inn_Budget_B5__c",
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
                                "fieldAPIName": "Total_Inn_Fund_Budget_A5_B5__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "AFP_Year_1_Inn_Fund_Actuals_C5__c",
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
                                "fieldAPIName": "AFP_Year_2_Inn_Fund_Actuals_D5__c",
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
                                "fieldAPIName": "AFP_Total_Inn_Fund_Actual_Spend_C5_D5__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "AFP_Variance_Versus_Bud_C5_D5_A5_B5__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
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
                                "label": "Subtotal - Physician Compensation - Innovation Fund - A",
                                "class": "user-input",
                                "fieldAPIName": "",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Subtotal_Year_1_Inn_Budget__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Subtotal_Year_2_Inn_Budget__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Subtotal_Total_Inn_Fund_Budget__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Subtotal_AFP_year_1_Inn_Fund_Actuals__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Subtotal_AFP_year_2_Inn_Fund_Actuals__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Subtotal_AFP_Total_Inn_Fund_Act_Spend__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
                                "placeholder": "$",
                                "isDisabled": true,
                                "disabled":true,
                                "isReadOnly": false,
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Subtotal_Variance_Versus_Budget__c",
                                "isLabel": false,
                                "isInput": false,
                                "type": "number",
                                "step": "0.01",
                                "isTextarea": false,
                                "isCurrency": true,
                                "maxLength": 14,
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
        }
    ]
}
export default P2P4_SCREEN_ONE;