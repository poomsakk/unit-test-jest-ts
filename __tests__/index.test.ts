import { merge } from "../src/index";

describe("merge module", ()=>{
    test("merge function works correctly", () => {
        expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(merge([1, 3, 5], [])).toEqual([1, 3, 5]);
        expect(merge([], [2, 4, 6])).toEqual([2, 4, 6]);
        expect(merge([1, 2, 3, 5], [1, 2, 3, 5])).toEqual([1, 1, 2, 2, 3, 3, 5, 5]);
        expect(merge([3, 4, 5], [2, 4])).toEqual([2, 3, 4, 4, 5]);
        expect(merge([3, 3, 3], [3, 5, 5])).toEqual([3, 3, 3, 3, 5, 5]);
        expect(merge([3], [])).toEqual([3]);
        expect(merge([], [8])).toEqual([8]);
    });
    test("merge two empty array", () => {
        expect(merge([], [])).toEqual([]);
    });
});
