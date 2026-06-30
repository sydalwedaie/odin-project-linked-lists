import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../modules.js";

describe("Test pop", () => {
  const list = LinkedList();
  afterEach(() => {
    list.reset();
  });

  test("test on empty list", () => {
    const expectedValue = undefined;
    const expectedList = {};
    expect(list.pop()).toEqual(expectedValue);
    expect(list.getList()).toEqual(expectedList);
  });

  test("test on single-node list", () => {
    const expectedValue = 1;
    const expectedList = {};
    list.append(1);
    expect(list.pop()).toEqual(expectedValue);
    expect(list.getList()).toEqual(expectedList);
  });

  test("test on multi-node list", () => {
    const expectedValue = 1;
    const expectedList = {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    };
    list.initSample();
    expect(list.pop()).toEqual(expectedValue);
    expect(list.getList()).toEqual(expectedList);
  });
});
