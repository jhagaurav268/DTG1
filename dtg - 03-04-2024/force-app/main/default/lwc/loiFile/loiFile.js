import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getRelatedFiles from '@salesforce/apex/DtgManageDetailsController.getRelatedFiles';

export default class LoiFile extends NavigationMixin(LightningElement) {
    recordId;
    @track files = [];

    connectedCallback() {
        let originUrl = window.location.href;
        console.log('URL', originUrl);

        //    const pattern = /\/([a-zA-Z0-9]{15})\//;

        //    const match = originUrl.match(pattern);
        //    console.log('Match ', match);
        const url = new URL(originUrl);
        console.log('url ', url);

        const path = url.pathname;
        console.log('path ', path);


        const segments = path.split('/');
        console.log('segments ', segments);

        const id = segments[segments.length - 2];
        console.log('Id ', id);
        // this.recordId = match ? match[1] : '';
        getRelatedFiles({ loiId: id })
            .then(result => {
                if (result && result.length > 0) {
                    this.files = result;
                }
            })
            .catch(error => {
                console.error('Error fetching related files:', error);
            });
        console.log('RecordId', this.recordId);
    }

    handleFileClick(event) {
        const fileId = event.currentTarget.dataset.fileId;
        console.log('fileId ', fileId);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: fileId,
                actionName: 'view'
            }
        });
    }

    /* @api recordId;
     @track files = [];
 
     connectedCallback() {
         getRelatedFiles({ loiId: this.recordId })
             .then(result => {
                 if (result && result.length > 0) {
                     this.files = result;
                 }
             })
             .catch(error => {
                 console.error('Error fetching related files:', error);
             });
     }
 
     handleFileClick(event) {
         const fileId = event.currentTarget.dataset.fileId;
         this[NavigationMixin.Navigate]({
             type: 'standard__recordPage',
             attributes: {
                 recordId: fileId,
                 actionName: 'view'
             }
         });
     }*/
}