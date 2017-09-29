export class Site {
    private _name: string;

    constructor(private _id: string, name: string) {
        this._name = name || _id;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
}