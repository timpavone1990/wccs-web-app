export class FeatureCardItem {
    constructor(private _id: string, private _value:string, private _class:string) {}

    get id(): string {
        return this._id;
    }

    get value(): string {
        return this._value;
    }

    get class(): string {
        return this._class;
    }
}