import {AI } from "../ai";
import {isAgressive} from './isAgressive';

export class Peaceful extends AI {
    constructor(player) {//Здесь хранятся все параметры, например, какие задачи у персонажа, его память, что делает прямо сейчас и т.д.
        super();
        this.duration = 1050;//Меняет направление каждые 1000 мс
        this.direction = "left";
        this.lastTimeDumb = 0;//Когда в последний раз менял направление
        this.lastTime = 0;
        this.player = player;//Передаём игрока, чтобы орк мог следить за ним и атаковать его
        
        this.stuck = false;//Если true, орк уперся в стену
        this.changeWayInit = 500;//Если уперся в препятствие, это время он двигается в любом другом направлении в надежде обойти препятствие
        this.changeWay = this.changeWayInit;
        this.oldX = 0;//В эти переменные будем писать старые координаты. Если новые координаты равны старым, значит орк уперся в препятствие
        this.oldY = 0;

        this.lastTimeAgressive = 0;
        this.durationAgressive = 500;//Насколько часто меняют направление агрессивные орки
        this.timeOfMarch = 4560;//Когда орк только появился, это время он просто движется в одном направлении. После - начинает действовать самостоятельно
    }

    changeDirection() {//Один из блоков принятия решений
        this.direction = "up,left".split(',')[Math.floor(Math.random()*2)];
        // this.direction = "down,up,left,right".split(',')[Math.floor(Math.random()*4)];

        // //Уменьшим вероятность перемещения орка вправо или вниз
        // if(this.direction == 'down'){
        //     if(Math.random()>0.9){
        //         this.changeDirection();
        //     }
        // }
    }


    

    update(time){
        if(this.lastTime == 0){
            this.lastTime = time;
        }


        if(this.timeOfMarch > 0){//Орк ещё марширует, т.е. заходит на локацию
            this.timeOfMarch -= time - this.lastTime;
        }else if(this.stuck){//Если орк застрял, дальнейших проверок else if не будет
            this.changeWay -= time - this.lastTime;
            if(this.changeWay < 0){
                this.changeWay = this.changeWayInit;
                this.stuck = false;
            }
        }else if(isAgressive.isOrcAgressive()){//Проверка орка на агрессию
            this.agressiveBehaviour(time);
            this.isStuck();
        }else{
            this.dumbBehaviour(time);
            this.isStuck();
        }


        this.lastTime = time;
        this.body.walk(this.direction);
        super.update(time);
    }




    dumbBehaviour(time){
        if((time - this.lastTimeDumb) > this.duration) {
            this.changeDirection();
            this.lastTimeDumb = time;
        }
    }



    agressiveBehaviour(time){
        // if(this.body.gotPlayer){
            let correction = 10;//орк бьёт на расстоянии 5, ему не нужно быть вплотную к игроку (иначе орк бьёт только при столкновении с игроком, а орки избегают столкновений)
            if(this.body.x + this.body.collisionShape.x - correction < this.player.x + this.player.collisionShape.x + this.player.collisionShape.width &&
                this.body.x + this.body.collisionShape.x + this.body.collisionShape.width + correction > this.player.x + this.player.collisionShape.x &&
                this.body.y + this.body.collisionShape.y -correction < this.player.y + this.player.collisionShape.y + this.player.collisionShape.height &&
                this.body.y + this.body.collisionShape.y + this.body.collisionShape.height +correction> this.player.y + this.player.collisionShape.y)
                this.attack();
        // }
        if((time - this.lastTimeAgressive) > this.durationAgressive) {
            this.changeAgressiveDirection();
            this.lastTimeAgressive = time;
        }


    }


    changeAgressiveDirection(){
        if(this.body.x >= this.player.x && this.body.y >= this.player.y){
            if(Math.random()>0.5){
                this.direction = 'left';
            }else{
                this.direction = 'up';
            }
        }
        if(this.body.x < this.player.x && this.body.y >= this.player.y){
            if(Math.random()>0.5){
                this.direction = 'right';
            }else{
                this.direction = 'up';
            }
        }
        if(this.body.x < this.player.x && this.body.y < this.player.y){
            if(Math.random()>0.5){
                this.direction = 'right';
            }else{
                this.direction = 'down';
            }
        }
        if(this.body.x >= this.player.x && this.body.y < this.player.y){
            if(Math.random()>0.5){
                this.direction = 'left';
            }else{
                this.direction = 'down';
            }
        }
    }


    isStuck(){//Проверка, возможно орк уперся в препятствие
        if(this.body.x == this.oldX && this.body.y == this.oldY) {
            this.stuck = true;
            if(this.direction == 'up' || this.direction == 'down'){
                if(Math.random() >0.5){
                    this.direction = 'right';
                }else{
                    this.direction = 'left';
                }
                return;
            }
            if(this.direction == 'right' || this.direction == 'left'){
                if(Math.random() >0.5){
                    this.direction = 'up';
                }else{
                    this.direction = 'down';
                }
                return;
            }
        }
        this.oldX = this.body.x;
        this.oldY = this.body.y;
    }

    attack(){
        this.body.hit();
        // this.body.gotPlayer = false;
        this.player.getHit();
    }

}