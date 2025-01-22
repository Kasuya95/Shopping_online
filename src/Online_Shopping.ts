const { WebUser, UserState } = require('./WebUser');
const { Customer } = require('./Customer');
const { Product } = require("./Product");
const { LineItem } = require("./LineItem");
const { Order } = require("./Order");
const { OrderStatus } = require("./OrderStatus");
import { Account } from './Account';
import { ShoppingCart } from './ShoppingCart';

console.log("################## WebUser ###################");
const webUser1 = new WebUser("1", "gtdy22");
const webUser2 = new WebUser("2","ooesiw");
webUser1.setstate(UserState.Active);
webUser2.setstate(UserState.Active);
console.log(webUser1.tostring());
console.log(webUser2.tostring());


console.log("############## CUSTOMER ##############");

const cus1 = new Customer(webUser1, "1", "London", "099-9999-999", "test@gmail.com");
console.log(cus1.toString());


console.log("############## Product #################");
const product1 = new Product("1", "Pencil", "Nine inc.");
const product2 = new Product("2", "Eraser", "Nine inc.");
const product3 = new Product("3", "Ruler", "Nine inc.");
const product4 = new Product("4", "Pen", "Nine inc.");
const product5 = new Product("5", "Paper", "Nine inc.");
console.log(product1.toString());
console.log(product2.toString());
console.log(product3.toString());
console.log(product4.toString());
console.log(product5.toString());


console.log("############## LineItem #################");
const line1 = new LineItem(3, 50, product1.toString());
const line2 = new LineItem(1, 50, product2.toString());
const line3 = new LineItem(2, 50, product3.toString());
console.log(line1.toString());
console.log(line2.toString());
console.log(line3.toString());


console.log("############## ShoppingCart ##############");
const shoppingcart = new ShoppingCart('last month', [line1,line2]     
);
console.log(shoppingcart.toString());


console.log("############## Order #################");
const order1 = new Order("1", "1/1/2025", "10/2/2025", "London");
order1.setstatus(OrderStatus.New);
order1.addLineitems(line1);
console.log(order1.tostring(), "total " + order1.calctotal());


console.log("############## Account ##############");
const account = new Account(webUser1, '1', 'London', false, 'open', null,cus1.getId(), cus1.getAddress(), cus1.getPhone(), cus1.getEmail());


console.log(account);
console.log(account.getAccountId());



