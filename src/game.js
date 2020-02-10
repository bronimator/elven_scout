import { Screen } from './screen';
import { Loading} from './scene/loading';//потомок класса Scene
import { Menu } from './scene/menu';//потомок класса Scene
import { GameLevel } from './scene/game-level';//потомок класса Scene
import { GameOver } from './scene/game-over';//потомок класса Scene
import { GameWin } from './scene/game-win';//потомок класса Scene
import { Scene } from './scene';
import { ControlState } from './control-state';

export class Game{
    //объект props не обязателен, если в конструктор не передавать никаких объектов, он возьмёт объект {} по умолчанию
    //Это {width = 640, height = 480}  деструктурирующее присваивание
    constructor({width = 640, height = 480} = {}){
        this.screen = new Screen(width,height);
        this.screen.loadImages({
			orc: 'img/orc.png',
			player: 'img/player.png',
			title: 'img/title.jpg',
			tiles: 'img/tiles.png'            
        });
        this.control = new ControlState();
        this.scenes = {
            loading: new Loading(this),
            menu: new Menu(this),
            gameLevel: new GameLevel(this),
            gameOver: new GameOver(this),
            gameWin: new GameWin(this)
        }
        this.currentScene = this.scenes.loading;
        this.currentScene.init();
    }

    changeScene(status) {
        switch (status) {
            case Scene.LOADED:
                return this.scenes.menu;
            case Scene.START_GAME:
                return this.scenes.gameLevel;
            case Scene.GAME_OVER:
                return this.scenes.gameOver;
            case Scene.GAME_WIN:
                return this.scenes.gameWin;
            default:
                return this.scenes.menu;
        }
    }

    frame(time){
        if(this.currentScene.status != Scene.WORKING){
            this.currentScene=this.changeScene(this.currentScene.status);
            this.currentScene.init();
        }
        this.currentScene.render(time);
        requestAnimationFrame(time => this.frame(time));
    }

    run(){
        requestAnimationFrame(time => this.frame(time));
    }
}