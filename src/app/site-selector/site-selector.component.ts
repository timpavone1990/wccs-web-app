import {Component, EventEmitter, Output} from '@angular/core';
import {Site} from "./site";

@Component({
    selector: 'site-selector',
    templateUrl: './site-selector.component.html'
})
export class SiteSelectorComponent {
    @Output() siteSelected = new EventEmitter<Site>();
    private _selectedSite: Site;

    private _sites: Site[] = [
        new Site("B.A. Bildungswissenschaft"),
        new Site("B.A. Kulturwissenschaften mit Fachschwerpunkt Geschichte, Literaturwissenschaft, Philosophie"),
        new Site("B.A. Politikwissenschaft, Verwaltungswissenschaft, Soziologie (PVS)"),
        new Site("B.Sc. Psychologie"),
        new Site("M.A. Bildung und Medien - eEducation"),
        new Site("M.A. Europäische Moderne: Geschichte und Literatur"),
        new Site("M.A. Geschichte Europas - Epochen, Umbrüche, Verflechtungen"),
        new Site("M.A. Governance"),
        new Site("M.A. Philosophie - Philosophie im europäischen Kontext"),
        new Site("M.Sc. Psychologie"),
        new Site("M.A. Soziologie – Zugänge zur Gegenwartsgesellschaft"),
        new Site("B.A. Kulturwissenschaften (ohne Fachschwerpunkt)"),
        new Site("B.A. Soziologie"),
        new Site("M.A. Soziologie: Individualisierung und Sozialstruktur"),
        new Site("Institut für Bildungswissenschaft und Medienforschung")
    ];

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