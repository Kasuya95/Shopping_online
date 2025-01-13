import { Product } from "./Product"
class Lineitem{
    private product : Product
    private quantity: number
    private price: number

    constructor(quantity:number, price:number,product : Product){
        this.quantity = quantity
        this.price = price
        this.product = product
    }

    public getquantity():number{
        return this.quantity
    }
    public getprice():number{
        return this.price
    }
    public setquantity(quantity:number):void{
        this.quantity = quantity
    }
    public setprice(price:number):void{
        this.price = price
    }
    public tostring():string{
        return `Lineitem quantity:${this.quantity} price:${this.price}${this.product}`
    }
    public calctotal(){
        return this.quantity * this.price
    }
}
export {Lineitem}