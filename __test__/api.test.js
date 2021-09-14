import axios from "axios";
import { ajaxHelper } from "../src/client/js/helpers/api";
import { keyURL } from '../src/client/js/helpers/constants';

jest.mock("axios");

describe("fetchKeyInfo from .env", () => {
    describe("when API call is successful", () => {
        it("should return api key for MeaningCloud", async () => {
            // given
            const mockKey = 'a8fe79cfe4b6d5799'
            axios.mockResolvedValueOnce(mockKey);

            // when
            const result = await ajaxHelper(keyURL);

            // then
            expect(axios).toHaveBeenCalledWith(keyURL);
            expect(result).toBeDefined();
        });
    });

    describe("when API call fails", () => {
        it("should return undefined", async () => {
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
        it("should return undefined", async () => {
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