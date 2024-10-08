import imgs from "../img/goblin.png";
export class Game {
  constructor(item) {
    this._item = item;
  }
  startGame() {
    //цикл для создания элементов
    for (let i = 0; i <= 16; i++) {
      const element = document.createElement("div");
      element.classList.add("field-item");
      this._item.appendChild(element);
    }
    //перемещение картинки
    const img = document.createElement("img");
    img.src = imgs;
    img.classList.add("img");
    setInterval(() => {
      const elementImg = document.querySelectorAll(".field-item");
      let imgs = document.querySelector(".img");
      if (imgs) {
        for (let element of elementImg) {
          if (element.querySelector(".img")) {
            element.remove(imgs);
          }
        }
      }
      const position = Math.floor(Math.random() * 15);
      elementImg[position].appendChild(img);
    }, 2000);
  }
}
