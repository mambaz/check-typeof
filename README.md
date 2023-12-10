# Type Checker for Node.js

A Node.js package for checking variable types: array, object, string, number, boolean, or undefined.

## Installation

Install the package via npm:

```bash
npm install check-typeof --save
```

## Usage

```js
    const $ = require('check-typeof');

    // Check if the variable is an array
    if ($.isArray(variableName)) {
        // Your code for array type
    }

    // Check if the variable is an object
    if ($.isObject(variableName)) {
        // Your code for object type
    }

    // Check if the variable is a string
    if ($.isString(variableName)) {
        // Your code for string type
    }

    // Check if the variable is a number
    if ($.isNumber(variableName)) {
        // Your code for number type
    }

    // Check if the variable is a boolean
    if ($.isBoolean(variableName)) {
        // Your code for boolean type
    }

    // Check if the variable is undefined
    if ($.isUndefined(variableName)) {
        // Your code for undefined type
    }

```


