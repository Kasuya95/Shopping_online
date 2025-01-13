"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(number, ordered, shipped, ship_to, status) {
        this.lineitems = [];
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = status;
        this.total = 0;
    }
    getordered() {
        return this.ordered;
    }
    getnumber() {
        return this.number;
    }
    getshipped() {
        return this.shipped;
    }
    gettotal() {
        return this.total;
    }
    getstatus() {
        return this.status;
    }
    getship_to() {
        return this.ship_to;
    }
    addLineitems(lineitems) {
        this.lineitems.push(lineitems);
    }
    setstatus(status) {
        this.status = status;
    }
    calctotal() {
        for (let i = 0; i < this.lineitems.length; i++) {
            this.total = this.lineitems[i].calctotal();
        }
        return this.total;
    }
    tostring() {
        return `number : ${this.number} ordered : ${this.ordered} shipped : ${this.shipped} ship_to : ${this.ship_to} status : ${this.status}`;
    }
}
exports.Order = Order;
