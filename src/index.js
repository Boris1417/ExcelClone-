
import "./scss/index.scss";
import { Router } from "./core/router/router";
import { DashboardPage } from "./pages/DashboardPage";
import { ExcelPage } from "./pages/ExcelPage";

new Router("#app", {
  dashboard: DashboardPage,
  excel: ExcelPage
});
