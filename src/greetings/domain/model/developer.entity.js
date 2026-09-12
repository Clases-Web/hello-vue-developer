import {PersonName} from "../../../shared/domain/model/person-name.value-object.js";
import {DeveloperId} from "../../../reetings/domain/model/developer-id.value-object.js";

export class Developer {
    _id;
    _name;

    constructor(firstName, lastName) {
        const providedName = new PersonName(firstName, lastName);
        this._id = providedName.isValid() ? DeveloperId.build() : null;
        this._name = providedName;
    }

    get name() {
        return this._name;
    }

    get fullName() {
        return this._name ? this._name.fullName : "Unknown";
    }

    isRegisterable() {
        return this._name ? this._name.isValid() : false;
    }

    get id() {
        return this._id;
    }

    isIdentified() {
        return this._id !== null;
    }
}