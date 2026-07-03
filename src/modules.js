export function LinkedList() {
  let list = {};
  const sampleList = {
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

  // Private helper methods
  function makeList(values) {
    if (values.length === 0) return {};
    if (values.length === 1) return Node(values[0]);
    return Node(values[0], makeList(values.slice(1)));
  }

  function makeArray(list) {
    if (list.next === null) return [list.value];
    return [list.value, makeArray(list.next)].flat();
  }

  // Auxillary methods
  const getList = () => list;
  const initSample = () => (list = sampleList);
  const reset = () => (list = {});

  // Required methods
  const append = (value) => {
    function traverse(value, list) {
      if (list.next === null) list.next = Node(value);
      else traverse(value, list.next);
    }

    if (size() === 0) {
      list = Node(value);
    } else {
      traverse(value, list);
    }
  };

  const prepend = (value) => {
    list = size() === 0 ? Node(value) : Node(value, list);
  };

  const size = () => {
    if (JSON.stringify(list) === "{}") {
      return 0;
    }

    function traverse(list) {
      if (list.next === null) return 1;
      return 1 + traverse(list.next);
    }

    return traverse(list);
  };

  const head = () => {
    return size() === 0 ? undefined : list.value;
  };

  const tail = () => {
    function traverse(list) {
      if (list.next === null) return list.value;
      return traverse(list.next);
    }

    return size() === 0 ? undefined : traverse(list);
  };

  const at = (index) => {
    if (index > size() || index < 0) {
      return undefined;
    }

    let currentNode = list;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next || currentNode;
    }

    return currentNode.value;
  };

  const pop = () => {
    const headNodeValue = head();
    if (headNodeValue) {
      // Handle single and multi-node at the same time
      list = list.next || {};
    }
    return headNodeValue;
  };

  const contains = (value) => {
    if (size() === 0) return false;

    let currentNode = list;
    while (currentNode.value !== value && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode.value === value;
  };

  const findIndex = (value) => {
    if (size() === 0 || !contains(value)) return -1;

    let currentNode = list;
    let index = 0;
    while (currentNode.value !== value && currentNode.next !== null) {
      currentNode = currentNode.next;
      index++;
    }

    return index;
  };

  const toString = () => {
    if (size() === 0) return "";

    let currentNode = list;
    let string = `( ${currentNode.value} ) -> `;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      string += `( ${currentNode.value} ) -> `;
    }

    return (string += "null");
  };

  // Extra Credit
  const insertAt = (index, ...values) => {
    if (index < 0 || index > size()) {
      throw new RangeError("Index out of bound.");
    } else if (size() === 0) {
      list = makeList(values);
    } else {
      const array = makeArray(list);
      array.splice(index, 0, ...values);
      list = makeList(array);
    }
  };

  const removeAt = (index) => {
    if (size() === 0) {
      list = {};
    } else if (index < 0 || index > size()) {
      throw new RangeError("Index out of bound.");
    } else {
      const array = makeArray(list);
      array.splice(index, 1);
      list = makeList(array);
    }
  };

  return {
    getList,
    initSample,
    reset,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    findIndex,
    toString,
    insertAt,
    removeAt,
  };
}

export function Node(value, nextNode) {
  return {
    value: value || null,
    next: nextNode || null,
  };
}
