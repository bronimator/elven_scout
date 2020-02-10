export class Sprite {//Вручную спрайты через этот класс не создаются. С этим классом работает "фабрика" спрайтов sprite-sheet.js
    constructor({imageName, sourceX, sourceY, width = 64, height =64}) {
        this.imageName = imageName;
        this.sourceX = sourceX;//Координаты нужного спрайта на исходной картинке
        this.sourceY = sourceY;
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = 0;
    }

    setXY(x, y) {
        this.x = x;
        this.y = y;
    }
}