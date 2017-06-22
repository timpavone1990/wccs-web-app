import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Site} from "./site";
import {Page} from "../page";

@Component({
    selector: 'site-selector',
    templateUrl: './site-selector.component.html'
})
export class SiteSelectorComponent implements OnInit {
    @Output() siteSelected = new EventEmitter<Site>();
    private _selectedSite: Site;
    private _sites: Site[];

    ngOnInit(): void {
        let siteNames = [
            "B.A. Bildungswissenschaft",
            "B.A. Kulturwissenschaften mit Fachschwerpunkt Geschichte, Literaturwissenschaft, Philosophie",
            "B.A. Politikwissenschaft, Verwaltungswissenschaft, Soziologie (PVS)",
            "B.Sc. Psychologie",
            "M.A. Bildung und Medien - eEducation",
            "M.A. Europäische Moderne: Geschichte und Literatur",
            "M.A. Geschichte Europas - Epochen, Umbrüche, Verflechtungen",
            "M.A. Governance",
            "M.A. Philosophie - Philosophie im europäischen Kontext",
            "M.Sc. Psychologie",
            "M.A. Soziologie – Zugänge zur Gegenwartsgesellschaft",
            "B.A. Kulturwissenschaften (ohne Fachschwerpunkt)",
            "B.A. Soziologie",
            "M.A. Soziologie: Individualisierung und Sozialstruktur",
            "Institut für Bildungswissenschaft und Medienforschung"
        ];

        this._sites = [];

        let states = ["Analyzing", "Analysed", "In Review", "Waiting", "Approved"];

        siteNames.forEach((siteName) => {
            let numberOfPages = Math.floor(Math.random() * 10) + 1;
            let cleanedSiteName = siteName
                .replace(/\./g, "")
                .replace(/\s/g, "")
                .replace(/\(/g, "")
                .replace(/\)/g, "")
                .replace(/,/g, "");

            let pages: Page[] = [];
            for (let i = 0; i < numberOfPages; i++) {
                let page = new Page("http://www.fernuni-hagen.de/ksw/" + cleanedSiteName + "/page" + i, states[Math.floor(Math.random() * 5)]);
                pages.push(page);
            }

            let site = new Site(siteName, pages);
            this._sites.push(site);
        })
    }

    get sites() {
        return this._sites.sort((siteA: Site, siteB: Site) => {
            return siteA.name.localeCompare(siteB.name);
        });
    }

    get selectedSite() {
        return this._selectedSite;
    }

    setSelectedSite(site: Site) {
        this._selectedSite = site;
        this.siteSelected.emit(site);
    }
}