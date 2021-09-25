/**
 * @jest-environment jsdom
 */
// Rule the DOM inside JEST!!!

import { serviceWorker } from '../src/client/js/serviceWorker';

describe('Testing serviceWorker functionality', () => {
    test('serviceWorker function is initialized', () => {
        expect(serviceWorker).toBeDefined();
    })
});