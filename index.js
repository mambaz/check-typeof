'use strict';

/**
 * Checks if the parameter is an array
 * @param   {Unknown}   a       parameter to check
 * @returns {BOOLEAN}           True if parameter is an array
 */
module.exports.isArray = function (a) {

    return (!!a) && (a.constructor === Array);

};

/**
 * Checks if the parameter is an object
 * @param   {Unknown}   o       parameter to check
 * @returns {BOOLEAN}           True if parameter is an object
 */
module.exports.isObject = function (o) {

    return (!!o) && (o.constructor === Object);

};

/**
 * Checks if the parameter is an string
 * @param   {Unknown}   s       parameter to check
 * @returns {BOOLEAN}           True if parameter is an string
 */
module.exports.isString = function (s) {

    return (!!s) && (s.constructor === String);

};

/**
 * Checks if the parameter is an number
 * @param   {Unknown}   o       parameter to check
 * @returns {BOOLEAN}           True if parameter is an number
 */
module.exports.isNumber = function (n) {

    return (!!n) && (n.constructor === Number);

};

/**
 * Checks if the parameter is an boolean
 * @param   {Unknown}   o       parameter to check
 * @returns {BOOLEAN}           True if parameter is an boolean
 */
module.exports.isBoolean = function (b) {

    return (b !== undefined && b.constructor === Boolean);

};

/**
 * Checks if the parameter is an undefined
 * @param   {Unknown}   u       parameter to check
 * @returns {BOOLEAN}           True if parameter is an undefined
 */
module.exports.isUndefined = function (u) {

    return (u === undefined);

};
