import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {SiteSelectorComponent} from "./site-selector/site-selector.component";
import {PagesListComponent} from "./pages-list/pages-list.component";
import {PageDetailsViewComponent} from "./page-details-view/page-details-view.component";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageService} from "./page.service";
import {SiteService} from "./site.service";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        PageDetailsViewComponent,
        PagesListComponent,
        SiteSelectorComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        NgbModule.forRoot()
    ],
    providers: [
        PageService,
        SiteService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
