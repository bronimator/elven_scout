import {Scene} from '../scene';

export class Menu extends Scene{
    constructor(game){
        super(game);//Вызов родительского конструктора
    }

    init(){
        super.init();
        this.loadedAt = 0;//В начале это время кнопка "огонь" не доступна, чтобы при переходе в меню по кнопке "огонь" игра внезапно не запустилась
    }

    update(time){
        if(this.loadedAt == 0){
            this.loadedAt = time;
        }

        if(this.loadedAt != 0 && (time - this.loadedAt) > 500){
            if(this.game.control.fire){//При нажатии на "огонь" начать игру
            // this.finish(Scene.GAME_OVER);
                this.finish(Scene.START_GAME);
            }
        }
    }

    render(time){
        this.update(time);
        this.game.screen.drawImage(0,0,'title');
        this.game.screen.print(200,390, 'НАЖМИТЕ ПРОБЕЛ',25);
        this.game.screen.print(80,470, 'УПРАВЛЕНИЕ СТРЕЛКАМИ. ДЛЯ СТРЕЛЬБЫ ИСПОЛЬЗУЙТЕ ПРОБЕЛ.',15);
        super.render(time);
    }
}