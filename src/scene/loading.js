import {Scene} from '../scene';

export class Loading extends Scene{
    constructor(game){
        super(game);//Вызов родительского конструктора
        this.loadedAt = 0; //Здесь запишется время, на котором все картинки загрузились
    }

    init(){//Для запуска и перезапуска сцены, чтобы вернуть параметры в певоначальное состояние
        super.init();
        this.loadedAt = 0;//обнуляем
    }

    update(time) {
        if(this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {//Если картинки загрузились и время загрузки ещё не фиксировалось...
            this.loadedAt = time;//..запишем время, на котором все картинки загрузились
        }
        if(this.loadedAt != 0 && (time - this.loadedAt) > 500) {//Выжидаем 500 мс
            this.finish(Scene.LOADED);//Сцена загружена
        }
    }

    render(time){
        this.update(time);
        this.game.screen.fill('#000000');
        this.game.screen.print(50,70,'Загрузка мигрирующих орков...');
        super.render(time);
    }
}