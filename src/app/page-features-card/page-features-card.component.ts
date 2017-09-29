import {Component, Input} from "@angular/core";
import {Page} from "../model/page";
import {FeatureCardItem} from "./FeatureCardItem";
import {Property} from "../model/property";
import {FeatureCapable} from "../model/feature-capable";
import {Reference} from "../model/reference";

@Component({
    selector: "page-features-card",
    templateUrl: "./page-features-card.component.html"
})
export class PageFeaturesCardComponent {
    private _page: Page;

    @Input()
    set page(page: Page) {
        this._page = page;
    }

    get page(): Page {
        return this._page;
    }

    private composeFeatures(path: string, featureCapable: FeatureCapable, features: Array<FeatureCardItem>) {
        const propertyNames = Object.keys(featureCapable.properties);

        propertyNames.forEach(name => {
            const property = featureCapable.properties[name] as Property;
            if (Array.isArray(property)) {
                property.forEach((item, index) => {
                    const itemPath = `${path} \u25B6 ${name}[${index}]`;
                    this.composeFeatures(itemPath, item, features)
                });
            } else {
                const myPath = path + " \u25B6 " + name;
                features.push(new FeatureCardItem(myPath, property.content));
                this.composeFeatures(myPath, property, features);
            }
        });

        const referenceNames = Object.keys(featureCapable.references);
        referenceNames.forEach(name => {
            const reference = featureCapable.references[name] as Reference;
            if (Array.isArray(reference)) {
                reference.forEach((item, index) => {
                    const itemPath = `${path} \u25B6 ${name}[${index}]`;
                    features.push(new FeatureCardItem(itemPath, item.destination));
                });
            } else {
                const myPath = path + " \u25B6 " + name;
                features.push(new FeatureCardItem(myPath, reference.destination));
            }
        })
    }

    get features(): Array<FeatureCardItem> {
        const features = Array<FeatureCardItem>();
        this.composeFeatures("", this._page, features);
        return features.sort((a, b) => {
            return a.id.localeCompare(b.id);
        });
    }
}