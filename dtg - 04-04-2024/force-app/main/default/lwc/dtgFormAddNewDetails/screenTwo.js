let counter = new Date().getTime() + 200;
const SCREEN_TWO = {
    "id": ++counter,
    "elements": [
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "PROJECT KEYWORDS", "showHeading": true, "class": "table-global-heading" },
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
                                "accept": "image/png, image/jpg, image/jpeg",
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
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": "Submit Second Document", "showHeading": true, "class": "table-sub-heading" },
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
                                "fieldAPIName": "Upload_File_Two",
                                "isLabel": false,
                                "type": "file",
                                "accept": "image/png, image/jpg, image/jpeg",
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
                                "class": "richTextTwo",
                                "fieldAPIName": "Demo_Rich_Text_2__c",
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
    ]
}
export default SCREEN_TWO;