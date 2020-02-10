import {AI } from "../ai";

export class Dummy extends AI {
    constructor() {//Здесь хранятся все параметры, например, какие задачи у персонажа, его память, что делает прямо сейчас и т.д.
        super();
        this.duration = 1000;//Меняет направление каждые 1000 мс
        this.direction = "down";
        this.lastTime = 0;//Когда в последний раз менял направление
    }

    changeDirection() {//Один из блоков принятия решений
        this.direction = "down,up,left,right".split(',')[Math.floor(Math.random()*4)];
    }

    update(time){
        if((time - this.lastTime) > this.duration) {
            this.changeDirection();
            this.lastTime = time;
        }
        this.body.walk(this.direction);
        super.update(time);
    }
}