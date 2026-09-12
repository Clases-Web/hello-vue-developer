export class PersonName {
    _firstName;
    _lastName;

    constructor(firstName, lastName) {
        const trimmedFirstName = firstName?.trim() || "";
        const trimmedLastName = lastName?.trim() || "";
        this._firstName = trimmedFirstName;
        this._lastName = trimmedLastName;
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