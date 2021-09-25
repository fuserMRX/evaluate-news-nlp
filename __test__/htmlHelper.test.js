/**
 * @jest-environment jsdom
 */

import { htmlHelper } from '../src/client/js/helpers/htmlHelper';

describe("htmlHelper functionality", () => {
    test("it should output innerHTML string from a data object ", () => {
        const input = {
            agreement: 'DISAGREEMENT',
            confidence: 91,
        }

        const output = '<ul><li><b>agreement</b> - DISAGREEMENT</li><li><b>confidence</b> - 91</li></ul>';

        expect(htmlHelper(input)).toEqual(output);
    });

    test("it should return empty string", () => {
        const input = {};

        const output = '';

        expect(htmlHelper(input)).toEqual(output);
    });
});