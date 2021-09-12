import { ajaxHelper } from './helpers/api';
import { htmlHelper } from './helpers/htmlHelper';
import { meaningCloudAPI, keyURL } from './helpers/constants';
import Spin from './helpers/spinner';

const spinner = new Spin();

const handleSubmit = async (event) => {
    event.preventDefault();

    spinner.target = document.body;
    spinner.start();

    const results = document.querySelector('#results');
    const nlpForm = document.querySelector('.nlp-form');
    const errorSelector = document.querySelector('.nlp-form-error');
    const formTextValue = nlpForm.querySelector('#npltext').value;

    // Reset an input field for the results
    results.innerHTML = '';

    errorSelector.classList.toggle('show', !formTextValue);

    if (formTextValue) {
        // Reset form after submit
        nlpForm.reset();

        // eslint-disable-next-line no-undef
        Client.checkForName(formTextValue);

        console.log('::: Form Submitted :::');
        // Get API key
        const apiKeyInfo = await ajaxHelper(keyURL);
        const { application_key } = apiKeyInfo || {};
        console.log(application_key);

        // MAKE API request if our key is present
        if (application_key) {
            const formdata = new FormData();
            formdata.append('key', application_key);
            formdata.append('txt', formTextValue);
            formdata.append('lang', 'en');

            const requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            const meaningCloudInfo = await ajaxHelper(meaningCloudAPI, requestOptions);

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
            results.innerHTML = meaningCloudInfoOutput;
        }
    }
    spinner.stop();
};

export { handleSubmit };
