import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Site} from "./site";

@Injectable()
export class SiteService {
    constructor(private http: Http) { }

    getSites(): Promise<Site[]> {
        return this.http.get("http://storage-api:52629/sites")
            .toPromise().then(response => response.json().sites.map((site) => new Site(site.name)))
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error("An error ocurred", error);
        return Promise.reject(error.message || error);
    }
}