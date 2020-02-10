export class TextInfo{
    constructor(screen){
        this.x = 0;
        this.y = 0;
        this.screen = screen;
        this.showTextBoolean = false;//Показывать ли текст
        this.text = '';
        this.lastTime = 0;
        this.howLongToShow = 1000;//Сколько времени показывать текст
        this.timeToStop = 0;//Время когда нужно завершить показ
        this.fontSize = 0;
        this.startFontSize = 150;
    }

    update(time){
        if(this.lastTime == 0){
            this.lastTime = time;
        }

        

        if(this.showTextBoolean){
            this.fontSize -=(time - this.lastTime)/10;
            this.setXY();
            this.screen.print(this.x, this.y, this.text, this.fontSize);
            if(time>this.timeToStop){
                this.showTextBoolean = false;
            }
        }
        this.lastTime = time;
    }

    showText(text,time){
            this.text = text;
            this.showTextBoolean = true;
            this.timeToStop = time + this.howLongToShow;
            this.fontSize = this.startFontSize;
            this.setXY();
    }

    setXY(){
        this.x = this.screen.width/2 - this.fontSize*1.5;
        this.y = this.screen.height/2 + this.fontSize/4.5;
    }
}