import {Component, Input} from "@angular/core";
import {Site} from "../site-selector/site";

@Component({
    selector: "pages-list",
    templateUrl: "./pages-list.component.html"
})
export class PagesListComponent {
    @Input() site: Site;
}