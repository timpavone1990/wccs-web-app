import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {Site} from "../model/site";
import {Page} from "../model/page";
import {PageService} from "../page.service";

@Component({
    selector: "pages-list",
    styleUrls: ["./pages-list.component.css"],
    templateUrl: "./pages-list.component.html"
})
export class PagesListComponent {
    private _site: Site;
    private _pages: Page[] = [];
    private _currentPage: number = 1;

    constructor(private router: Router, private pageService: PageService) { }

    get pages(): Page[] {
        return this._pages;
    }

    showPageDetails(page: Page) {
        this.router.navigate(["/page"], { "queryParams": { "site": this._site.id, "page": page.url } })
    }

    @Input()
    set site(site: Site) {
        this._site = site;
        if (this._site) {
            this.pageService
                .getPages(this._site.id)
                .then(pages => {
                    this._pages = pages.sort((a, b) => {
                        if (a.url < b.url) {
                            return -1;
                        } else if (a.url > b.url) {
                            return 1;
                        } else {
                            return 0;
                        }
                    })
                });
        }
    }

    get site(): Site {
        return this._site;
    }


    get currentPage(): number {
        return this._currentPage;
    }

    set currentPage(value: number) {
        this._currentPage = value;
    }
}