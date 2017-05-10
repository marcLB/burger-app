export class UserController {

    constructor() {
        this.firstname = 'John';
        this.lastname = 'Deere';
    }

    getName() {
        return this.firstname + ' ' + this.lastname.toUpperCase();
    }
}
