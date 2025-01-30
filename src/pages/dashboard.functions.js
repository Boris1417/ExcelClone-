import { storage } from "../core/utils";

function toHTML(key) {
  const model = storage(key)
  const id = key.split(":")[1]
  return `
    <li class="db__record">
        <a href="#excel/${id}">${model.title}</a>
        <strong>15.01.2025</strong>
    </li>
    `;
}
function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes("excel")) {
      continue;
    } else {
      keys.push(key);
    }
  }
  return keys;
}
export function createRecordsTable() {
  const keys = getAllKeys();
  console.log("key", keys);
  if (!keys.length) {
    return `<p class="db__list-header">No tables</div>`;
  }
  return `
    <div class="db__list-header">
      <span>Название</span>
      <span>Дата открытия</span>
    </div>
    <ul class="db__list">
      ${keys.map(toHTML).join("")}
    </ul>
    `;
}
