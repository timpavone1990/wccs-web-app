import {FeatureCapable} from "./feature-capable";

export class Property extends FeatureCapable {
    private _content: string;
    private _type: string;

    get content(): string {
        return this._content;
    }

    get type(): string {
        return this._type;
    }
}