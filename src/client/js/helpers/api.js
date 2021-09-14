import axios from 'axios';
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

export {
    ajaxHelper
};
