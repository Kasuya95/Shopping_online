import { WebUser } from "./WebUser"
class ShoppingCart{
    private WebUser : WebUser 
    private create : string 

    constructor(create:string ,WebUser:WebUser){
        this.create = create
        this.WebUser = WebUser
    }

    private getcreate():string{
        return this.create
    }
    private setcreate(create:string):void{
        this.create = create
    }
    private tostring():string{
        return `Cart create:${this.create} ${this.WebUser}`
    }

}
export {ShoppingCart}