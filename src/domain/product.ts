import {Brand} from "./brand";

export class Product {
    private _id: string
    private _name: string
    private _price: number
    private _currency: string
    private _brand: Brand | null

    constructor(id: string, name: string, price: number, currency: string, brand: Brand) {
        this._id = id
        this._name = name
        this._price = price
        this._currency = currency
        this._brand = brand
    }


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get currency(): string {
        return this._currency;
    }

    set currency(value: string) {
        this._currency = value;
    }

    get brand(): Brand {
        return this._brand;
    }

    set brand(value: Brand) {
        this._brand = value;
    }
}