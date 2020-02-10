import {isAgressive} from './ais/isAgressive';
import { TextInfo } from "./text-info";

export class Interface{
    constructor(game, waves){
        this.game = game;
        this.waves = waves;
        this.textInfo = new TextInfo(game.screen);
        this.context = this.game.screen.context;
        this.lastTime = 0;
        this.player = game.currentScene.player;
        this.fightTextShowed = false;//надпись Fight покажется лишь один раз
        this.timeToSurvive = 20000;//Если это время выйдет в ноль, то игра закончится победой

        this.widthHealthLine = 150;

        this.endOpacity = 0;//При проигрыше экран дискретно, ступенчато, темнеет. 0 - абсолютно светло, 1 - абсолютно темно
        
    }

    update(time){
        if(this.lastTime === 0){
            this.lastTime = time;
        }        
        
        this.showHealthLine();

        if(this.player.health === 0){
            this.endGame(time,'lose');//Проиграл
        }


        if(isAgressive.isOrcAgressive()){
            this.fightText(time);
        }else{
            this.showTimer();//Обратный отсчёт
            this.timeToSurvive -= time - this.lastTime;
            if(this.timeToSurvive < 0 ){
                this.timeToSurvive = 0;
                this.endGame(time,'win');
            }
        }
        
        this.textInfo.update(time);

        this.lastTime = time;
    }



    fightText(time){        
            if(!this.fightTextShowed){
                this.fightTextShowed = true;
                this.textInfo.showText('FIGHT',time);
            }
    }




    showHealthLine(){
        this.context.strokeStyle = '#852727';
        this.context.fillStyle = '#b23d3d';
        this.context.lineWidth = 2;
        this.context.rect (20,15, this.widthHealthLine, 10);
        this.context.fillRect (20,15, this.widthHealthLine*(this.player.health/this.player. healthStart), 10);
        // this.context.fill();
        this.context.stroke();
    }

    showTimer(){
        this.game.screen.print(this.game.screen.width - 50, 30, //х, y
                            Math.floor(this.timeToSurvive/1000),//'text'
                            22);//fontsize
    }

    endGame(time,status){
            //Постепенно появляется черная заставка и сообщаем сцене, что игра закончена
            this.endOpacity +=(time - this.lastTime)/1000;
            if(this.endOpacity > 1.5){//1.5, а не 1, чтобы черная заставка ещё повисела немного
                this.changeScene(status);
            }


            let opacity = 0;
            if(this.endOpacity > 0.25)  opacity =0.25;
            if(this.endOpacity > 0.5)  opacity =0.5;
            if(this.endOpacity > 0.75)  opacity =0.75;
            if(this.endOpacity > 1)  opacity =1;

            this.context.fillStyle = 'rgb(0,0,0,'+opacity+')';
            this.context.fillRect (0,0,this.game.screen.width, this.game.screen.height);
    }

    changeScene(status){
        switch(status){
            case 'lose':return this.game.currentScene.gameOverTrigger = true;
            case 'win':return this.game.currentScene.winTrigger = true;
        }    
    }

}