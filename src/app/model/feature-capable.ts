export abstract class FeatureCapable {
    private _contents: object;
    private _references: object;

    get contents(): object {
        return this._contents;
    }

    get references(): object {
        return this._references;
    }
}