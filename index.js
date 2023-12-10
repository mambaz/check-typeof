'use strict';

/**
 * Checks if the parameter is an array
 * @param   {unknown}   a   parameter to check
 * @returns {boolean}       True if parameter is an array
 */
module.exports.isArray = function (a) {
    return Array.isArray(a);
};

/**
 * Checks if the parameter is an object
 * @param   {unknown}   o   parameter to check
 * @returns {boolean}       True if parameter is an object
 */
module.exports.isObject = function (o) {
    return o !== null && typeof o === 'object' && !Array.isArray(o);
};

/**
 * Checks if the parameter is a string
 * @param   {unknown}   s   parameter to check
 * @returns {boolean}       True if parameter is a string
 */
module.exports.isString = function (s) {
    return typeof s === 'string';
};

/**
 * Checks if the parameter is a number
 * @param   {unknown}   n   parameter to check
 * @returns {boolean}       True if parameter is a number
 */
module.exports.isNumber = function (n) {
    return typeof n === 'number' && !isNaN(n);
};

/**
 * Checks if the parameter is a boolean
 * @param   {unknown}   b   parameter to check
 * @returns {boolean}       True if parameter is a boolean
 */
module.exports.isBoolean = function (b) {
    return typeof b === 'boolean';
};

/**
 * Checks if the parameter is undefined
 * @param   {unknown}   u   parameter to check
 * @returns {boolean}       True if parameter is undefined
 */
module.exports.isUndefined = function (u) {
    return typeof u === 'undefined';
};
