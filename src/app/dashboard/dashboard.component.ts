import {Component} from "@angular/core";
import {Site} from "../site";

@Component({
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
    private site: Site;

    updatePagesList(site: Site) {
        this.site = site;
    }
}