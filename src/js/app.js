import Area from "./Area";

const container = document.querySelector('.area-container');
const area = new Area(container);
area.generateCells(16);
area.getActiveCell();
