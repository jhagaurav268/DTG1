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
        {
            "section": {
                "id": ++counter,
                "heading": { "label": `If YES – please elaborate on who will own the patent or title, and explain how potential for conflict of interest will be mitigated.`, "showHeading": true, "class": "table-main-heading" },
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
                                "fieldAPIName": "Patent_Ownership_Explanation__c",
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
                "heading": { "label": `4.2 Are any of the team members involved in the design or sale of a product that will be used in testing aninnovation?`, "showHeading": true, "class": "table-main-heading" },
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
                                "fieldAPIName": "Team_Member_Involvement__c",
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
                "heading": { "label": `If YES – please elaborate on how potential for conflict of interest within the project will be mitigated.`, "showHeading": true, "class": "table-main-heading" },
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
                                "fieldAPIName": "Team_Member_Involvement__c	",
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
                "heading": { "label": `Medical, Parental or Maternity Leave`, "showHeading": true, "class": "table-main-heading" },
                "class": "",
                "hidden": false,
                "rows": [
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "Please inform us if the Project Lead or Co-Lead will be taking leave.",
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
                        ]
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "If, during the course of your Project Term, you are provided with a leave from clinical duties by your institution, please fill out a G4 form found at IFPOC.org and submit it to your Governance Organization.",
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
                        ]
                    }
                ]
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": `4.3 Is there a significant information technology component to this project? `, "showHeading": true, "class": "table-main-heading" },
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
                                "fieldAPIName": "Significant_Technology_Component__c",
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
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "If you answered yes, please inform your CIO to obtain advice and support of your IT needs.",
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
                        ]
                    },
                ]
            }
        },
        {
            "section": {
                "id": ++counter,
                "heading": { "label": `4.4 Is this Project Proposal a continuation of a previous Innovation Funded project?`, "showHeading": true, "class": "table-main-heading" },
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
                                "fieldAPIName": "Continuation_of_Previous_Project__c",
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
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "If YES: please provide the Year and/or Project Code, Title and Project Lead(s) for the previous IF project.",
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
                                "label": "Year",
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
                                "label": "Title",
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
                                "label": "Project Lead(s)",
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
                                "fieldAPIName": "Continued_Project_Year__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Continued_Project_Titles__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Continued_Project_Lead_s__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
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
                                "fieldAPIName": "Continued_Project_Year__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Continued_Project_Titles__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Continued_Project_Lead_s__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
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
                "heading": { "label": `4.5 Is this project coordinated with or dependent on another AFP Innovation Fund project?`, "showHeading": true, "class": "table-main-heading" },
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
                                "fieldAPIName": "Project_Coordination_other_AFP_project__c",
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
                                "label": "If YES:",
                                "class": "",
                                "isLabel": true,
                                "isDisabled": false,
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Relationship_with_other_AFP_Inn_project__c",
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
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "If YES, please insert Title of Project, Project Lead, and Affiliated Institution as well as Project Code (if known).",
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
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "Title",
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
                                "label": "Project Lead",
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
                                "label": "Affiliated Institution",
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
                            {
                                "label": "Project Code",
                                "class": "",
                                "fieldAPIName": "Id",
                                "isLabel": true,
                                "isInput": false,
                                "isTextarea": false,
                                "isCurrency": false,
                                "isDisabled": false,
                                "isReadOnly": false,
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
                                "fieldAPIName": "Coordinated_Project_Title__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Coordinated_Project_Lead_s__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Coordinated_Project_Affiliated_Inst__c	",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Coordinated_Project_Code__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
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
                                "fieldAPIName": "Coordinated_Project_Title__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Coordinated_Project_Lead_s__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Coordinated_Project_Affiliated_Inst__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
                                "formatter": "currency"
                            },
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Coordinated_Project_Code__c",
                                "isLabel": false,
                                "isInput": false,
                                "isTextarea": true,
                                "isCurrency": false,
                                "isDisabled": false,
                                "type": "text",
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
                                "label": "If the other applicants are unsuccessful, can this project stand alone?",
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
                                "fieldAPIName": "Ability_for_Project_to_Stand_Alone__c",
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
                "heading": { "label": `4.6 Will this project receive funding from any other source than the IF? – including cash or in-kind contributions?`, "showHeading": true, "class": "table-main-heading" },
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
                                "fieldAPIName": "Project_Funding_Other_Sources__c",
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
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "If answered YES, please specify by source and amount anticipated or already committed:",
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
                                "label": "Source",
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
                                "label": "Amount",
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
                                "label": "Anticipated or Committed",
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
                                "fieldAPIName": "Other_Project_Funding_Source_1__c",
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
                                "fieldAPIName": "Other_Project_Funding_Amount_1__c",
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
                                "fieldAPIName": "Funding_Commitment_Status_1__c",
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
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Other_Project_Funding_Source_2__c",
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
                                "fieldAPIName": "Other_Project_Funding_Amount_2__c",
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
                                "fieldAPIName": "Funding_Commitment_Status_2__c",
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
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Other_Project_Funding_Source_3__c",
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
                                "fieldAPIName": "Other_Project_Funding_Amount_3__c",
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
                                "fieldAPIName": "Funding_Commitment_Status_3__c",
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
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Other_Project_Funding_Source_4__c",
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
                                "fieldAPIName": "Other_Project_Funding_Amount_4__c",
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
                                "fieldAPIName": "Funding_Commitment_Status_4__c",
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
                    },
                    {
                        "id": ++counter,
                        "class": "",
                        "hidden": false,
                        "columns": [
                            {
                                "label": "",
                                "class": "user-input",
                                "fieldAPIName": "Other_Project_Funding_Source_5__c",
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
                                "fieldAPIName": "Other_Project_Funding_Amount_5__c",
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
                                "fieldAPIName": "Funding_Commitment_Status_5__c",
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
                    },
                ]
            }
        },
    ]
}
export default SCREEN_FOUR;