import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../modules.js";

describe("Test tail", () => {
  const list = LinkedList();
  afterEach(() => {
    list.reset();
  });

  test("test on empty list", () => {
    const expected = undefined;
    expect(list.tail()).toEqual(expected);
  });

  test("test on single-node list", () => {
    const expected = 1;
    list.append(1);
    expect(list.tail()).toEqual(expected);
  });

  test("test on multi-node list", () => {
    const expected = 4;
    list.initSample();
    expect(list.tail()).toEqual(expected);
  });
});
