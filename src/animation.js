import {Sprite} from './sprite';

export class Animation extends Sprite{
    constructor({imageName, frames, speed, repeat = true, autorun = true, width = 64, height = 64}) {
        super({
            imageName: imageName,
            sourceX: frames[0].sx,
            sourceY: frames[0].sy,
            width: width,
            height: height
        });

        this.frames = frames;
        this.speed = speed;
        this.repeat = repeat;
        this.running = autorun;
        this.lastTime = 0;//время от последнего фрейма анимации
        this.currentFrame = 0;
        this.totalFrames = this.frames.length;
        
        /*Для отслеживания последнего кадра. Например, после последнего кадра анимации стрельбы, персонаж перестаёт стрелять
        Эта переменная задается в классе Body. Например: this.view.onEnd = ()=>this.isShooting = false;*/
        this.onEnd = null;
    }

    setFrame(index) {
        this.currentFrame = index;
        this.sourceX = this.frames[index].sx;
        this.sourceY = this.frames[index].sy;
    }

    run() {//Старт анимации с самого начала
        if(!this.running){
            this.setFrame(0);
            this.running = true;
        }
    }

    stop() {
        this.running = false;
    }

    
    nextFrame() {
        if((this.currentFrame + 1) == this.totalFrames) {//Если это последний кадр, то...
            if(this.onEnd) {//...если задана концовка, запускаем. Например: this.view.onEnd = ()=>this.isShooting = false;
                this.onEnd();
            }
            if(this.repeat) {//... если задан повтор, повторяем
                this.setFrame(0);
                return;
            }
            this.stop();//... иначе - стоп анимация
            return;
        }
        this.setFrame(this.currentFrame + 1);
    }

    update(time) {
        if(!this.running) {
            return;
        }
        if(this.lastTime == 0) {//Эта проверка нужна только для первого вызова update(), чтобы инициализировать this.lastTime
            this.lastTime = time;
            return;
        }

        if((time - this.lastTime) > this.speed) {//Разница по времени между прошлым и текущим кадром: (11-2)>10, (12-2)>10, (13-2)>10 - здесь прошло 10мс, а speed в этом примере как раз равен 10мс, значит меняем кадр
            this.nextFrame();
            this.lastTime = time;
        }
    }
}
