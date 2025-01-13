"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lineitem = void 0;
class Lineitem {
    constructor(quantity, price, product) {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }
    getquantity() {
        return this.quantity;
    }
    getprice() {
        return this.price;
    }
    setquantity(quantity) {
        this.quantity = quantity;
    }
    setprice(price) {
        this.price = price;
    }
    tostring() {
        return `Lineitem quantity:${this.quantity} price:${this.price}${this.product}`;
    }
    calctotal() {
        return this.quantity * this.price;
    }
}
exports.Lineitem = Lineitem;
