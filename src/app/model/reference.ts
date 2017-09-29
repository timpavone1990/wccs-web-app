export class Reference {
    private _type: string;
    private _destination: string;


    get type(): string {
        return this._type;
    }

    get destination(): string {
        return this._destination;
    }
}