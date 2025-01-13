import { WebUser } from "./WebUser"
class Customer {
    private WebUser : WebUser
    private id : string 
    private address : string
    private phone : number
    private email : string

    constructor(id:string,address:string,phone:number,email:string,WebUser:WebUser){
        this.id = id
        this.address = address
        this.phone = phone 
        this.email = email
        this.WebUser = WebUser
    }
    public getid():string{
        return this.id
    }
    public setid(id:string):void{
        this.id = id
    }
    public getaddress():string{
        return this.address
    }
    public setaddress(address:string):void{
        this.address = address
    }
    public getphone():number{
        return this.phone
    }
    public setphone(phone:number):void{
        this.phone = phone
    }
    public getemail():string{
        return this.email
    }
    public setemail(email:string):void{
        this.email = email
    }
    public tostring():string{
        return `[Customer id:${this.id} address:${this.address} phone:${this.phone} email:${this.email}] ${this.WebUser}`
    }
}
export {Customer}