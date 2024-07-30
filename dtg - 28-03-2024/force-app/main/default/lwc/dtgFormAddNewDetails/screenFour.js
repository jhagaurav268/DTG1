let counter = new Date().getTime() + 400;
const SCREEN_FOUR = {
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
                                "label": "<h1 style='text-align:center'>Project Details</h1>",
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
                "heading": { "label": `4.1 Does this project/innovation have the possibility to result in a patent, title of ownership?`, "showHeading": true, "class": "table-main-heading" },
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
                                "fieldAPIName": "Possibility_of_Patent_Ownership_title__c",
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
    ]
}
export default SCREEN_FOUR;