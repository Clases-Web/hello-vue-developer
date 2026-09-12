import {generateUUID, isValidUUID} from "../../../shared/domain/uuid.js";

export class DeveloperID{
    _value;
    constructor(value) {
        if (!isValidUUID(value)){
            throw new Error(`Invalid UUID ID: ${value}`);
        }
        this._value = value;
    }


    get value() {
        return this._value;
    }

    static build(){
        return new DeveloperID(generateUUID());
    }

    equals(other){
        return other instanceof DeveloperID && this._value === other_value;
    }
    toString(){
        return this._value;
    }
}