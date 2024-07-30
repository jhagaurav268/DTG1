import { LightningElement, api, track } from 'lwc';
import P1ProjectProposalService from "./p1ProjectProposalService";

export default class DtgFormAddNewDetails extends LightningElement {
    screens = [];
    @track currentScreen = {};
    @track currentStep = -1;
    @api context = 'P1 Project Proposal';
    data = [];
    isShowDraft = true;
    progressIndicatorSteps = [];
    timeout;
    isNext = false;
    isPrevious = false;
    @track recordId;
    @track qualificationOption;
    @track specialityOneOptions;
    @track specialityTwoOptions;
    @track plOneGo;
    @track plTwoGo;
    @track projectDurationOption;
    @track projectKeywordOne;
    @track projectKeywordTwo;
    @track projectKeywordThree;
    @track projectKeywordFour;
    @track projectKeywordFive;
    @track imageData;

    connectedCallback() {
        try {
            switch (this.context) {
                case 'P1 Project Proposal':
                    let p1ProjectProposalService = new P1ProjectProposalService(this);
                    p1ProjectProposalService.init(this);
                    this.buttonClr = "p1-project-proposal";
                    console.log('Connected Callback Called');
                    break;
            }
        } catch (error) {
            console.log(error);
            alert('error');
        }
    }

    nextButtonHandler(e) {
        try {
            const topDiv = this.template.querySelector('[data-id="dataDiv"]');
            switch (this.context) {
                case 'P1 Project Proposal':
                    topDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    let p1ProjectProposalService = new P1ProjectProposalService(this);
                    p1ProjectProposalService.next(e);
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log(error);
            alert('error');
        }
    }

    backButtonHandler(e) {
        try {
            const topDiv = this.template.querySelector('[data-id="dataDiv"]');
            switch (this.context) {
                case 'P1 Project Proposal':
                    topDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    let p1ProjectProposalService = new P1ProjectProposalService(this);
                    p1ProjectProposalService.previous(e);
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log(error);
            alert('error');
        }
    }

    handleStepClick(e) {
        e.preventDefault();
        try {
            switch (this.context) {
                case 'P1 Project Proposal':
                    let p1ProjectProposalService = new P1ProjectProposalService(this);
                    p1ProjectProposalService.stepClick(e);
                    break;

                default:
                    break;
            }
        } catch (error) {
            console.log(error);
            alert('error');
        }
    }


    onComboboxChange(e) {
        try {
            switch (this.context) {
                case 'P1 Project Proposal':
                    let p1ProjectProposalService = new P1ProjectProposalService(this);
                    if (e.target.dataset.name === '') {
                        //p1ProjectProposalService.accountSelectionHandler(e);
                    } else if (e.target.name === '') {

                    } else if (e.target.name === '') {

                    }
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log(error);
            alert('error');
        }
    }

    onInputChange(event) {
        let p1ProjectProposalService = new P1ProjectProposalService(this);
        p1ProjectProposalService.imageSelectionHandler(event);
    }


    saveDraftHandler(e) {
        try {
            switch (this.context) {
                case 'P1 Project Proposal':
                    let p1ProjectProposalService = new P1ProjectProposalService(this);
                    p1ProjectProposalService.saveAsDraft(e);
                    break;

                default:
                    break;
            }
        } catch (error) {
            alert('error');
        }
    }
}