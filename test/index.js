'use strict';

var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    $ = require('../index.js');



describe('##### Check variable type #####', function() {

    it ('Array', function () {
        var result = $.isArray([]);
        result.should.be.true;
    });

    it ('Object', function () {
        var result = $.isObject({});
        result.should.be.true;
    });

    it ('String', function () {
        var result = $.isString('test');
        result.should.be.true;
    });

    it ('Number', function () {
        var result = $.isNumber(1);
        result.should.be.true;
    });

    it ('Boolean', function () {
        var result = $.isBoolean(false);
        result.should.be.true;
    });

    it ('Undefined', function () {
        var result = $.isUndefined();
        result.should.be.true;
    });


});
