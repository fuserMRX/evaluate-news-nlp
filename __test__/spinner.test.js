/**
 * @jest-environment jsdom
 */
// Rule the DOM inside JEST!!!

import Spin from '../src/client/js/helpers/spinner';

describe('Testing Spin functionality', () => {
    test('spin is defined', () => {
        expect(Spin).toBeDefined();
    })
});