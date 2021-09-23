/**
 * @jest-environment jsdom
 */

import axios from 'axios';
import { ajaxHelper } from '../src/client/js/helpers/api';
import { keyURL } from '../src/client/js/helpers/constants';

jest.mock("axios");

describe("fetchKeyInfo from .env", () => {
    describe("when API call is successful", () => {
        test("should return api key for MeaningCloud", async () => {
            expect.assertions(2);
            // given
            const fakeMockKey = 'a8fe79cfe4b6d5799'
            axios.mockResolvedValueOnce(fakeMockKey);

            // when
            const result = await ajaxHelper(keyURL);

            // then
            expect(axios).toHaveBeenCalledWith(keyURL);
            expect(result).toBeDefined();
        });
    });

    describe("when API call fails", () => {
        test("should return undefined", async () => {
            expect.assertions(2);
            // given
            const message = "Network Error";
            axios.mockRejectedValueOnce(new Error(message));

            // when
            const result = await ajaxHelper(keyURL);

            // then
            expect(axios).toHaveBeenCalledWith(keyURL);
            expect(result).toBeUndefined();
        });
    });

    describe("when no params are passed to API call", () => {
        test("should return undefined", async () => {
            expect.assertions(2);
            // given
            const message = "Wrong Request Params";
            axios.mockRejectedValueOnce(new Error(message));

            // when
            const result = await ajaxHelper();

            // then
            expect(axios).toHaveBeenCalledWith({});
            expect(result).toBeUndefined();
        });
    });
});