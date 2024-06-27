import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "tabs",
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "filter",
    loadChildren: () =>
      import("./pages/filter/filter.module").then((m) => m.FilterPageModule),
  },
  {
    path: "find",
    loadChildren: () =>
      import("./pages/find/find.module").then((m) => m.FindPageModule),
  },
  {
    path: "forgot",
    loadChildren: () =>
      import("./pages/forgot/forgot.module").then((m) => m.ForgotPageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "reset-password",
    loadChildren: () =>
      import("./pages/reset-password/reset-password.module").then(
        (m) => m.ResetPasswordPageModule
      ),
  },
  {
    path: "verification",
    loadChildren: () =>
      import("./pages/verification/verification.module").then(
        (m) => m.VerificationPageModule
      ),
  },
  {
    path: "edit-profile",
    loadChildren: () =>
      import("./pages/edit-profile/edit-profile.module").then(
        (m) => m.EditProfilePageModule
      ),
  },
  {
    path: "success",
    loadChildren: () =>
      import("./pages/success/success.module").then((m) => m.SuccessPageModule),
  },
  {
    path: "notification",
    loadChildren: () =>
      import("./pages/notification/notification.module").then(
        (m) => m.NotificationPageModule
      ),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./pages/dashboard/dashboard.module").then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: "daily-work",
    loadChildren: () =>
      import("./pages/daily-work/daily-work.module").then(
        (m) => m.DailyWorkPageModule
      ),
  },
  {
    path: "tokens",
    loadChildren: () =>
      import("./pages/tokens/tokens.module").then((m) => m.TokensPageModule),
  },
  {
    path: "monthly-work-report",
    loadChildren: () =>
      import("./pages/monthly-work-report/monthly-work-report.module").then(
        (m) => m.MonthlyWorkReportPageModule
      ),
  },
  {
    path: "client-list",
    loadChildren: () =>
      import("./pages/client-list/client-list.module").then(
        (m) => m.ClientListPageModule
      ),
  },
  {
    path: "employee-list",
    loadChildren: () =>
      import("./pages/employee-list/employee-list.module").then(
        (m) => m.EmployeeListPageModule
      ),
  },
  {
    path: "ces-design-token",
    loadChildren: () =>
      import("./pages/ces-design-token/ces-design-token.module").then(
        (m) => m.CesDesignTokenPageModule
      ),
  },
  {
    path: "help-desk",
    loadChildren: () =>
      import("./pages/help-desk/help-desk.module").then(
        (m) => m.HelpDeskPageModule
      ),
  },
  {
    path: "todo-list",
    loadChildren: () =>
      import("./pages/todo-list/todo-list.module").then(
        (m) => m.TodoListPageModule
      ),
  },
  {
    path: "tokens-details",
    loadChildren: () =>
      import("./pages/tokens-details/tokens-details.module").then(
        (m) => m.TokensDetailsPageModule
      ),
  },
  {
    path: "employee-full-details",
    loadChildren: () =>
      import("./pages/employee-full-details/employee-full-details.module").then(
        (m) => m.EmployeeFullDetailsPageModule
      ),
  },
  {
    path: "employee-delete",
    loadChildren: () =>
      import("./pages/employee-delete/employee-delete.module").then(
        (m) => m.EmployeeDeletePageModule
      ),
  },
  {
    path: "calender",
    loadChildren: () =>
      import("./pages/calender/calender.module").then(
        (m) => m.CalenderPageModule
      ),
  },
  {
    path: "client-full-details",
    loadChildren: () =>
      import("./pages/client-full-details/client-full-details.module").then(
        (m) => m.ClientFullDetailsPageModule
      ),
  },
  {
    path: "client-delete",
    loadChildren: () =>
      import("./pages/client-delete/client-delete.module").then(
        (m) => m.ClientDeletePageModule
      ),
  },
  {
    path: "new-ticket",
    loadChildren: () =>
      import("./pages/new-ticket/new-ticket.module").then(
        (m) => m.NewTicketPageModule
      ),
  },
  {
    path: "client-dashboard-todo-list",
    loadChildren: () =>
      import(
        "./pages/client-dashboard-todo-list/client-dashboard-todo-list.module"
      ).then((m) => m.ClientDashboardTodoListPageModule),
  },
  {
    path: "ces-token-details",
    loadChildren: () =>
      import("./pages/ces-token-details/ces-token-details.module").then(
        (m) => m.CesTokenDetailsPageModule
      ),
  },
  {
    path: "token-delete",
    loadChildren: () =>
      import("./pages/token-delete/token-delete.module").then(
        (m) => m.TokenDeletePageModule
      ),
  },
  {
    path: "dailydetails",
    loadChildren: () =>
      import("./pages/dailydetails/dailydetails.module").then(
        (m) => m.DailydetailsPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
