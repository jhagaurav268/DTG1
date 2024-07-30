let counter = new Date().getTime()+600;
const SUBMIT_SCREEN= {
    "id": ++counter,
    "elements": [

        {
            "section": {
                "id": ++counter,
                "heading": {
                    "label": "Your Form has been Successfully Submitted...!",
                    "showHeading": true,
                    "class": "submit-sub-heading", "showHeading": true
                },
                "class": "",
                "hidden": false,
                "rows": ""
            }
        },

    ]
}
export default SUBMIT_SCREEN;