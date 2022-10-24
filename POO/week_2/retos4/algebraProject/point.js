"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () { return this.x; };
    ;
    Point.prototype.getY = function () { return this.y; };
    ;
    Point.prototype.setX = function (x) { this.x = x; };
    ;
    Point.prototype.setY = function (y) { this.y = y; };
    ;
    Point.prototype.toString = function () { return "(" + this.x + "," + this.y + ")"; };
    ;
    //Si no funcionan prueba a cambiar this.x por this.getx()
    Point.prototype.distanceToOrigin = function () {
        //Distancia al origen = raiz cuadrada de x al cuadrado + y al cuadrado.
        //Math.sqrt(num)
        var sumSqrs = (this.x * this.x) + (this.y * this.y);
        var distance = Math.sqrt(sumSqrs);
        return distance;
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        //https://www.superprof.es/apuntes/escolar/matematicas/analitica/vectores/distancia-entre-dos-puntos.html
        var a = (anotherPoint.getX() - this.x) * (anotherPoint.getX() - this.x);
        var b = (anotherPoint.getY() - this.y) * (anotherPoint.getY() - this.y);
        var distance = Math.sqrt(a + b);
        return distance;
    };
    Point.prototype.calculateQuadrant = function () {
        var quadrant = 0;
        if (this.getX() == 0 && this.getY() == 0) {
            quadrant = 0;
        }
        else if (this.getX() > 0 && this.getY() > 0) {
            quadrant = 1;
        }
        else if (this.getX() < 0 && this.getY() > 0) {
            quadrant = 2;
        }
        else if (this.getX() < 0 && this.getY() < 0) {
            quadrant = 3;
        }
        else if (this.getX() > 0 && this.getY() < 0) {
            quadrant = 4;
        }
        return quadrant;
    };
    return Point;
}());
exports.Point = Point;
