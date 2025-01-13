"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(create, WebUser) {
        this.create = create;
        this.WebUser = WebUser;
    }
    getcreate() {
        return this.create;
    }
    setcreate(create) {
        this.create = create;
    }
    tostring() {
        return `Cart create:${this.create} ${this.WebUser}`;
    }
}
exports.ShoppingCart = ShoppingCart;
