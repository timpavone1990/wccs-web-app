import {Page} from "../page";

export class Site {
    constructor(private _name: string, private _pages: Page[]) { }

    get name() {
        return this._name;
    }

    get pages() {
        return this._pages;
    }
}