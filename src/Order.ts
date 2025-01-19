import { LineItem } from "./LineItem"
import { OrderStatus } from "./OrderStatus"

class Order{
    private lineitems : LineItem[] = []
    private number:string
    private ordered:string
    private shipped:string
    private ship_to : string
    private status : OrderStatus
    private total : number

    constructor(number:string,ordered:string,shipped:string,ship_to:string,status:OrderStatus){
        this.number = number
        this.ordered = ordered
        this.shipped = shipped
        this.ship_to = ship_to
        this.status = status
        this.total = 0
    }
    public getordered():string{
        return this.ordered
    }
    public getnumber():string{
        return this.number
    }public getshipped():string{
        return this.shipped
    }public gettotal():number{
        return this.total
    }public getstatus():OrderStatus{
        return this.status
    }public getship_to():string{
        return this.ship_to
    }
    public addLineitems(lineitems: LineItem){
        this.lineitems.push(lineitems)
    }
     public setstatus(status:OrderStatus):void{
            this.status = status
        }
    public calctotal(){
        
        for(let i = 0; i < this.lineitems.length; i++){
            this.total = this.lineitems[i].calctotal()
        }
        return this.total
    }
    public tostring():string{
        return `number : ${this.number} ordered : ${this.ordered} shipped : ${this.shipped} ship_to : ${this.ship_to} status : ${this.status}`
    }
}
export {Order}