import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../modules.js";

describe("Test helper methods", () => {
  test("test getList", () => {
    const list = LinkedList();
    expect(list.getList()).toEqual({});
  });

  test("test initSample", () => {
    const expected = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    };

    const list = LinkedList();
    list.initSample();
    expect(list.getList()).toEqual(expected);
  });

  test("test reset", () => {
    const list = LinkedList();
    list.initSample();
    list.reset();
    expect(list.getList()).toEqual({});
  });
});
