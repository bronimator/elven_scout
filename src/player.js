import { Body } from "./body";

export class Player extends Body{ //Player -> Body ~ CharacterSheet -> SpriteSheet ~ Sprite
    constructor(control, game_level){//control - управление клавиатурой
        super({imageName:'player', speed: 150});
        this.control=control;
        this.game_level = game_level;
        this.arrow = false;//Позволяем стрелять только если на руках есть стрела
        this.timeArrow = 1000// Константа, время между появлением следующей стрелы, чтобы стрелы не создавались как из пулемёта
        this.timerForCreatingArrow = 0;//Таймер для стрел
        this.lastTimeForArrow = 0;
        this.name = 'player';//Для коллайдера, что опознать этот объект

        this.healthStart = 3;//Начальное количество жизней
        this.health = this.healthStart;

        this.undead = 1000;//Константа времени бессмертия, после получения урона игрок бессмертен
        this.timerUndead = -1;/*Таймер для обратного отсчёта. Если он равен диапазону от 0 до this.undead, значит идёт обратный отсчёт и игрок бессмертен
                                Если -1, игрок может получить урон*/
        this.lastTimeForUndead = 0;
    }

    addArrow(arrow){
        this.arrow = arrow;
    }

    getHit(){//Игрок получил удар
        if(this.timerUndead === -1){//Если игрок смертен
            if(this.health>0)
                this.health -=1;
            this.timerUndead = this.undead;//Делаем игрока бессмертным на время
        }
    }

    update(time) {
        if(this.lastTimeForArrow === 0){
            this.lastTimeForArrow = time;
        }

        if(this.lastTimeForUndead === 0){
            this.lastTimeForUndead = time;
        }

        if(this.control.fire) {
            if(this.timerForCreatingArrow === 0){//Если стрелу можно создавать
                this.timerForCreatingArrow = this.timeArrow;
                this.game_level.shooting();
                if(this.arrow)
                    this.shoot(this.arrow);//Использовать именно эту стрелу, т.к. персонаж может иметь разные стрелы
            }

        } else if(this.control.up) {
            this.walk("up");
        } else if(this.control.down) {
            this.walk("down");
        } else if(this.control.left) {
            this.walk("left");
        } else if(this.control.right) {
            this.walk("right");
        } else {
            this.stand(this.velocity.direction);
        }

        if(this.timerForCreatingArrow > 0)
            this.timerForCreatingArrow -=(time - this.lastTimeForArrow);
        else
            this.timerForCreatingArrow = 0;

        this.lastTimeForArrow = time;
        
        if(this.timerUndead != -1){//Игрок бессмертен, this.timerUndead > 0
            this.timerUndead -=(time - this.lastTime);
            if (this.timerUndead < 0){
                this.timerUndead = -1;//Игрок снова смертен
            }
        }

        this.lastTimeForUndead = time;

        super.update(time);
    }//update
}