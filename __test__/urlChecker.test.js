/**
 * @jest-environment jsdom
 */
// Rule the DOM inside JEST!!!

import { checkForUrl } from '../src/client/js/urlChecker';

describe("Url Checker", () => {
    test("it should match the URL from the input", () => {
        const input = 'https://www.webdesignerdepot.com/2016/10/20-essential-css-tricks-every-designer-should-know/';

        const output = true;

        expect(checkForUrl(input)).toEqual(output);
    });

    test("it should not match the URL", () => {
        const input = 'sdfsdfsdf';

        const output = false;

        expect(checkForUrl(input)).toEqual(output);
    });
});