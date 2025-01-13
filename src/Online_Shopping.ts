const { WebUser , UserState } = require('./WebUser')
const { Customer} = require('./Customer')
const { Product } = require("./Product")
const { Lineitem } = require("./Lineitem")
const { Order } = require("./Order")
const { OrderStatus } = require("./OrderStatus")


console.log("################## webuser ###################")
const webUser1 = new WebUser("1","gtdy22")
webUser1.setstate(UserState.Banned)
console.log(webUser1.tostring())


console.log("############## Customer #################")
const customer1 = new Customer("1","London","0815648429","test@gmail.com",webUser1.tostring())
console.log(customer1.tostring())


console.log("############## Product #################")
const product1 = new Product("1","Potato","Nine inc.")
console.log(product1.tostring())


console.log("############## Lineitem #################")
const line1 = new Lineitem(3,50,product1.tostring())
console.log(line1.tostring())

console.log("############## Order #################")
const order1 = new Order("1","1/1/2025","10/2/2025","London")
order1.setstatus(OrderStatus.New)
order1.addLineitems(line1)
console.log(order1.tostring(),"  total " + order1.calctotal())
