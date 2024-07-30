import { LightningElement,track } from 'lwc';

export default class DtgFormAddNewDetailsP2P4ProposalBudget extends LightningElement {
    @track screenContext;
    connectedCallback(){
   
    this.screenContext = "P2/P4 Proposal Budget";
    }
}