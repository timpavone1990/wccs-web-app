export class Page {
    constructor(private _url: string, private _status: string) { }

    get url() {
        return this._url;
    }

    get status() {
        return this._status;
    }
}