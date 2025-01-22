"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(quantity, price, product) {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }
    getProduct() {
        return this.product;
    }
    getQuantity() {
        return this.quantity;
    }
    getPrice() {
        return this.price;
    }
    calcTotal() {
        return this.quantity * this.price;
    }
    toString() {
        return `LineItem | Product: ${this.getProduct()}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }
}
exports.LineItem = LineItem;
