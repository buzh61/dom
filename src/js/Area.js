export default class Area {
  constructor(container) {
    this.container = container
  }

  generateCells(count) {
    for (let i = 0; i < count; i++) {
      const cell = '<div class="cell"></div>';
      this.container.innerHTML += cell;

    }
  }

  getRandomCell(index) {
    const result = Math.floor(Math.random() * (this.container.childNodes.length - 1));

    if (result === index) {
      return this.getRandomCell(index);
    }

    return result;
  }

  getActiveCell() {
    let index = 0;

    setInterval(() => {
      const activeCell = this.container.querySelector('.active');

      if (activeCell) {
        activeCell.classList.remove('active');
      }
      index = this.getRandomCell(index);
      const cell = this.container.childNodes[index];
      cell.classList.add('active');
    }, 1500);
  }
}
