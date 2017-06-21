import {Component} from '@angular/core';
import {Site} from "./site-selector/site";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "WebContent Typing System";

    private site: Site;

    updatePagesList(site: Site) {
        this.site = site;
    }
}
