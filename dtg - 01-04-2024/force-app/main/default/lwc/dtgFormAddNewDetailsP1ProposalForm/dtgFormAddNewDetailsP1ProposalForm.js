import { LightningElement,track } from 'lwc';

export default class DtgFormAddNewDetailsP1ProposalForm extends LightningElement {

    recordIdFromUrl;
    @track screenContext;
    connectedCallback(){
    // if (window.location.href) {
    //     try {
    //         let url = new URL(window.location.href);
    //         var id = url.searchParams.get('Id');
    //         if (id) {
    //             this.recordIdFromUrl = id;
    //             console.log('CurrentRecord ID==', this.recordIdFromUrl);

    //         }
    //     } catch (e) {
    //         if (console) {
    //             console.log(JSON.stringify(e));
    //         }
    //     }
    // }
    this.screenContext = "P1 Project Proposal";
    }
}