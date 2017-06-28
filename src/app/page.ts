export class Page {
    constructor(private _url: string, private _status: string, private _pageType: string) { }

    get url():string {
        return this._url;
    }

    get status():string {
        return this._status;
    }

    get pageType(): string {
        return this._pageType;
    }

    get date(): string {
        return new Date().toDateString();
    }
}