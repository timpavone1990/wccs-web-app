import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {SiteSelectorComponent} from "./site-selector/site-selector.component";
import {PagesListComponent} from "./pages-list/pages-list.component";

@NgModule({
    declarations: [
        AppComponent,
        PagesListComponent,
        SiteSelectorComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
