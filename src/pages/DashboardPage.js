import { Page } from "../core/Page";
import { $ } from "../core/dom";
import { createRecordsTable } from "./dashboard.functions";

export class DashboardPage extends Page {
  getRoot() {
    const nowId = Date.now().toString();
    return $.create("div", "db").html(`
  <div class="db_header">
    <h1>Excel Clone</h1>
  </div>
  <div class="db_new">
    <div class="db_view">
      <a href="#excel/${nowId}" class="db_create">
        Новая <br />
        Таблица
      </a>
    </div>
  </div>
  <div class="db_table db_view">
    ${createRecordsTable()}
  </div>
        `);
  }
}
