export class Site {
    constructor(private _name: string) { }

    get name(): string {
        return this._name;
    }
}