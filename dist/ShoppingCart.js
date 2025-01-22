"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(created, lineItems = []) {
        this.lineItems = [];
        ;
        this.created = created;
        this.lineItems = lineItems;
    }
    getCreated() {
        return this.created;
    }
    setCreated(created) {
        this.created = created;
    }
    getLineItems() {
        return this.lineItems;
    }
    setLineItems(lineItems) {
        this.lineItems = lineItems;
    }
    toString() {
        return `Created : ${this.created} LineItem : ${this.lineItems}`;
    }
}
exports.ShoppingCart = ShoppingCart;
