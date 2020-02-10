//Основа всех персонажей
import { Vector } from "./vector";
import { CharacterSheet } from "./character-sheet";

export class Body {//Player -> Body ~ CharacterSheet -> SpriteSheet ~ Sprite
    constructor({imageName, speed}) {
        this.x = -100;//Положение объекта
        this.y = -100;
        this.speed = speed;//Скорость перемещения
        this.velocity = new Vector("left", 0);//Направление перемещения
        this.lastTime = 0;//Время последнего кадра
        this.animations = {};//Контейнер для хранения анимаций {walk_down: .., walk_up: .. и т.д. }

        //Форма, которая будет использоваться для коллизии. Она начинается не от левого верхнего угла спрайта, а от x: 18, y: 15
        this.collisionShape = {x: 18, y: 15, width: 28, height: 49};

        this.isShooting = false;
        this.isHitting = false;

        //Загружаем необходмые анимации для данного персонажа
        const animationSheet = new CharacterSheet({imageName: imageName});
        "walk_down,walk_up,walk_left,walk_right".split(",").forEach(name => {
            this.animations[name] = animationSheet.getAnimation(name);//В итоге this.animations = {walk_down: .., walk_up: .. и т.д. }
        });
        "shoot_down,shoot_up,shoot_left,shoot_right".split(",").forEach(name => {
            this.animations[name] = animationSheet.getAnimation(name, 50, false);//второй аргумен - скорость, false - отменить повтор
        });
        "cut_down,cut_up,cut_left,cut_right".split(",").forEach(name => {
            this.animations[name] = animationSheet.getAnimation(name, 50, false);//второй аргумен - скорость, false - отменить повтор
        });
        ["death"].forEach(name => {
            this.animations[name] = animationSheet.getAnimation(name, 50, false);//второй аргумен - скорость, false - отменить повтор
        }); 
        this.stand("left");
    }

    shoot(arrow){
        if(!this.isShooting){
            this.isShooting = true;
            this.view = this.animations ['shoot_'+this.velocity.direction];
            this.view.onEnd = ()=>{
                this.isShooting = false;
                arrow.fly(this.x, this.y, this.velocity.direction);
            }
            this.view.run();//Запустить анимацию
        } 
    }

    hit(){
        if(!this.isHitting){
            this.isHitting = true;
            this.view = this.animations ['cut_'+this.velocity.direction];
            this.view.onEnd = ()=>{
                this.isHitting = false;
            }
            this.view.run();//Запустить анимацию
        } 
    }

    walk(direction){
        if(this.isShooting || this.isHitting)return; //Во время стрельбы нельзя идти. НЕ ПОНИМАЮ КАК РАБОТАЕТ. ЕСЛИ УБРАТЬ ЭТУ СТРОКУ, ПЕРСОНАЖЕМ НЕЛЬЗЯ УПРАВЛЯТЬ
        this.velocity.setDirection(direction, this.speed);
        this.view = this.animations ['walk_'+direction];//Здесь хранится текущая анимация.   this.view хранит объект CharacterSheet
        this.view.run();//Запустить анимацию
    }

    stand(direction){//Стоять
        if(this.isShooting || this.isHitting)return;//НЕ ПОНИМАЮ КАК РАБОТАЕТ. ЕСЛИ УБРАТЬ ЭТУ СТРОКУ, ПЕРСОНАЖЕМ НЕЛЬЗЯ УПРАВЛЯТЬ
        this.velocity.setDirection(direction, 0);
        this.view = this.animations ['walk_'+direction];
        this.view.stop();
    }

    death(){
        this.velocity = new Vector("down", 0);//Останавливаем персонажа
        this.view = this.animations ['death'];
        // this.view.stop();
    }

    update(time){
        if(this.lastTime ==0){
            this.lastTime = time;
            return;
        }

        //Перемещение персонажа
        // if(!this.isShooting){//Во время стрельбы и ударов нельзя идти
        //     this.velocity.move(this, time-this.lastTime);
        // }

        if(this.isShooting || this.isHitting){//Во время стрельбы и ударов нельзя идти
            this.velocity.move(this,0);
        }else{
            this.velocity.move(this, time-this.lastTime);
        }
        
        this.lastTime = time;

        //Координаты для анимации; this.view хранит объект CharacterSheet
        this.view.setXY(Math.trunc(this.x), Math.trunc(this.y)) //В переменной this.view хранится this.animations = {}. Метод trunc отбрасывет дробную часть
        this.view.update(time);
    }
}