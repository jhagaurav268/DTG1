import { protectThis } from "./protectThis";
import { __validateInputs, __successMessage, __errorMessage, __showToast, __stringifyData, __processInputData } from "./utils";

import getMultiSelectPicklistFieldValues from '@salesforce/apex/DtgManageDetailsController.getMultiSelectPicklistFieldValues';
import getPicklistFieldValues from '@salesforce/apex/DtgManageDetailsController.getPicklistFieldValues';
import upsertData from '@salesforce/apex/DtgManageDetailsController.upsertData';
import fetchRecordDetails from '@salesforce/apex/DtgManageDetailsController.fetchRecordDetails';

import SCREEN_ZERO from './screenZero';
import SCREEN_ONE from './screenOne';
import SCREEN_TWO from './screenTwo';
import SCREEN_THREE from "./screenThree";
import SCREEN_FOUR from "./screenFour";
import SCREEN_FIVE from "./screenFive";
import SUBMIT_SCREEN from "./submitScreen";

export default class P1ProjectProposalService {
    screens = [
        SCREEN_ZERO,
        SCREEN_ONE,
        SCREEN_TWO,
        SCREEN_THREE,
        SCREEN_FOUR,
        SCREEN_FIVE,
        SUBMIT_SCREEN
    ]
    timeout;
    progressIndicatorSteps = [
        {
            label: 'Project Token',
            step: 0,
            name: 'SCREEN_ZERO',
            hidden: false,
            showDraft: false,
            showPreview: false,
            showNext: false,
            showBack: true,
            showSave: false
        },
        {
            label: 'Project Summary',
            step: 1,
            name: 'SCREEN_ONE',
            hidden: false,
            showNext: false,
            showBack: false,
            showDraft: true,
            showPreview: true,
            showSave: false
        },
        {
            label: 'Project Keywords',
            step: 2,
            name: 'SCREEN_TWO',
            hidden: false,
            showNext: false,
            showBack: false,
            showDraft: true,
            showPreview: true,
            showSave: false
        },
        {
            label: 'Plain Language Abstract',
            step: 3,
            name: 'SCREEN_THREE',
            hidden: false,
            showNext: false,
            showBack: false,
            showDraft: true,
            showPreview: true,
            showSave: false
        },
        {
            label: 'Project Details',
            step: 4,
            name: 'SCREEN_FOUR',
            hidden: false,
            showNext: false,
            showBack: false,
            showDraft: true,
            showPreview: true,
            showSave: false
        },
        {
            label: 'Project Narrative Proposal',
            step: 5,
            name: 'SCREEN_FIVE ',
            hidden: false,
            showNext: false,
            showBack: false,
            showDraft: true,
            showPreview: true,
            showSave: false
        },
        {
            label: 'Submitted',
            step: 6,
            name: 'SUBMIT_SCREEN ',
            hidden: false,
            showNext: true,
            showBack: true,
            showDraft: false,
            showPreview: true,
            showSave: false
        }
    ];
    parent;
    comboboxvalues = [
        // 'Project_Lead_1_Specialty__c', 'Project_Lead_2_Specialty__c',
        'PL1_Name_of_AFP_Governance_Organization__c', 'PL2_Name_of_AFP_Governance_Organization__c',
        'Project_Duration__c', 'Project_Keyword_1__c', 'Project_Keyword_2__c', 'Project_Keyword_3__c',
        'Project_Keyword_4__c', 'Project_Keyword_5__c', 'Possibility_of_Patent_Ownership_title__c',
        'Team_Member_Involvement__c', 'Significant_Technology_Component__c', 'Continuation_of_Previous_Project__c',
        'Project_Coordination_other_AFP_project__c', 'Project_Funding_Other_Sources__c', 'Funding_Commitment_Status_1__c',
        'Funding_Commitment_Status_2__c', 'Funding_Commitment_Status_3__c', 'Funding_Commitment_Status_4__c',
        'Funding_Commitment_Status_5__c', 'Previous_Proposal_Submission_Status__c', 'Ability_for_Project_to_Stand_Alone__c',
        'Relationship_with_other_AFP_Inn_project__c'
    ];

    constructor(parent) {
        protectThis(this);
        this.parent = parent;
    }

    // splitDegreeField(field) {
    //     return field.includes(';') ? field.split(';') : [field];
    // }

    init() {
        this.parent.loadingSpinner = true;

        this.parent.progressIndicatorSteps = this.progressIndicatorSteps;
        this.parent.screens = this.screens;

        getMultiSelectPicklistFieldValues({ 'context': this.parent.context }).then((result) => {
            this.parent.qualificationOption = result;
            let currScreen = this.parent.screens[++this.parent.currentStep];
            this.parent.currentScreen = this.__loadDynamicInputs(JSON.parse(JSON.stringify(currScreen)));
            this.__loadScreen();

        }).catch((error) => {
            console.log(error);
        })

        for (let i = 0; i < this.comboboxvalues.length; i++) {
            getPicklistFieldValues({ 'context': this.parent.context, 'apiName': this.comboboxvalues[i] }).then((result) => {
                if (this.comboboxvalues[i] === 'Project_Lead_1_Specialty__c') {
                    this.parent.specialityOneOptions = result;
                } else if (this.comboboxvalues[i] === 'Project_Lead_2_Specialty__c') {
                    this.parent.specialityTwoOptions = result;
                } else if (this.comboboxvalues[i] === 'PL1_Name_of_AFP_Governance_Organization__c') {
                    this.parent.plOneGo = result;
                } else if (this.comboboxvalues[i] === 'PL2_Name_of_AFP_Governance_Organization__c') {
                    this.parent.plTwoGo = result;
                } else if (this.comboboxvalues[i] === 'Project_Duration__c') {
                    this.parent.projectDurationOption = result;
                } else if (this.comboboxvalues[i] === 'Project_Keyword_1__c') {
                    this.parent.projectKeywordOne = result;
                } else if (this.comboboxvalues[i] === 'Project_Keyword_2__c') {
                    this.parent.projectKeywordTwo = result;
                } else if (this.comboboxvalues[i] === 'Project_Keyword_3__c') {
                    this.parent.projectKeywordThree = result;
                } else if (this.comboboxvalues[i] === 'Project_Keyword_4__c') {
                    this.parent.projectKeywordFour = result;
                } else if (this.comboboxvalues[i] === 'Project_Keyword_5__c') {
                    this.parent.projectKeywordFive = result;
                } else if (this.comboboxvalues[i] === 'Possibility_of_Patent_Ownership_title__c') {
                    this.parent.patentOwnershipTitle = result;
                } else if (this.comboboxvalues[i] === 'Team_Member_Involvement__c') {
                    this.parent.teamMemberInvolvement = result;
                } else if (this.comboboxvalues[i] === 'Significant_Technology_Component__c') {
                    this.parent.significantTechnologyComponent = result;
                } else if (this.comboboxvalues[i] === 'Continuation_of_Previous_Project__c') {
                    this.parent.continuationPreviousProject = result;
                } else if (this.comboboxvalues[i] === 'Project_Coordination_other_AFP_project__c') {
                    this.parent.projCoordinationAfpProject = result;
                } else if (this.comboboxvalues[i] === 'Project_Funding_Other_Sources__c') {
                    this.parent.projectFundingOtherSource = result;
                } else if (this.comboboxvalues[i] === 'Funding_Commitment_Status_1__c') {
                    this.parent.fundingCommitmentStatusOne = result;
                } else if (this.comboboxvalues[i] === 'Funding_Commitment_Status_2__c') {
                    this.parent.fundingCommitmentStatusTwo = result;
                } else if (this.comboboxvalues[i] === 'Funding_Commitment_Status_3__c') {
                    this.parent.fundingCommitmentStatusThree = result;
                } else if (this.comboboxvalues[i] === 'Funding_Commitment_Status_4__c') {
                    this.parent.fundingCommitmentStatusFour = result;
                } else if (this.comboboxvalues[i] === 'Funding_Commitment_Status_5__c') {
                    this.parent.fundingCommitmentStatusFive = result;
                } else if (this.comboboxvalues[i] === 'Previous_Proposal_Submission_Status__c') {
                    this.parent.previousProposalSubmissionStatus = result;
                } else if (this.comboboxvalues[i] === 'Ability_for_Project_to_Stand_Alone__c') {
                    this.parent.projectStandAlone = result;
                } else if (this.comboboxvalues[i] === 'Relationship_with_other_AFP_Inn_project__c') {
                    this.parent.relationshipOtherAfpProject = result;
                }
                this.parent.loadingSpinner = false;

            }).catch((error) => {
                this.parent.loadingSpinner = false;
                console.log(error);
            })
        }
    }

    imageSelectionHandler(event) {
        if (event.target.name === 'Upload_File') {
            const fileInput = event.target;
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64 = reader.result.split(',')[1];
                    this.parent.imageData = `<img src="data:image/png;base64,${base64}" alt="Uploaded Image"/>`;
                    this.parent.currentScreen = this.__loadDynamicInputs(JSON.parse(JSON.stringify(this.parent.currentScreen)));
                };
                reader.readAsDataURL(file);
            } else {
                this.fields['filecontent'] = null;
            }
        } else if (event.target.name === 'Upload_File_Two') {
            const fileInput = event.target;
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    console.log('readeer onload ');
                    const base64 = reader.result.split(',')[1];
                    this.parent.imageDataTwo = `<img src="data:image/png;base64,${base64}" alt="Uploaded Image"/>`;
                    this.parent.currentScreen = this.__loadDynamicInputs(JSON.parse(JSON.stringify(this.parent.currentScreen)));
                };
                reader.readAsDataURL(file);
            } else {
                this.fields['filecontent'] = null;
            }
        }
    }

    fetchData(event) {
        if (event.target.name === 'Token') {
            console.log('On blur event called');
            let tokendata = event.target.value;
            if (tokendata) {
                let filter = { 'token': tokendata };

                fetchRecordDetails({ filter: filter, context: this.parent.context, origin: window.location.origin + '/GrantmakingPortal' }).then(res => {
                    console.log('Result ', res);
                    this.parent.recordId = res.data[0].Id;
                    this.parent.data = res.data.map(obj => {
                        const newObj = {};
                        for (let key in obj) {
                            // if (key !== 'Project_Lead_Degree_1__c' && key !== 'Project_Lead_Degree_2__c') {
                            newObj[key] = obj[key];
                            // }
                        }
                        return newObj;
                    });
                    // this.parent.data[0].Project_Lead_Degree_1__c = res.data[0].Project_Lead_1_Degree__c ? this.splitDegreeField(res.data[0].Project_Lead_1_Degree__c) : [];
                    // this.parent.data[0].Project_Lead_Degree_2__c = res.data[0].Project_Lead_2_Degree__c ? this.splitDegreeField(res.data[0].Project_Lead_2_Degree__c) : [];
                    this.parent.data[0].Demo_Rich_Text__c = res.attachments.Demo_Rich_Text__c ? `<p><img src="${res.attachments.Demo_Rich_Text__c.attachmentUrl}"/></p><p>${res.attachments.Demo_Rich_Text__c.richText}</p>` : '';
                    this.parent.imageData = res.attachments.Demo_Rich_Text__c ? `<p><img src="${res.attachments.Demo_Rich_Text__c.attachmentUrl}"/></p><p>${res.attachments.Demo_Rich_Text__c.richText}</p>` : '';
                    this.parent.data[0].Demo_Rich_Text_2__c = res.attachments.Demo_Rich_Text_2__c ? `<p><img src="${res.attachments.Demo_Rich_Text_2__c.attachmentUrl}"/></p><p>${res.attachments.Demo_Rich_Text_2__c.richText}</p>` : '';
                    this.parent.imageDataTwo = res.attachments.Demo_Rich_Text_2__c ? `<p><img src="${res.attachments.Demo_Rich_Text_2__c.attachmentUrl}"/></p><p>${res.attachments.Demo_Rich_Text_2__c.richText}</p>` : '';

                    this.parent.currentScreen = this.__loadDynamicInputs(JSON.parse(JSON.stringify(this.parent.currentScreen)));
                }).catch(ex => {
                    console.log('error ', ex);
                });
            }
        }
    }

    __loadScreen() {
        let currIndicatorArr = this.parent.progressIndicatorSteps.filter(indicator => indicator.step === this.parent.currentStep);
        if (currIndicatorArr.length > 0) {
            this.parent.isShowDraft = currIndicatorArr[0].showDraft;
            this.parent.isShowPreview = currIndicatorArr[0].showPreview;
            this.parent.isShowSave = currIndicatorArr[0].showSave;
            this.parent.isNext = currIndicatorArr[0].showNext;
            this.parent.isPrevious = currIndicatorArr[0].showBack;
            this.parent.data = __processInputData(this.parent.data, this.parent.template.querySelectorAll(".table-container>table>tbody>tr>td"));
            this.parent.data = this.__loadTotalValues();
            this.__rerenderScreen();
        }
    }

    __loadTotalValues() {
        let datum = JSON.parse(JSON.stringify(this.parent.data[0]));
        if (datum) {
            let fundingYearOne = datum.Project_Funding_Year_1__c ? parseFloat(datum.Project_Funding_Year_1__c) : 0;
            let fundingYearTwo = datum.Project_Funding_Year_2_if_applicable__c ? parseFloat(datum.Project_Funding_Year_2_if_applicable__c) : 0;
            datum.Total_Project_Funding__c = "" + (fundingYearOne + fundingYearTwo);
        }
        return [datum];
    }

    next() {

        let currScreen = this.parent.screens[++this.parent.currentStep];
        this.parent.currentScreen = this.__loadDynamicInputs(JSON.parse(JSON.stringify(currScreen)));
        this.__loadScreen();
        console.log('this.parent.data ', this.parent.data);
    }

    previous() {
        if (this.parent.currentStep > 0) {
            let currScreen = this.parent.screens[--this.parent.currentStep];
            this.parent.currentScreen = this.__loadDynamicInputs(JSON.parse(JSON.stringify(currScreen)));
            this.__loadScreen();
        }
    }

    stepClick(e) {
        this.parent.data = __processInputData(this.parent.data, this.parent.template.querySelectorAll(".table-container>table>tbody>tr>td"));
        this.parent.currentStep = e.target.value;
        let currIndicatorArr = this.parent.progressIndicatorSteps.filter(indicator => indicator.step === this.parent.currentStep);
        if (currIndicatorArr.length > 0) {
            this.isShowDraft = currIndicatorArr[0].showDraft;
            this.isNext = currIndicatorArr[0].showNext;
            this.isPrevious = currIndicatorArr[0].showBack;
        }
        let currentScreen = this.parent.screens[this.parent.currentStep];
        this.parent.currentScreen = this.__loadDynamicInputs(JSON.parse(JSON.stringify(currentScreen)));
        this.__loadScreen();
    }

    __rerenderScreen() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.__renderInputsData();
            this.parent.template.querySelectorAll('.line-item').forEach(ele => {
                ele.addEventListener('change', () => {
                    let total = 0;
                    this.parent.template.querySelectorAll('.line-item').forEach(ele2 => {
                        if (ele2.value) {
                            total += parseFloat(ele2.value);
                        }
                    });
                    this.parent.template.querySelector('.line-item-total').value = total;
                })
            })
        }, 300);
    }

    __loadDynamicInputs(currentScreenMeta) {
        if (currentScreenMeta) {
            currentScreenMeta.elements.forEach(element => {
                if (element.section.rows) {
                    element.section.rows.forEach(row => {
                        if (row.columns) {
                            row.columns.forEach(col => {
                                if (col.isCombobox) {
                                    if (col.fieldAPIName === 'Project_Lead_1_Specialty__c') {
                                        col.options = this.parent.specialityOneOptions;
                                    } else if (col.fieldAPIName === 'Project_Lead_2_Specialty__c') {
                                        col.options = this.parent.specialityTwoOptions;
                                    } else if (col.fieldAPIName === 'PL1_Name_of_AFP_Governance_Organization__c') {
                                        col.options = this.parent.plOneGo;
                                    } else if (col.fieldAPIName === 'PL2_Name_of_AFP_Governance_Organization__c') {
                                        col.options = this.parent.plTwoGo;
                                    } else if (col.fieldAPIName === 'Project_Duration__c') {
                                        col.options = this.parent.projectDurationOption;
                                    } else if (col.fieldAPIName === 'Project_Keyword_1__c') {
                                        col.options = this.parent.projectKeywordOne;
                                    } else if (col.fieldAPIName === 'Project_Keyword_2__c') {
                                        col.options = this.parent.projectKeywordTwo;
                                    } else if (col.fieldAPIName === 'Project_Keyword_3__c') {
                                        col.options = this.parent.projectKeywordThree;
                                    } else if (col.fieldAPIName === 'Project_Keyword_4__c') {
                                        col.options = this.parent.projectKeywordFour;
                                    } else if (col.fieldAPIName === 'Project_Keyword_5__c') {
                                        col.options = this.parent.projectKeywordFive;
                                    } else if (col.fieldAPIName === 'Possibility_of_Patent_Ownership_title__c') {
                                        col.options = this.parent.patentOwnershipTitle;
                                    } else if (col.fieldAPIName === 'Team_Member_Involvement__c') {
                                        col.options = this.parent.teamMemberInvolvement;
                                    } else if (col.fieldAPIName === 'Significant_Technology_Component__c') {
                                        col.options = this.parent.significantTechnologyComponent;
                                    } else if (col.fieldAPIName === 'Continuation_of_Previous_Project__c') {
                                        col.options = this.parent.continuationPreviousProject;
                                    } else if (col.fieldAPIName === 'Project_Coordination_other_AFP_project__c') {
                                        col.options = this.parent.projCoordinationAfpProject;
                                    } else if (col.fieldAPIName === 'Project_Funding_Other_Sources__c') {
                                        col.options = this.parent.projectFundingOtherSource;
                                    } else if (col.fieldAPIName === 'Funding_Commitment_Status_1__c') {
                                        col.options = this.parent.fundingCommitmentStatusOne;
                                    } else if (col.fieldAPIName === 'Funding_Commitment_Status_2__c') {
                                        col.options = this.parent.fundingCommitmentStatusTwo;
                                    } else if (col.fieldAPIName === 'Funding_Commitment_Status_3__c') {
                                        col.options = this.parent.fundingCommitmentStatusThree;
                                    } else if (col.fieldAPIName === 'Funding_Commitment_Status_4__c') {
                                        col.options = this.parent.fundingCommitmentStatusFour;
                                    } else if (col.fieldAPIName === 'Funding_Commitment_Status_5__c') {
                                        col.options = this.parent.fundingCommitmentStatusFive;
                                    } else if (col.fieldAPIName === 'Previous_Proposal_Submission_Status__c') {
                                        col.options = this.parent.previousProposalSubmissionStatus;
                                    } else if (col.fieldAPIName === 'Ability_for_Project_to_Stand_Alone__c') {
                                        col.options = this.parent.projectStandAlone;
                                    } else if (col.fieldAPIName === 'Relationship_with_other_AFP_Inn_project__c') {
                                        col.options = this.parent.relationshipOtherAfpProject;
                                    }
                                }
                                else if (col.isCurrency) {

                                }
                                // else if (col.isDualList) {
                                //     if (col.fieldAPIName === 'Project_Lead_Degree_1__c' || col.fieldAPIName === 'Project_Lead_Degree_2__c') {
                                //         col.options = this.parent.qualificationOption;
                                //     }
                                // }
                                else if (col.fieldAPIName === 'Demo_Rich_Text__c') {
                                    col.value = this.parent.imageData;
                                } else if (col.fieldAPIName === 'Demo_Rich_Text_2__c') {
                                    col.value = this.parent.imageDataTwo;
                                }
                            })
                        }

                    })
                }
            });
        }
        return currentScreenMeta;
    }

    __renderInputsData() {
        let datum = this.parent.data && this.parent.data.length > 0 ? JSON.parse(JSON.stringify(this.parent.data[0])) : '';

        if (datum) {
            let columns = this.parent.template.querySelectorAll(".table-container>table>tbody>tr>td");
            columns.forEach(col => {
                col.querySelectorAll('.user-input').forEach(input => {
                    for (let key in datum) {
                        if (key === input.name) {
                            input.value = datum[key];
                        }
                    }
                });
            });
        }
    }

    saveAsDraft() {
        this.parent.data = __processInputData(this.parent.data, this.parent.template.querySelectorAll(".table-container>table>tbody>tr>td"));
        let datum = JSON.parse(JSON.stringify(this.parent.data[0]));
        console.log('datun=>', datum);
        // datum.Status__c = 'Draft';
        datum = __stringifyData(datum);
        //this.parent.loadingSpinner = true;
        upsertData({ data: datum, recordId: this.parent.recordId, context: this.parent.context }).then(res => {
            console.log('res=>', res);
            this.parent.recordId = res.id;
            //this.parent.loadingSpinner = false;
            __successMessage(this.parent.context + ' Drafted!', 'A Draft of ' + this.parent.context + ' Saved Successfully!', this.parent);
        }).catch(ex => {
            console.log('ex', ex);
            // this.parent.loadingSpinner = false;
            // if (ex.body.pageErrors.length > 0) {
            //     this.errorMessage = ex.body.pageErrors[0].message;
            //     __errorMessage(this.parent.context + ' Drafted ! ', this.errorMessage + ' Draft Creation Failed !', this.parent);
            // } else if (ex.body.fieldErrors !== 'null') {
            //     const fieldErrors = ex.body.fieldErrors;
            //     for (const fieldName in fieldErrors) {
            //         if (fieldErrors[fieldName].length > 0) {
            //             const errorMessage = fieldErrors[fieldName][0].message;
            //             __errorMessage(this.parent.context + ' Drafted ! ', errorMessage + ' Draft Creation Failed !', this.parent);
            //         }
            //     }
            // } else {
            __errorMessage(this.parent.context + ' Drafted!', this.parent.context + ' Draft Creation Failed!', this.parent);

            //  }
        });
    }
}