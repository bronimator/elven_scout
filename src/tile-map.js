import { Sprite } from "./sprite";

export class TileMap extends Sprite {//Подключим карту, это просто спрайт с контейнером данных для коллизий (массив hitboxes)
    constructor(props) {
        super(props);
        this.hitboxes = props.hitboxes || [];
    }
}
//На карте много объектов, для оптимизации делаем пререндер (заранее отрисовать карту и использовать как картинку). Для этого удобно использовать screen.js