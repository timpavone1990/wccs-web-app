import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {Site} from "../site";
import {Page} from "../page";

@Component({
    selector: "pages-list",
    templateUrl: "./pages-list.component.html"
})
export class PagesListComponent {
    @Input() site: Site;

    constructor(private router: Router) { }

    showPageDetails(page: Page) {
        this.router.navigate(["/page"], { "queryParams": { "page": page.url } })
    }
}