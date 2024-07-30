import { LightningElement, api, track } from 'lwc';
import P1ProjectProposalService from "./p1ProjectProposalService";
import P2p4ProposalBudgetService from "./p2p4ProposalBudgetService";

export default class DtgFormAddNewDetails extends LightningElement {
    screens = [];
    @track currentScreen = {};
    @track currentStep = -1;
    @api context;
    data = [];
    isShowDraft = true;
    progressIndicatorSteps = [];
    timeout;
    isNext = false;
    isPrevious = false;
    @track recordId;
    loadingSpinner = false;
    // @track qualificationOption;
    // @track specialityOneOptions;
    // @track specialityTwoOptions;
    @track plOneGo;
    @track plTwoGo;
    @track projectDurationOption;
    @track projectKeywordOne;
    @track projectKeywordTwo;
    @track projectKeywordThree;
    @track projectKeywordFour;
    @track projectKeywordFive;
    @track patentOwnershipTitle;
    @track teamMemberInvolvement;
    @track significantTechnologyComponent;
    @track continuationPreviousProject;
    @track projCoordinationAfpProject;
    @track projectFundingOtherSource;
    @track fundingCommitmentStatusOne;
    @track fundingCommitmentStatusTwo;
    @track fundingCommitmentStatusThree;
    @track fundingCommitmentStatusFour;
    @track fundingCommitmentStatusFive;
    @track imageData;
    @track imageDataTwo;
    @track previousProposalSubmissionStatus;
    @track projectStandAlone;
    @track relationshipOtherAfpProject;

    connectedCallback() {
        try {
            switch (this.context) {
                case 'P1 Project Proposal':
                    let p1ProjectProposalService = new P1ProjectProposalService(this);
                    p1ProjectProposalService.init(this);
                    this.buttonClr = "p1-project-proposal";
                    console.log('Connected Callback Called');
                    break;
                case 'P2/P4 Proposal Budget':
                    let p2p4ProposalBudgetService = new P2p4ProposalBudgetService(this);
                    p2p4ProposalBudgetService.init(this);
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
            let shouldExecuteImmediately = true;

            if (this.currentStep === 0) {
                shouldExecuteImmediately = false;
                setTimeout(() => {
                    this.executeNext(topDiv, e);
                }, 2000);
            }

            if (shouldExecuteImmediately) {
                this.executeNext(topDiv, e);
            }
        } catch (error) {
            console.log(error);
            alert('error');
        }
    }

    executeNext(topDiv, e) {
        switch (this.context) {
            case 'P1 Project Proposal':
                topDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                if (!this.p1ProjectProposalService) {
                    this.p1ProjectProposalService = new P1ProjectProposalService(this);
                }
                this.p1ProjectProposalService.next(e);
                break;
            case 'P2/P4 Proposal Budget':
                topDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                if (!this.p2p4ProposalBudgetService) {
                    this.p2p4ProposalBudgetService = new P2p4ProposalBudgetService(this);
                }
                this.p2p4ProposalBudgetService.next(e);
                break;
            default:
                break;
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
                case 'P2/P4 Proposal Budget':
                    topDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    let p2p4ProposalBudgetService = new P2p4ProposalBudgetService(this);
                    p2p4ProposalBudgetService.previous(e);
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
                case 'P2/P4 Proposal Budget':
                    let p2p4ProposalBudgetService = new P2p4ProposalBudgetService(this);
                    p2p4ProposalBudgetService.stepClick(e);
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

    onTokenChange(event) {
        try {
            switch (this.context) {
                case 'P1 Project Proposal':
                    let p1ProjectProposalService = new P1ProjectProposalService(this);
                    p1ProjectProposalService.fetchData(event);
                    break;
                case 'P2/P4 Proposal Budget':
                    let p2p4ProposalBudgetService = new P2p4ProposalBudgetService(this);
                    p2p4ProposalBudgetService.fetchData(event);
                    break;
                default:
                    break;
            }
        } catch (error) {
            alert('error');
        }
    }

    saveDraftHandler(e) {
        try {
            switch (this.context) {
                case 'P1 Project Proposal':
                    let p1ProjectProposalService = new P1ProjectProposalService(this);
                    p1ProjectProposalService.saveAsDraft(e);
                    break;
                case 'P2/P4 Proposal Budget':
                    let p2p4ProposalBudgetService = new P2p4ProposalBudgetService(this);
                    p2p4ProposalBudgetService.saveAsDraft(e);
                    break;
                default:
                    break;
            }
        } catch (error) {
            alert('error');
        }
    }
}