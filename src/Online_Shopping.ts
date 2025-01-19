const { WebUser , UserState } = require('./WebUser')
const { Customer} = require('./Customer')
const { Product } = require("./Product")
const { LineItem } = require("./Lineitem")
const { Order } = require("./Order")
const { OrderStatus } = require("./OrderStatus")
import { Account } from './Account'
import { ShoppingCart } from './ShoppingCart'

console.log("################## webuser ###################")
const webUser1 = new WebUser("1","gtdy22")
webUser1.setstate(UserState.Banned)
console.log(webUser1.tostring())


console.log("############## CUSTOMER ##############")

const cus1 = new Customer(webUser1, "1", "London", "099-9999-999", "zny@gmail.com")
console.log(cus1.toString())


console.log("############## Product #################")
const product1 = new Product("1","Potato","Nine inc.")
console.log(product1.tostring())


console.log("############## Lineitem #################")
const line1 = new LineItem(3,50,product1.tostring())
console.log(line1.tostring())

console.log("############## Order #################")
const order1 = new Order("1","1/1/2025","10/2/2025","London")
order1.setstatus(OrderStatus.New)
order1.addLineitems(line1)
console.log(order1.tostring(),"  total " + order1.calctotal())

console.log("############## Account ##############")
const account = new Account(webUser1, cus1.getId(),  cus1.getAddress(), cus1.getPhone(), cus1.getEmail(), '1', 'London', false, 'open', 'no')

console.log(account)
console.log(account.getId())


console.log("############## ShoppingCart ##############")
const shoppingcart = new ShoppingCart(webUser1, cus1.getId(), cus1.getAddress(), cus1.getPhone(), cus1.getEmail(), account.getId(), account.getBilling_address(), account.getIs_closed(), account.getOpen(), account.getClosed(), 'last month', [LineItem])
console.log(shoppingcart)
