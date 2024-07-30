let counter = new Date().getTime();
const SCREEN_ZERO = {
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
                                "label": "<h1 style='text-align:center'>Project Proposals</h1>",
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
                                "label": "<abbr lightning-groupedcombobox_groupedcombobox class='slds-required' title='required'>*</abbr>Project Token",
                                "class": "",
                                "isLabel": true,
                                "isDisabled": false,
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Token",
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
        }
    ]
}
export default SCREEN_ZERO;