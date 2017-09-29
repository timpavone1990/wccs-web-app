export abstract class FeatureCapable {
    private _properties: object;
    private _references: object;

    get properties(): object {
        return this._properties;
    }

    get references(): object {
        return this._references;
    }
}