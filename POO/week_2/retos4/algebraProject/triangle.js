"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    Triangle.prototype.calculateLengthSides = function () {
        var distancev1v2;
        var distancev2v3;
        var distcancev3v1;
        var sideLength = [];
        distancev1v2 = this.vertex1.calculateDistance(this.vertex2);
        distancev2v3 = this.vertex2.calculateDistance(this.vertex3);
        distcancev3v1 = this.vertex3.calculateDistance(this.vertex1);
        sideLength.unshift(distancev1v2, distancev1v2, distcancev3v1);
        return sideLength;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
