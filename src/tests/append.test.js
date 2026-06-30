import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../modules.js";

describe("Test append", () => {
  const list = LinkedList();

  afterEach(() => {
    list.reset();
  });

  test("test on empty list", () => {
    const expected = Node("append");
    list.append("append");
    expect(list.getList()).toEqual(expected);
  });

  test("test on single-node list", () => {
    const expected = {
      value: 1,
      next: {
        value: "append",
        next: null,
      },
    };

    list.append(1);
    list.append("append");
    expect(list.getList()).toEqual(expected);
  });

  test("test on multi-node list", () => {
    const expected = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: "append",
              next: null,
            },
          },
        },
      },
    };

    list.initSample();
    list.append("append");
    expect(list.getList()).toEqual(expected);
  });
});
