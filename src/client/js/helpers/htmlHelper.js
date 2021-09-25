const htmlHelper = (paramObj) => {
    let finalString = '';
    if (Object.keys(paramObj).length) {
        finalString += '<ul>';
        for (const key of Object.keys(paramObj)) {
            console.log(key, paramObj[key]);
            finalString += `<li><b>${key}</b> - ${paramObj[key]}</li>`;
        }
        finalString += `</ul>`;
        return finalString;
    }
    return finalString;
};

export {
    htmlHelper
};