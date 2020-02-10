import { Sprite } from "./sprite";
import {Animation} from './animation';

export class SpriteSheet {//Фабрика спрайтов. Чтобы вручную не создавать спрайты (объекты Sprite) и анимацию (Animation extends Sprite)
    constructor({imageName, imageWidth, imageHeight, spriteWidth = 64, spriteHeight = 64}) {
        this.imageName = imageName;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
    }

    getAnimation(indexes,speed, repeat = true, autorun = true){
        return new Animation({
            imageName: this.imageName,
            frames: indexes.map(index => ({sx:this.getSourceX(index), sy:this.getSourceY(index)})),//[1,2] => [{sx:this.getSourceX(1), sy:this.getSourceY(1)},  {sx:this.getSourceX(2), sy:this.getSourceY(2)}]  
            speed: speed,
            repeat:  repeat,
            autorun: autorun,
            width: this.spriteWidth,
            height: this.spriteHeight
        });
    }

    getSprite(index){//Находим координаты спрайта по порядковому номеру
       return new Sprite({
        imageName: this.imageName,
        sourceX: this.getSourceX(index),
        sourceY: this.getSourceY(index),
        width: this.spriteWidth,
        height: this.spriteHeight
        })
    }

    getSourceX(index){//Спрайты получаем по порядковому номеру. index будет начинаться с единицы, а внутри функции нумирация начинается с нуля, поэтому --index
        return (--index * this.spriteWidth) % this.imageWidth; 
    }

    getSourceY(index){
        return Math.trunc((--index * this.spriteWidth) / this.imageWidth)*this.spriteHeight;//Math.trunc - возвращает целую часть числа путём удаления всех дробных знаков
    }
}