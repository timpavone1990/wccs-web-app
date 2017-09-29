import {Injectable} from "@angular/core";
import {Page} from "./model/page";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PageService {
    constructor(private http: Http) {
    }

    getPages(siteId: string): Promise<Page[]> {
        // TODO Set correct hostname
        return this.http.get("http://localhost:52629/sites/" + siteId + "/pages")
            .toPromise().then(response => {
                return response.json().pages.map(page => page as Page)
            })
            .catch(this.handleError)
    }

    getPage(siteId: string, pageId: string): Promise<Page> {
        return this.http.get("http://localhost:52629/sites/" + siteId + "/pages/" + encodeURIComponent(pageId))
            .toPromise().then(response => response.json() as Page)
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error("An error ocurred", error);
        return Promise.reject(error.message || error);
    }
}