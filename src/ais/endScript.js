import {AI } from "../ai";

export class EndScript extends AI {
    constructor() {//Здесь хранятся все параметры, например, какие задачи у персонажа, его память, что делает прямо сейчас и т.д.
        super();
        this.direction = 'left';
        this.eventTime = 1500;
        this.lastTime = 0;
        this.eventStart = false;
    }

    update(time){
        if(this.lastTime == 0){
            this.lastTime = time;
        }
        this.eventTime -= time - this.lastTime;

        if(!this.eventStart){//Если событие ешё не началось
            if(this.eventTime < 0) {
                this.eventStart = true;//Врубаем событие
                this.body.hit(this.direction);//Событие - орк бьёт
            }
            this.body.walk(this.direction);
        }else{
            this.body.stand(this.direction);
        }
        

        this.lastTime = time;
        super.update(time);
    }
}