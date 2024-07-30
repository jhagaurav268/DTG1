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


export default class P1ProjectProposalService {
    screens = [
        SCREEN_ZERO,
        SCREEN_ONE,
        SCREEN_TWO,
        SCREEN_THREE
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
            label: 'P2 FORM',
            step: 3,
            name: 'SCREEN_THREE',
            hidden: false,
            showNext: false,
            showBack: false,
            showDraft: true,
            showPreview: true,
            showSave: false
        },
    ];
    parent;
    comboboxvalues = ['Project_Lead_1_Specialty__c', 'Project_Lead_2_Specialty__c',
        'PL1_Name_of_AFP_Governance_Organization__c', 'PL2_Name_of_AFP_Governance_Organization__c',
        'Project_Duration__c', 'Project_Keyword_1__c', 'Project_Keyword_2__c', 'Project_Keyword_3__c',
        'Project_Keyword_4__c', 'Project_Keyword_5__c'];

    constructor(parent) {
        protectThis(this);
        this.parent = parent;
    }

    splitDegreeField(field) {
        return field.includes(';') ? field.split(';') : [field];
    }

    init() {
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
                }
            }).catch((error) => {
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
                fetchRecordDetails({ filter: filter, context: this.parent.context }).then(res => {

                    this.parent.data = res.data.map(obj => {
                        const newObj = {};
                        for (let key in obj) {
                            if (key !== 'Project_Lead_1_Degree__c' && key !== 'Project_Lead_2_Degree__c') {
                                newObj[key] = obj[key];
                            }
                        }
                        return newObj;
                    });
                    this.parent.data[0].Project_Lead_1_Degree__c = res.data[0].Project_Lead_1_Degree__c ? this.splitDegreeField(res.data[0].Project_Lead_1_Degree__c) : [];
                    this.parent.data[0].Project_Lead_2_Degree__c = res.data[0].Project_Lead_2_Degree__c ? this.splitDegreeField(res.data[0].Project_Lead_2_Degree__c) : [];
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
            this.__rerenderScreen();
        }
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
            // this.parent.template.querySelectorAll('.line-item').forEach(ele => {
            //     ele.addEventListener('change', () => {
            //         let total = 0;
            //         this.parent.template.querySelectorAll('.line-item').forEach(ele2 => {
            //             if (ele2.value) {
            //                 total += parseFloat(ele2.value);
            //             }
            //         });
            //         this.parent.template.querySelector('.line-item-total').value = total;
            //     })
            // })
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
                                    }
                                }
                                else if (col.isCurrency) {

                                }
                                else if (col.isDualList) {
                                    if (col.fieldAPIName === 'Project_Lead_1_Degree__c' || col.fieldAPIName === 'Project_Lead_2_Degree__c') {
                                        col.options = this.parent.qualificationOption;
                                    }
                                } else if (col.fieldAPIName === 'Demo_Rich_Text__c') {
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