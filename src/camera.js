export class Camera {
    constructor({width = 640, height = 480, limitX = 50000, limitY = 50000, scrollEdge = 200} = {}) {
        this.x = 0;//Положение камеры
        this.y = 0;
        this.width = width;//Размер камеры (у нас совпадает с размером экрана)
        this.height = height;
        this.limitX = limitX;//Предел перемещения камеры (в нашем случае это размер карты)
        this.limitY = limitY;
        this.watchObject = false;//Один из режимов карты для следования за объектом
        this.obj = null;//Указатель на объект, за которым камера следует
        this.scrollEdge = scrollEdge;//Камера начинает движение только если персонаж подходит к краю кадра. scrollEdge определяет отступ от края, когда камера начинает движение
    }

    watch(obj) {
        this.watchObject = true;
        this.obj = obj;
    }

    update(time){
        if(this.watchObject){
            if(this.obj.x > (this.x+this.width - this.scrollEdge))//Если персонаж вышел за правый край кадра, двигаем камеру вслед за персонажем
                this.x = Math.min(this.limitX, this.obj.x-this.width+this.scrollEdge)//Двигаем камеру. Если камера достигла предела, то this.x = this.limitX
            if(this.obj.x < (this.x + this.scrollEdge))
                this.x = Math.max(0, this.obj.x-this.scrollEdge);
        
            if(this.obj.y > (this.y+this.height - this.scrollEdge))//Персонаж идёт вниз
                this.y = Math.min(this.limitY, this.obj.y-this.height+this.scrollEdge)
            if(this.obj.y < (this.y + this.scrollEdge))//Персонаж идёт вверх
                this.y = Math.max(0, this.obj.y-this.scrollEdge);
        }       
    }

    specialPosition(){
        this.x = this.width;
        this.y = this.height;
    }
}