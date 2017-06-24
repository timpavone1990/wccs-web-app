import {Injectable} from "@angular/core";
import {Page} from "./page";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PageService {
    constructor(private http: Http) {
    }

    getPages(siteId: string): Promise<Page[]> {
        return this.http.get("http://storage-api:52629/sites/" + siteId + "/pages")
            .toPromise().then(response => response.json().map(page => new Page(page.url, page.status)))
            .catch(this.handleError)
    }

    getPage(siteId: string, pageId: string): Promise<Page> {
        return this.http.get("http://storage-api:52629/sites/" + siteId + "/pages/" + pageId.replace(/\//g, ""))
            .toPromise().then(response => {
                let rawPage = response.json();
                return new Page(rawPage.url, rawPage.status);
            })
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error("An error ocurred", error);
        return Promise.reject(error.message || error);
    }
}