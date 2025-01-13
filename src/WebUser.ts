class UserState {
    public static New = "New"
    public static Active = "Active"
    public static Blocked = "Blocked"
    public static Banned = "Banned"
}
class WebUser {
    private login_id : string
    private password :string
    private state :UserState

    constructor(login_id : string, password : string, state: UserState){
        this.login_id = login_id
        this.password = password
        this.state = state
    }
    public getlogin():string{
        return this.login_id
    }
    public getpassword():string{
        return this.password
    }
    public setlogin(login_id:string):void{
        this.login_id = login_id
    }
    public setpassword(password:string):void{
        this.password = password
    }
    public getstate():UserState{
        return this.state 
    }
    public setstate(state:UserState):void{
        this.state = state
    }
    public tostring():string{
        return `[WebUser || id : ${this.login_id}  state : ${this.state}]`
    }

}
export {WebUser , UserState}