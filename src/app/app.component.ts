import {Component} from '@angular/core';
import {Site} from "./site";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private _title = "WebContent Typing System";

    get title() {
        return this._title;
    }
}
