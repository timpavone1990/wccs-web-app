import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Site} from "../site";
import {Page} from "../page";
import {SiteService} from "../site.service";

@Component({
    selector: 'site-selector',
    templateUrl: './site-selector.component.html'
})
export class SiteSelectorComponent implements OnInit {
    @Output() siteSelected = new EventEmitter<Site>();
    private _selectedSite: Site;
    private _sites: Site[];

    constructor(private siteService: SiteService) { }

    ngOnInit(): void {
        this.siteService.getSites().then(sites => {
            this._sites = sites
        });
    }

    get sites() {
        if (this._sites) {
            return this._sites.sort((siteA: Site, siteB: Site) => {
                return siteA.name.localeCompare(siteB.name);
            });
        }
        return [];
    }

    get selectedSite() {
        return this._selectedSite;
    }

    setSelectedSite(site: Site) {
        this._selectedSite = site;
        this.siteSelected.emit(site);
    }
}