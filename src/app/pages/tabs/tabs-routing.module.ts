/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        loadChildren: () =>
          import("../dashboard/dashboard.module").then(
            (m) => m.DashboardPageModule
          ),
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("../daily-work/daily-work.module").then(
            (m) => m.DailyWorkPageModule
          ),
      },
      {
        path: "tab3",
        loadChildren: () =>
          import("../tokens/tokens.module").then((m) => m.TokensPageModule),
      },
      {
        path: "tab4",
        loadChildren: () =>
          import("../monthly-work-report/monthly-work-report.module").then(
            (m) => m.MonthlyWorkReportPageModule
          ),
      },
      {
        path: "tab5",
        loadChildren: () =>
          import("../profile/profile.module").then((m) => m.ProfilePageModule),
      },

      {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/tab1",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
