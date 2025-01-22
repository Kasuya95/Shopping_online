"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(webUser, accountId, billingAddress, isClosed = false, openDate, closedDate = null, customerId, customerAddress, customerPhone, customerEmail) {
        this.accountId = accountId;
        this.billingAddress = billingAddress;
        this.isClosed = isClosed;
        this.openDate = openDate;
        this.closedDate = closedDate;
        this.customer = { id: customerId, address: customerAddress, phone: customerPhone, email: customerEmail };
    }
    // Getter and Setter for accountId
    getAccountId() {
        return this.accountId;
    }
    // Getter and Setter for billingAddress
    getBillingAddress() {
        return this.billingAddress;
    }
    setBillingAddress(billingAddress) {
        this.billingAddress = billingAddress;
    }
    // Getter and Setter for isClosed
    getIsClosed() {
        return this.isClosed;
    }
    setIsClosed(isClosed) {
        this.isClosed = isClosed;
    }
    // Getter and Setter for openDate
    getOpenDate() {
        return this.openDate;
    }
    setOpenDate(openDate) {
        this.openDate = openDate;
    }
    // Getter and Setter for closedDate
    getClosedDate() {
        return this.closedDate;
    }
    setClosedDate(closedDate) {
        this.closedDate = closedDate;
    }
    // Getter and Setter for customer information
    getCustomerInfo() {
        return this.customer;
    }
    setCustomerInfo(customerId, address, phone, email) {
        this.customer = { id: customerId, address: address, phone: phone, email: email };
    }
    // Method to return a string representation of the account
    toString() {
        return `
      Account | [id: ${this.accountId}, billingAddress: ${this.billingAddress}, isClosed: ${this.isClosed}, 
      openDate: ${this.openDate}, closedDate: ${this.closedDate}, 
      Customer | [id: ${this.customer.id}, address: ${this.customer.address}, phone: ${this.customer.phone}, email: ${this.customer.email}]
    `;
    }
}
exports.Account = Account;
