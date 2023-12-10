const { expect } = require('chai');
const types = require('../index.js');

describe('Type Check Functions', () => {
    describe('isArray', () => {
        it('should return true if parameter is an array', () => {
            expect(types.isArray([])).to.equal(true);
            expect(types.isArray([1, 2, 3])).to.equal(true);
            expect(types.isArray(new Array())).to.equal(true);
        });

        it('should return false if parameter is not an array', () => {
            expect(types.isArray({})).to.equal(false);
            expect(types.isArray('string')).to.equal(false);
            expect(types.isArray(123)).to.equal(false);
        });
    });

    describe('isObject', () => {
        it('should return true if parameter is an object', () => {
            expect(types.isObject({})).to.equal(true);
            expect(types.isObject({ key: 'value' })).to.equal(true);
        });

        it('should return false if parameter is not an object', () => {
            expect(types.isObject([])).to.equal(false);
            expect(types.isObject('string')).to.equal(false);
            expect(types.isObject(123)).to.equal(false);
        });
    });

    describe('isString', () => {
        it('should return true if parameter is a string', () => {
            expect(types.isString('')).to.equal(true);
            expect(types.isString('hello')).to.equal(true);
        });

        it('should return false if parameter is not a string', () => {
            expect(types.isString(123)).to.equal(false);
            expect(types.isString([])).to.equal(false);
            expect(types.isString({})).to.equal(false);
            expect(types.isString(true)).to.equal(false);
            expect(types.isString(undefined)).to.equal(false);
        });
    });

    describe('isNumber', () => {
        it('should return true if parameter is a number', () => {
            expect(types.isNumber(123)).to.equal(true);
            expect(types.isNumber(0)).to.equal(true);
            expect(types.isNumber(-12.34)).to.equal(true);
        });

        it('should return false if parameter is not a number', () => {
            expect(types.isNumber('123')).to.equal(false);
            expect(types.isNumber([])).to.equal(false);
            expect(types.isNumber({})).to.equal(false);
            expect(types.isNumber(true)).to.equal(false);
            expect(types.isNumber(undefined)).to.equal(false);
        });
    });

    describe('isBoolean', () => {
        it('should return true if parameter is a boolean', () => {
            expect(types.isBoolean(true)).to.equal(true);
            expect(types.isBoolean(false)).to.equal(true);
        });

        it('should return false if parameter is not a boolean', () => {
            expect(types.isBoolean(123)).to.equal(false);
            expect(types.isBoolean('true')).to.equal(false);
            expect(types.isBoolean(null)).to.equal(false);
            expect(types.isBoolean(undefined)).to.equal(false);
        });
    });

    describe('isUndefined', () => {
        it('should return true if parameter is undefined', () => {
            expect(types.isUndefined(undefined)).to.equal(true);
        });

        it('should return false if parameter is not undefined', () => {
            expect(types.isUndefined(null)).to.equal(false);
            expect(types.isUndefined('undefined')).to.equal(false);
            expect(types.isUndefined(123)).to.equal(false);
            expect(types.isUndefined({})).to.equal(false);
        });
    });
});
