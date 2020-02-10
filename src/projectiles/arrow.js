import { Projectile } from "../projectile";
import { SpriteSheet } from "../sprite-sheet";

export class Arrow extends Projectile{
    constructor(direction, speed, x, y){
        super(direction,speed,x ,y);
        this.sprites= {};
        this.name = 'arrow';//Для коллайдера, что опознать этот объект
        const tiles = new SpriteSheet({
            imageName: 'tiles',
            imageWidth:640,
            imageHeight:640
        });
        this.sprites['left'] = tiles.getSprite (36);
        this.sprites['right'] = tiles.getSprite (37);
        this.sprites['down'] = tiles.getSprite (46);
        this.sprites['up'] = tiles.getSprite (47);
        this.view = this.sprites[direction];//Какой спрайт стрелы отобразить зависит от направления персонажа
    }

    fly(x,y,direction){
        super.fly(x,y,direction);
        this.view = this.sprites[direction];
    }
}