"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var express = require("express");
var fs = require("fs");
var cors = require("cors");
var app = express();
var PORT = 3001;
var router = express.Router();
app.use(express.json());
app.use(cors());
fs.readdirSync(__dirname + "/routes")
    .reduce(function (preRoutes, nextRoutes) {
    var routes = require(__dirname + "/routes/" + nextRoutes).Routes;
    return __spreadArrays(preRoutes, routes);
}, [])
    .forEach(function (r) {
    var endpoint = r.endpoint, method = r.method, controller = r.controller;
    router[method](endpoint, controller);
});
app.use('/', router);
app.listen(PORT, function () {
    console.log("express start http://localhost:" + PORT);
});
