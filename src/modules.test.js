import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "./modules.js";

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

describe("Test size", () => {
  const list = LinkedList();
  test("test on empty list", () => {
    const expected = 0;
    expect(list.size()).toBe(expected);
  });

  test("test on single-node list", () => {
    const expected = 1;
    list.append(Node("single node"));
    expect(list.size()).toBe(expected);
  });

  test("test on multi-node list", () => {
    const expected = 4;
    list.initSample();
    expect(list.size()).toBe(expected);
  });
});

describe("Test head", () => {
  const list = LinkedList();
  afterEach(() => {
    list.reset();
  });

  test("test on empty list", () => {
    const expected = undefined;
    expect(list.head()).toEqual(expected);
  });

  test("test on non-empty list", () => {
    const expected = 1;
    list.initSample();
    expect(list.head()).toEqual(expected);
  });
});

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

describe("Test at", () => {
  const list = LinkedList();
  afterEach(() => {
    list.reset();
  });

  test("test on empty list", () => {
    const expected = undefined;
    expect(list.at(2)).toEqual(expected);
  });

  test("test non-existing value", () => {
    const expected = undefined;
    list.append(1);
    expect(list.at(2)).toEqual(expected);
  });

  test("test existing value at index 0", () => {
    const expected = 1;
    list.initSample();
    expect(list.at(0)).toEqual(expected);
  });

  test("test existing value at index 1", () => {
    const expected = 2;
    list.initSample();
    expect(list.at(1)).toEqual(expected);
  });

  test("test existing value at last index", () => {
    const expected = 4;
    list.initSample();
    expect(list.at(4)).toEqual(expected);
  });
});

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

describe("Test contains", () => {
  const list = LinkedList();
  afterEach(() => {
    list.reset();
  });

  test("test on empty list", () => {
    const expected = false;
    expect(list.contains(1)).toBe(expected);
  });

  test("test non-existing value", () => {
    const expected = false;
    list.initSample();
    expect(list.contains("does not exist")).toBe(expected);
  });

  test("test existing value at index 0", () => {
    const expected = true;
    list.initSample();
    expect(list.contains(1)).toBe(expected);
  });

  test("test existing value at index 1", () => {
    const expected = true;
    list.initSample();
    expect(list.contains(2)).toBe(expected);
  });

  test("test existing value at last index", () => {
    const expected = true;
    list.initSample();
    expect(list.contains(4)).toBe(expected);
  });
});

describe("Test findIndex", () => {
  const list = LinkedList();
  afterEach(() => {
    list.reset();
  });

  test("test on empty list", () => {
    const expected = -1;
    expect(list.findIndex("whatever")).toBe(expected);
  });

  test("test non-existing value", () => {
    const expected = -1;
    list.initSample();
    expect(list.findIndex("whatever")).toBe(expected);
  });

  test("test existing value at index 0", () => {
    const expected = 0;
    list.initSample();
    expect(list.findIndex(1)).toBe(expected);
  });

  test("test existing value at index 1", () => {
    const expected = 1;
    list.initSample();
    expect(list.findIndex(2)).toBe(expected);
  });

  test("test existing value at last index", () => {
    const expected = 3;
    list.initSample();
    expect(list.findIndex(4)).toBe(expected);
  });
});

describe.only("Test toString", () => {
  const list = LinkedList();

  afterEach(() => {
    list.reset();
  });

  test("test on empty list", () => {
    const expected = "";
    expect(list.toString()).toEqual(expected);
  });

  test("test on single-node list", () => {
    const expected = "( 1 ) -> null";
    list.append(1);
    expect(list.toString()).toEqual(expected);
  });

  test("test on multi-node list", () => {
    const expected = "( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null";
    list.initSample();
    expect(list.toString()).toEqual(expected);
  });
});
