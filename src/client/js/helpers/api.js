import axios from 'axios';
import { htmlHelper } from './htmlHelper';

const ajaxHelper = async (params = {}) => {
    let responseInfo = null;
    const response = await(axios(params))
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
    formdata.append('key', application_key);
    formdata.append('txt', formTextValue);
    formdata.append('lang', 'en');

    // proper options for axios request
    const requestOptions = {
        method: 'POST',
        url: meaningCloudAPI,
        data: formdata,
        redirect: 'follow'
    };

    const meaningCloudInfo = await ajaxHelper(requestOptions);

    const { agreement, confidence, irony, model, score_tag, subjectivity } = meaningCloudInfo || {};
    const meaningCloudInfoOutput = htmlHelper({
        agreement,
        confidence,
        irony,
        model,
        score_tag,
        subjectivity,
    });
    console.log(meaningCloudInfo);
    return meaningCloudInfoOutput;
};

export {
    ajaxHelper,
    getApiKey,
    getMeaningCloudInfo,
};
