import {Injectable} from "@angular/core";
import {Page} from "./page";

@Injectable()
export class PageService {
    getPage(id: string) {
        return new Page(id, "Approved");
    }
}