const ajaxHelper = async (url = '', options = {}) => {
    // eslint-disable-next-line no-unused-vars
    const response = await(fetch(url, options))
        .catch((err) => { console.error(err); return err;});
    const responseInfo = await response.json();
    return responseInfo;
};


export {
    ajaxHelper
};
