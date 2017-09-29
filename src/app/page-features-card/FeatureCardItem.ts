export class FeatureCardItem {
    constructor(private _id: string, private _value:string) {}

    get id(): string {
        return this._id;
    }

    get value(): string {
        return this._value;
    }
}