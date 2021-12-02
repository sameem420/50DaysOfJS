# Unique In Order

## Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

### The argument can contain a string or an array

- ### For example: uniqueInOrder([1,2,2,3,3]) should return [1,2,3]

# TEST CASES

| TEST                             | RESULT                                       |
| -------------------------------- | -------------------------------------------- |
| uniqueInOrder('ABBCcAD')         | should return ['A', 'B', 'C', 'c', 'A', 'D'] |
| uniqueInOrder('AAAABBBCCDAABBB') | should return ['A', 'B', 'C', 'D', 'A', 'B'] |
| uniqueInOrder([1,2,2,3,3])       | should return [1,2,3]                        |
