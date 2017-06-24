import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {Site} from "../site";
import {Page} from "../page";
import {PageService} from "../page.service";

@Component({
    selector: "pages-list",
    templateUrl: "./pages-list.component.html"
})
export class PagesListComponent {
    private _site: Site;
    private _pages: Page[] = [];

    constructor(private router: Router, private pageService: PageService) { }

    get pages(): Page[] {
        return this._pages;
    }

    showPageDetails(page: Page) {
        this.router.navigate(["/page"], { "queryParams": { "site": this._site.name, "page": page.url } })
    }

    @Input()
    set site(site: Site) {
        this._site = site;
        if (this._site) {
            this.pageService
                .getPages(this._site.name)
                .then(pages => this._pages = pages);
        }
    }

    get site(): Site {
        return this._site;
    }
}