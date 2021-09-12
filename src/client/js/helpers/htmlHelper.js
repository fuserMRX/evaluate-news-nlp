const htmlHelper = (paramObj) => {
    let finalString = '<ul>';
    for (const key of Object.keys(paramObj)) {
        console.log(key, paramObj[key]);
        finalString += `<li>${key} - ${paramObj[key]}</li>`;
    }
    finalString += `</ul>`;
    return finalString;
};

export {
    htmlHelper
};