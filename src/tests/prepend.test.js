import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../modules.js";

describe("Test prepend", () => {
  const list = LinkedList();

  afterEach(() => {
    list.reset();
  });

  test("test on empty list", () => {
    const expected = { value: "prepend", next: null };
    list.prepend("prepend");
    expect(list.getList()).toEqual(expected);
  });

  test("test on single-node list", () => {
    const expected = {
      value: "prepend",
      next: {
        value: 1,
        next: null,
      },
    };

    list.append(1);
    list.prepend("prepend");

    expect(list.getList()).toEqual(expected);
  });

  test("test on multi-node list", () => {
    const expected = {
      value: "prepend",
      next: {
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
      },
    };

    list.initSample();
    list.prepend("prepend");
    expect(list.getList()).toEqual(expected);
  });
});
