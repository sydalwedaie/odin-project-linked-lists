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

  const getList = () => list;
  const initSample = () => (list = sampleList);
  const reset = () => (list = {});

  const append = (value, node = list) => {
    if (JSON.stringify(node) === "{}") {
      list = Node(value);
    } else if (node.next === null) {
      node.next = Node(value);
    } else {
      append(value, node.next);
    }
  };

  const prepend = (value) => {
    if (JSON.stringify(list) === "{}") {
      list = Node(value);
    } else {
      list = Node(value, list);
    }
  };

  const size = (node = list) => {
    if (JSON.stringify(list) === "{}") {
      return 0;
    } else if (node.next === null) {
      return 1;
    } else {
      return 1 + size(node.next);
    }
  };

  const head = () => {
    if (JSON.stringify(list) === "{}") {
      return undefined;
    } else {
      return list.value;
    }
  };

  const tail = (node = list) => {
    if (JSON.stringify(node) === "{}") {
      return undefined;
    } else if (node.next === null) {
      return node.value;
    } else {
      return tail(node.next);
    }
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
  };
}

export function Node(value = null, nextNode = null) {
  return {
    value: value,
    next: nextNode,
  };
}
