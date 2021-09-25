import axios from 'axios';
import { htmlHelper } from './htmlHelper';

const ajaxHelper = async (params = {}) => {
    let responseInfo = null;
    const response = await (axios(params))
        .catch((err) => {
            console.error(err);
        });
    if (response instanceof Object) {
        responseInfo = await response && response.data;
        return responseInfo;
    }
    responseInfo = await response;
    return responseInfo;
};


const getApiKey = async (keyURL) => {
    const apiKeyInfo = await ajaxHelper(keyURL);
    const { application_key } = apiKeyInfo || {};
    console.log(application_key);
    return application_key;
};

const getMeaningCloudInfo = async (application_key, formTextValue, meaningCloudAPI) => {
    const formdata = new FormData();
    let meaningCloudInfoOutput = '';
    formdata.append('key', application_key);
    formdata.append('url', formTextValue);
    formdata.append('lang', 'en');

    // proper options for axios request
    const requestOptions = {
        method: 'POST',
        url: meaningCloudAPI,
        data: formdata,
        redirect: 'follow'
    };

    const meaningCloudInfo = await ajaxHelper(requestOptions);
    console.log(meaningCloudInfo);
    if (meaningCloudInfo.status.msg === 'OK') {
        const { agreement, confidence, irony, model, score_tag, subjectivity } = meaningCloudInfo || {};
        meaningCloudInfoOutput = htmlHelper({
            agreement,
            confidence,
            irony,
            model,
            score_tag,
            subjectivity,
        });
    } else {
        // url example to test => https://blog.risingstack.com/10-best-practices-for-writing-node-js-rest-apis/
        const { msg, code } = meaningCloudInfo.status;
        meaningCloudInfoOutput = `${msg} - MeaningCloud Error Code = <strong>${code}</strong>`;
    }

    return meaningCloudInfoOutput;
};

export {
    ajaxHelper,
    getApiKey,
    getMeaningCloudInfo,
};
