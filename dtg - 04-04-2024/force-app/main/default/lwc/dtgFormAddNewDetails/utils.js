import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const __validateInputs = (columns) => {
    let isValid = true;
    columns.forEach(col => {
        col.querySelectorAll('.user-required-input').forEach(input => {
            if (input.name && !input.value) {
                isValid = false;
            }
        });
    });
    return isValid;
};

const __validateChildInputs = (columns) => {
    let isValid = true;
    columns.forEach(col => {
        col.querySelectorAll('.user-table-input').forEach(input => {
            if (input.type == 'checkbox') {
                if (input.name && !input.checked) {
                    isValid = false;
                }
            } else {
                if (input.name && !input.value) {
                    isValid = false;
                }
            }

        });
    });
    return isValid;
};

const __successMessage = (title, message, that) => {
    __showToast(title, message, 'success', 'dismissable', that);
}
const __errorMessage = (title, message, that) => {
    __showToast(title, message, 'error', 'dismissable', that);
}

const __showToast = (title, message, variant, mode, that) => {
    const event = new ShowToastEvent({
        title: title,
        message: message,
        variant: variant,
        mode: mode
    });
    that.dispatchEvent(event);
}

const __stringifyData = (datum) => {
    for (let key in datum) {

        if (datum[key] && !Array.isArray(datum[key])) {
            datum[key] = "" + datum[key];
        } else if (datum[key] && Array.isArray(datum[key])) {
            const tempData = []
            datum[key].forEach(arr => {
                const keyValuePairs = {};
                for (const item of arr) {
                    const { fieldAPIName, value } = item;
                    if (value != null && value != undefined && value != "") {
                        keyValuePairs[fieldAPIName] = value;
                    }

                }
                let ab = JSON.stringify(keyValuePairs);
                if (ab != '{}') {
                    tempData.push(keyValuePairs);
                }

            });
            datum[key] = tempData;

        }
    }
    return datum;
}


const __processInputData = (data, columns) => {
    let datum = {};
    if (data && data.length > 0) {
        datum = JSON.parse(JSON.stringify(data[0]));
    }
    columns.forEach(col => {
        col.querySelectorAll('.user-input').forEach(input => {
            if (input.name && input.name !== '') {
                if (Array.isArray(input.value)) {
                    // if (input.name === 'Project_Lead_Degree_1__c') {
                    //     datum['Project_Lead_1_Degree__c'] = input.value.join(';');
                    //     datum[input.name] = input.value;
                    // }else if (input.name === 'Project_Lead_Degree_2__c') {
                    //     datum['Project_Lead_2_Degree__c'] = input.value.join(';');
                    //     datum[input.name] = input.value;
                    // }
                } else {
                    datum[input.name] = input.value;
                }
            }
        });
        col.querySelectorAll('.richText').forEach(input => {
            datum['Demo_Rich_Text__c'] = input.value;
        });
        col.querySelectorAll('.richTextTwo').forEach(input => {
            datum['Demo_Rich_Text_2__c'] = input.value;
        });
    });
    return [datum];
}


export { __validateInputs, __successMessage, __errorMessage, __showToast, __stringifyData, __processInputData, __validateChildInputs };