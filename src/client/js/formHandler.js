import { getApiKey, getMeaningCloudInfo } from './helpers/api';
import { meaningCloudAPI, keyURL } from './helpers/constants';
import Spin from './helpers/spinner';

const spinner = new Spin();

const nlpForm = document.querySelector('.nlp-form');

const handleSubmit = async (event) => {
    event.preventDefault();

    spinner.target = document.body;
    spinner.start();

    const results = document.querySelector('#results');
    const errorSelector = document.querySelector('.nlp-form-error');
    const errorUrlSelector = document.querySelector('.nlp-form-url-error');
    const formTextValue = nlpForm.querySelector('#npltext').value;
    let isUrlValid = false;

    // Reset an input field for the results
    results.innerHTML = '';

    errorSelector && errorSelector.classList.toggle('show', !formTextValue);
    errorUrlSelector.classList.contains('show') && errorUrlSelector.classList.remove('show');

    if (formTextValue) {
        // Reset form after submit
        nlpForm.reset();

        // eslint-disable-next-line no-undef
        isUrlValid = Client.checkForUrl(formTextValue);
        errorUrlSelector && errorUrlSelector.classList.toggle('show', !isUrlValid);
        if (!isUrlValid) {
            spinner.stop();
            return;
        }

        // Get API key
        const application_key = await getApiKey(keyURL);

        // DO API request if our key is present
        if (application_key) {
            const MeaningCloudInfo = await getMeaningCloudInfo(application_key, formTextValue, meaningCloudAPI);
            results.innerHTML = MeaningCloudInfo;
        }
    }
    spinner.stop();
};

document.addEventListener('DOMContentLoaded', function () {
    nlpForm.addEventListener('submit', handleSubmit);
});

export { handleSubmit };
