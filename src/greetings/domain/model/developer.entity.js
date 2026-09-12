import * as DeveloperId from "vite";

export class Developer {
    _id;
    _name;

    constructor(firstname, lastname) {
        const provideName= new PersonName(firstname, lastname);
        this.id = provideName.isValid() ? DeveloperId.build() : null;
        this.name = provideName;
        this._firstName = firstname;
        this._lastName = lastname;
    }


    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }
    get fullName() {
        return [this._firstName, this._lastName].filter(name => name.length > 0).join(" ");
    }

    equals(other) {
        return other instanceof PersonName &&
            this._firstName === other.firstName &&
            this._lastName === other.lastName;
    }

    isValid() {
        return this.isFullyNamed();
    }

    isFullyNamed() {
        return this._firstName.length > 0 && this._lastName.length > 0;
    }

}