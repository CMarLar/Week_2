"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var myPoint = new point_1.Point(64, 25);
var myPoint2 = new point_1.Point(36, 49);
var myPoint3 = new point_1.Point(-25, 49);
var myTriangle = new triangle_1.Triangle(myPoint, myPoint2, myPoint3);
console.log(myTriangle.calculateLengthSides());
