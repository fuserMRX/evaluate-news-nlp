/**
 * @jest-environment jsdom
 */
// Rule the DOM inside JEST!!!

import { checkForName } from '../src/client/js/nameChecker';

describe("Name Checker", () => {
    test("it should match the name from the array", () => {
        const input = 'Picard';

        const output = true;

        expect(checkForName(input)).toEqual(output);
    });

    test("it should not match the name from the array", () => {
        const input = 'KHLULIUGIO';

        const output = false;

        expect(checkForName(input)).toEqual(output);
    });
});