import {FeatureCapable} from "./feature-capable";

export class Property extends FeatureCapable {
    private _content: string;
    private _class: string;

    get content(): string {
        return this._content;
    }

    get class(): string {
        return this._class;
    }
}