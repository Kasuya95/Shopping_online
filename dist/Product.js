"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, supplier) {
        this.id = id;
        this.name = name;
        this.supplier = supplier;
    }
    getid() {
        return this.id;
    }
    getname() {
        return this.name;
    }
    setname(name) {
        this.name = name;
    }
    getsuppplier() {
        return this.supplier;
    }
    setsupplier(supplier) {
        this.supplier = supplier;
    }
    tostring() {
        return `[Product id:${this.id} name:${this.name} supplier:${this.supplier}]`;
    }
}
exports.Product = Product;
