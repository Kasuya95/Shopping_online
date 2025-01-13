"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserState = exports.WebUser = void 0;
class UserState {
}
exports.UserState = UserState;
UserState.New = "New";
UserState.Active = "Active";
UserState.Blocked = "Blocked";
UserState.Banned = "Banned";
class WebUser {
    constructor(login_id, password, state) {
        this.login_id = login_id;
        this.password = password;
        this.state = state;
    }
    getlogin() {
        return this.login_id;
    }
    getpassword() {
        return this.password;
    }
    setlogin(login_id) {
        this.login_id = login_id;
    }
    setpassword(password) {
        this.password = password;
    }
    getstate() {
        return this.state;
    }
    setstate(state) {
        this.state = state;
    }
    tostring() {
        return `[WebUser || id : ${this.login_id}  state : ${this.state}]`;
    }
}
exports.WebUser = WebUser;
