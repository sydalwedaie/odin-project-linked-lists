import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../modules.js";

describe("Test insertAt", () => {
  const list = LinkedList();

  afterEach(() => {
    list.reset();
  });

  test("test one value on empty list", () => {
    const expected = Node("one value");
    list.insertAt(0, "one value");
    expect(list.getList()).toEqual(expected);
  });

  test("test one value on index 0", () => {
    const expected = {
      value: "one value",
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
    list.insertAt(0, "one value");
    expect(list.getList()).toEqual(expected);
  });

  test("test one value on index 1", () => {
    const expected = {
      value: 1,
      next: {
        value: "one value",
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
    list.insertAt(1, "one value");
    expect(list.getList()).toEqual(expected);
  });

  test("test one value on last index", () => {
    const expected = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: "one value",
              next: null,
            },
          },
        },
      },
    };

    list.initSample();
    list.insertAt(4, "one value");
    expect(list.getList()).toEqual(expected);
  });

  test("test many values on empty list", () => {
    const expected = {
      value: "value 1",
      next: {
        value: "value 2",
        next: {
          value: "value 3",
          next: null,
        },
      },
    };

    list.insertAt(0, "value 1", "value 2", "value 3");
    expect(list.getList()).toEqual(expected);
  });

  test("test many values on index 0", () => {
    const expected = {
      value: "value 1",
      next: {
        value: "value 2",
        next: {
          value: "value 3",
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
        },
      },
    };

    list.initSample();
    list.insertAt(0, "value 1", "value 2", "value 3");
    expect(list.getList()).toEqual(expected);
  });

  test("test many values on index 1", () => {
    const expected = {
      value: 1,
      next: {
        value: "value 1",
        next: {
          value: "value 2",
          next: {
            value: "value 3",
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
        },
      },
    };

    list.initSample();
    list.insertAt(1, "value 1", "value 2", "value 3");
    expect(list.getList()).toEqual(expected);
  });

  test("test many values on last index", () => {
    const expected = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: "value 1",
              next: {
                value: "value 2",
                next: {
                  value: "value 3",
                  next: null,
                },
              },
            },
          },
        },
      },
    };

    list.initSample();
    list.insertAt(4, "value 1", "value 2", "value 3");
    expect(list.getList()).toEqual(expected);
  });

  test("test out of bound index", () => {
    const expected = "Index out of bound.";
    list.initSample();

    expect(() => {
      list.insertAt(20, "out of bound");
    }).toThrow();
  });
});
