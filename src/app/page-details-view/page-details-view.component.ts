import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {PageService} from "../page.service";
import {Page} from "../model/page";

@Component({
    templateUrl: "./page-details-view.component.html"
})
export class PageDetailsViewComponent implements OnInit, OnDestroy {
    private _page: Page;
    private sub: Subscription;

    constructor(private route: ActivatedRoute, private pageService: PageService) { }

    ngOnInit(): void {
        this.sub = this.route.queryParams.subscribe((params: Params) => {
            this.pageService
                .getPage(params["site"], params["page"])
                .then(page => this._page = page);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    get page() {
        return this._page;
    }
}