const serviceWorker = (function () {
    document.addEventListener('DOMContentLoaded', function () {
        if ('serviceWorker' in navigator) {
            // eslint-disable-next-line no-undef
            if (PRODUCTION) {
                // Use the window load event to keep the page load performant
                window.addEventListener('load', () => {
                    navigator.serviceWorker.register('/service-worker.js');
                });
            }
        }
    });
}());

export { serviceWorker };




