require('angular-route/angular-route');

var users1Module = angular.module('module1', ['ngRoute']);

var module1Controller = require('./module1.controller.js');
users1Module.controller('module1Controller', module1Controller.controller);
users1Module.config(module1Controller.config);