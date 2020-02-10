import {Scene} from '../scene'; 
import {Orc} from '../orc';
import {Player} from '../player';
import {SpriteSheet} from '../sprite-sheet';

export class GameOver extends Scene{
    constructor(game){
        super(game);//Вызов родительского конструктора
    }

    init(){
        super.init();
        this.loadedAt = 0;
        this.orc = new Orc(null,'endScript');//(player, aiType = 'peaceful')
        this.orc.x = 420;
        this.orc.y = 200;

        this.scriptTime = 1700;//Время когда орк бьёт игрока
        this.scriptSpeedPlayer = -10;//Начальная скорость игрока

        // this.player = new Player(null,null);
        // this.player.stand('right');
        // this.player.x = 350;
        // this.player.y = 200;

        this.tiles = new SpriteSheet({
            imageName: 'player',
            imageWidth:640,
            imageHeight:640
        });
        this.player = this.tiles.getSprite(31);
        this.playerCoord = {x: 270, y:200}
        this.player.setXY(this.playerCoord.x,this.playerCoord.y);
    }

    update(time){
        if(this.loadedAt == 0){
            this.loadedAt = time;
        }

        if(this.loadedAt != 0 && (time - this.loadedAt) >500){
            if(this.game.control.fire){//При нажатии на "огонь" начать игру
                this.finish(Scene.LOADED);
            }
        }

        if(this.loadedAt != 0 && (time - this.loadedAt) > this.scriptTime){
            this.player = this.tiles.getSprite(36);
            this.playerCoord.x -= 5;
            this.scriptSpeedPlayer +=0.5;
            this.playerCoord.y +=this.scriptSpeedPlayer;
            this.player.setXY(this.playerCoord.x,this.playerCoord.y);
        }

        this.orc.update(time);
    }

    render(time){
        this.update(time);
        this.game.screen.fill('black');
        this.game.screen.print(150,320, 'ОРКИ БЕЗОБИДНЫ. НЕ ОБИЖАй СЛАБЫХ ОРКОВ',15);

        this.game.screen.drawSprite(this.orc.view);
        // this.game.screen.drawSprite(this.player.view);
        
        this.game.screen.drawSprite(this.player);
        super.render(time);
    }
}