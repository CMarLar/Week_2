"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileCollection.prototype.getMobiles = function () { return this.mobiles; };
    ;
    MobileCollection.prototype.getTotalPrice = function () { return this.totalPrice; };
    ;
    MobileCollection.prototype.setMobiles = function (mobiles) { this.mobiles = mobiles; };
    ;
    MobileCollection.prototype.totalPriceCalculation = function () {
        var totalPriceSum = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            totalPriceSum += this.mobiles[i].getPrice();
        }
        return totalPriceSum;
    };
    MobileCollection.prototype.printCollection = function () {
        for (var i = 0; i < this.mobiles.length; i++) {
            console.log(this.mobiles[i].printInfo());
        }
        console.log("....");
        console.log("Overall Price: " + this.totalPrice);
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
