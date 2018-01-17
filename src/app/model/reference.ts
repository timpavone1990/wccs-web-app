export class Reference {
    private _class: string;
    private _destination: string;


    get class(): string {
        return this._class;
    }

    get destination(): string {
        return this._destination;
    }
}