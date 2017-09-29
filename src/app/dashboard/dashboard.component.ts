import {Component} from "@angular/core";
import {Site} from "../model/site";

@Component({
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
    private _site: Site;

    updatePagesList(site: Site) {
        this._site = site;
    }

    get site(): Site {
        return this._site;
    }
}