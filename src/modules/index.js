'use strict';

var angular = require('angular');
console.log(angular); // Logs an empty object. Would expect this to be angular.

// This breaks
angular.module('test');
