# The Odin Project - Linked Lists

This is the solution to The Odin Project's [Linked Lists](https://www.theodinproject.com/lessons/javascript-linked-lists) challenge. The goal is to implement a basic linked list data structure with a few rudementary methods.

## Project Structure

There are 2 main modules in `modules.js`: 
- `LinkedList`, which is a factory for creating instances of a linked list with all the built-in methods. 
- `Node` is a helper factory used by `LinkedList`. It's used to create the individual nodes.

`helpers.js` includes helper functions used in the test suites.

The `test` directory houses all the test suites for each method as well as the helper functions. Each method has its own `.test.js` file.

## Features of the linked list

These are the implemented methods:

1. `append(value)` adds a new node containing `value` to the end of the list.
1. `prepend(value)` adds a new node containing `value` to the start of the list.
1. `size()` returns the total number of nodes in the list.
1. `head()` returns the value of the first node in the list. If the list is empty, it returns `undefined`.
1. `tail()` returns the value of the final node in the list. If the list is empty, it returns `undefined`.
1. `at(index)` returns the value of the node at the given index. If there’s no node at the given index, it returns `undefined`.
1. `pop()` removes the head node from the list and returns its value. If it’s used on an empty list, it just returns `undefined`.
1. `contains(value)` returns `true` if the passed in value is in the list and otherwise returns `false`.
1. `findIndex(value)` returns the index of the node containing the given value. If the value can’t be found in the list, it returns `-1`. If more than one node has a value matching the given `value`, it returns the index of the first node with the matching value.
1. `toString()` returns a string representation fo the list. If the list is empty, it returns an empty string. The format is: `( value ) -> ( value ) -> ( value ) -> null`.
1. `insertAt(index, ...values)` inserts new nodes with the given values at the given `index`. If the method is called with an index that is out of bounds (below 0 or above the list’s size), throws a `RangeError`.
1. `removeAt(index)` removes the node at the given `index`. If the given index is out of bounds (below 0 or greater than or equal to the list’s size), throws a `RangeError`.

## Tools used

- [Jest](https://jestjs.io/) testing library
- `babel/preset-env` to make Jest understand ESM.
- `jest/globals` to make ESlint understand Jest.


## How to run

- Clone the repo.
- Run `npm i` to install the dependencies.
- Run `npm test` to run the test suites.

## Learning Outcomes

### Space and Time Complexities

This challenge follows lessons about space and time Complexity of data structures. In the first iteration of each method, my goal was just to get them to pass the tests. In the next iterations, I tried to reduce unnecessary loops as much as possible.

### Test Driven Development

I implemented a basic TDD workflow, in which I first wrote the tests for a small piece of the challenge, wrote enough code to pass the tests, and went back to refactor the tests as well as the code. I doing so, I learned there were a lot of decision-making. For example, I first hard-coded the `expected` list for each output, before creating the `makeList` helper function. I had to decide whether I wanted to test my code against a procedurally generated expected list, or a hard-coded one. I decided on the former, but I made sure I tested the helper function itself agains hard-coded lists. That way, I was sure the generated lists were as good as hard-coded ones.




