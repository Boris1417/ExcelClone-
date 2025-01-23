import { range } from "../../core/utils";

export function shouldResize(event) {
  return event.target.dataset.resize;
}
export function isCell(event) {
  return event.target.dataset.type === "cell";
}
export function matrix($target, $current) {
  const target = $target.id(true);
  const current = $current.id(true);
  const cols = range(current.col, target.col);
  const rows = range(current.row, target.row);
  return cols.reduce((acc, col) => {
    rows.forEach((row) => acc.push(`${row}:${col}`));
    return acc;
  }, []);
}
export function nextSelector(key, { col, row } , MAX_NUMBER_ROW = 5) {
  const MIN_NUMBER = 0;
  const MAX_NUMBER_ALFABET = 25
  switch (key) {
    case "Enter":
    case "ArrowDown":
      row++
      if (row == MAX_NUMBER_ROW){ 
        row=0
      }
      break;
    case "Tab":
    case "ArrowRight":
      col++ 
      if (col == MAX_NUMBER_ALFABET){ 
        col = 0 
      }
      break;
    case "ArrowLeft":
      col = col - 1 < MIN_NUMBER ? col : col - 1;
      break;
    case "ArrowUp":
      row = row - 1 < MIN_NUMBER ? row : row - 1;
      break;
  }
  return `[data-id = "${row}:${col}"]`;
}
