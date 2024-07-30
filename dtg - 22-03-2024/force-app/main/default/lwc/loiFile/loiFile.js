import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getRelatedFiles from '@salesforce/apex/DtgManageDetailsController.getRelatedFiles';

export default class LoiFile extends NavigationMixin(LightningElement) {
    @api recordId;
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
    }
}