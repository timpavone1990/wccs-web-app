import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PageDetailsViewComponent} from "./page-details-view/page-details-view.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "page",
        component: PageDetailsViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}