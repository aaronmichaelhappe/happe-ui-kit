const createNode = (value) => {
  let next = null;

  const setNext = (node) => {
    next = node;
  };

  const getNext = () => next;

  const getValue = () => value;

  return {
    setNext,
    getNext,
    getValue
  };
};

const LinkedList = () => {
  let head = null;
  let tail = null;
  let length = 0;


  const add = (value) => {
    const newNode = createNode(value);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.setNext(newNode);
      tail = newNode;
    }
    length++;
  };

  const get = (index) => {
    if (index < 0 || index >= length) {
      return null;
    }

    let current = head;
    for (let i = 0; i < index; i++) {
      current = current.getNext();
    }

    return current;
  };

  const getHead = () => head;

  const getTail = () => tail;

  const size = () => length;


  return {
    add,
    get,
    getHead,
    getTail,
    size
  };
};