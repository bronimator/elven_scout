import { Vector } from "./vector";

export class Projectile{//Его расширяет projectiles/arrow.js
    constructor(direction,speed, x, y){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.direction = direction;
        this.velocity = new Vector(this.direction,speed);
        this.lastTime = 0;
        this.active = false;//Если стрела активна, она отображается через this.game.screen.drawSprite и летит в цель. А вообще стрела в невидимом состоянии всегда находится на экране
        this.collisionShape= {x:27,y:27,width:10,height:10};//Нужно для коллайдера (расчёт столкновений). Размер спрайта 64х64
        this.deleted = false;//Родитель будет отслеживать эту переменную, если она true, значит родитель удалит этот объект
    }

    fly(x,y,direction){
        this.x = x;
        this.y =y;
        this.velocity.setDirection(direction, this.speed);
        this.active = true;
    }

    stop(){//При попадании в статичное препятствие, projectile теряет скорость
        this.speed = 0;
        this.velocity = new Vector(this.direction,this.speed);
    }

    delete(){
        this.deleted = true;
    }

    update(time){
        if(this.lastTime == 0){//Инициализация  this.lastTime
            this.lastTime = time;
            return;
        }
        this.velocity.move(this, time - this.lastTime);
        this.view.setXY(Math.trunc(this.x), Math.trunc(this.y));//На этом этапе пока не известно что это будет спрайт или анимация
        this.lastTime = time;
    }
}