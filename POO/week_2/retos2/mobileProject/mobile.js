"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    //Getters
    Mobile.prototype.getName = function () { return this.name; };
    ;
    Mobile.prototype.getTrademark = function () { return this.trademark; };
    ;
    Mobile.prototype.getModel = function () { return this.model; };
    ;
    Mobile.prototype.getColor = function () { return this.color; };
    ;
    Mobile.prototype.getPrice = function () { return this.price; };
    ;
    //Setters
    Mobile.prototype.setName = function (newName) { this.name = newName; };
    ;
    Mobile.prototype.setTrademark = function (newTrademark) { this.trademark = newTrademark; };
    ;
    Mobile.prototype.setModel = function (newModel) { this.model = newModel; };
    ;
    Mobile.prototype.setColor = function (newColor) { this.color = newColor; };
    ;
    Mobile.prototype.setPrice = function (newPrice) { this.price = newPrice; };
    ;
    Mobile.prototype.printInfo = function () {
        console.log("The characteristics of the mobile name are:" + "\n" +
            "Name: " + this.name + "\n" +
            "Trademark: " + this.trademark + "\n" +
            "Model: " + this.model + "\n" +
            "Color: " + this.color + "\n" +
            "Price: " + this.price + "\n");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
