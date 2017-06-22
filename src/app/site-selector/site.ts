export class Site {
    constructor(private _name: string) { }

    get name() {
        return this._name;
    }
}