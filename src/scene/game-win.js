import {Scene} from '../scene';
import {SpriteSheet} from '../sprite-sheet';

export class GameWin extends Scene{
    constructor(game){
        super(game);//Вызов родительского конструктора
        this.tiles = new SpriteSheet({
            imageName: 'player',
            imageWidth:640,
            imageHeight:640
        });
        this.orcTiles = new SpriteSheet({
            imageName: 'orc',
            imageWidth:640,
            imageHeight:640
        });
    }

    init(){
        super.init();
        this.loadedAt = 0;

        this.player = this.tiles.getSprite(31);
        this.startPositionY = 200;
        this.playerCoord = {x: 300, y:this.startPositionY}
        this.player.setXY(this.playerCoord.x,this.playerCoord.y);
        this.startImpulse = -8;//стартовый импульс для подбрасывания игрока орками
        this.speedPlayer = this.startImpulse;

        this.orcs = [];
        for(let i = 0; i<4;i++){
            let x1 = 150 + i*100;
            this.orcs.push({x:x1,y:200,sprite:this.orcTiles.getSprite(31), speed: this.startImpulse});
        }

        this.orcs.forEach(orc=>{
            orc.sprite.setXY(orc.x,orc.y);
        });
    }

    update(time){
        if(this.loadedAt == 0){
            this.loadedAt = time;
        }

        if(this.loadedAt != 0 && (time - this.loadedAt) > 500){
            if(this.game.control.fire){//При нажатии на "огонь" начать игру
                this.finish(Scene.LOADED);
            }
        }

        this.speedPlayer +=0.5;
        this.playerCoord.y += this.speedPlayer;
        if(this.playerCoord.y > this.startPositionY){
            this.playerCoord.y = this.startPositionY;
            this.speedPlayer = this.startImpulse+Math.random()-0.5;
        }
        this.player.setXY(this.playerCoord.x,this.playerCoord.y);     

        this.orcs.forEach(orc=>{
            orc.speed +=0.5;
            orc.y +=orc.speed;
            if(orc.y > this.startPositionY){
                orc.y = this.startPositionY;
                orc.speed = this.startImpulse+Math.random()-0.5;
            }
            orc.sprite.setXY(orc.x,orc.y);
        });
    }

    render(time){
        this.update(time);
        this.game.screen.fill('black');
        this.game.screen.print(240,320, 'И НИКТО НЕ ПОСТРАДАЛ',15);

        this.game.screen.drawSprite(this.player);
        this.orcs.forEach(orc=>{
            this.game.screen.drawSprite(orc.sprite);
        });
        super.render(time);
    }
}