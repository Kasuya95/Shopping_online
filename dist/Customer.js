"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, address, phone, email, WebUser) {
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.WebUser = WebUser;
    }
    getid() {
        return this.id;
    }
    setid(id) {
        this.id = id;
    }
    getaddress() {
        return this.address;
    }
    setaddress(address) {
        this.address = address;
    }
    getphone() {
        return this.phone;
    }
    setphone(phone) {
        this.phone = phone;
    }
    getemail() {
        return this.email;
    }
    setemail(email) {
        this.email = email;
    }
    tostring() {
        return `[Customer id:${this.id} address:${this.address} phone:${this.phone} email:${this.email}] ${this.WebUser}`;
    }
}
exports.Customer = Customer;
