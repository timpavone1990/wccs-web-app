import {FeatureCapable} from "./feature-capable";

export class Page extends FeatureCapable {
    private _url: string;
    private _status: string;
    private _type: string;

    get url():string {
        return this._url;
    }

    get status():string {
        return this._status;
    }

    get type(): string {
        return this._type;
    }
}