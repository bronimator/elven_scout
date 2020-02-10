import {RemoveFromArray} from './remove-from-array';
import {isAgressive} from './ais/isAgressive';

export class Collider {
    constructor() {
        this.staticShapes = [];//Массив статичных объектов. Мы используем следующие свойства объекта: {x, y, width, height}
        this.bodies = [];
    }

    addStaticShapes(data){
        data.layers.forEach(layer => {
            if(layer.type =='objectgroup')
                /*objects это массив с набором объектов [{...},{...}, и т.д.]0
                Думаю, конструкция (...layer.objects) создает массив  this.staticShapes = [{...},{...}, и т.д.]*/
                this.staticShapes.push(...layer.objects);
        });
        //Добавим ограничение по краям карты. За карту нельзя выйти
        this.staticShapes.push({x:0,y:0,width:1300,height:1});
        this.staticShapes.push({x:0,y:0,width:1,height:1300});
        // this.staticShapes.push({x:1280,y:0,width:1,height:1300});
        this.staticShapes.push({x:1280,y:0,width:1300,height:1});
    }

    addKinematicBody(body){
        this.bodies.push({
            x: body.x,//старые координаты персонажа
            y: body.y,
            obj: body,//сохраняем персонажа с новыми координатами, будем сравнивать новые и старые координаты персонажа
        })
    }

    update(time){
        this.checkCollision(time);//рассчёт коллизии персонажей со статичными объектами и персонажей между собой
    }

    checkCollision(time){
        for(let i=0; i<this.bodies.length; i++){
            let body = this.bodies[i];
            let oldX = body.x;
            let oldY = body.y;
            let x = body.obj.x;
            let y = body.obj.y;
            if(x>oldX){//moving right
                this.staticShapes.forEach(shape=>{
                    if(  //Если старые координаты находятся перед объектом***
                        ((oldX - //координата персонажа
                          1 +//Перемещение между кадрами занимает дробную часть пикселя, чтобы код работал округлим прошлую точку на 1 пиксель              
                          body.obj.collisionShape.x + //координата формы коллизии внутри персонажа (началом отсчёта служит левый верхний угол персонажа)
                          body.obj.collisionShape.width) < shape.x) &&
                        //***и новые координаты находятся после объекта, значит персонаж столкнулся с препятствием
                        ((x + 
                          body.obj.collisionShape.x + 
                          body.obj.collisionShape.width) > shape.x) &&
                        
                        //Персонаж должен касаться препятствия
                        ((y + 
                          body.obj.collisionShape.y) < (shape.y + shape.height)) &&
    
                        ((y + 
                          body.obj.collisionShape.y+
                          body.obj.collisionShape.height) > shape.y)
                    ){  //Берем ближайший объект, где остановим персонажа 
                        x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.x)//(наверное можно было просто оставить один shape.x)
                            - body.obj.collisionShape.x - body.obj.collisionShape.width;
                        this.checkInteractiveWithStatic(body,i);//Проверяем интерактив со статичными объектами (например после попадания в дерево, стрела не движется)
                    }
                })

                //Коллизия персонажей между собой
                for(let j=0; j<this.bodies.length;j++){
                    let shape = this.bodies[j];
                    if(body != shape){//Если это не тот же самый объект
                        if(((oldX - 1 + body.obj.collisionShape.x + body.obj.collisionShape.width) < shape.obj.x + shape.obj.collisionShape.x) &&
                            ((x + body.obj.collisionShape.x + body.obj.collisionShape.width) > shape.obj.x + shape.obj.collisionShape.x) &&
                            ((y + body.obj.collisionShape.y) < (shape.obj.y + shape.obj.collisionShape.y + shape.obj.collisionShape.height)) &&
                            ((y + body.obj.collisionShape.y + body.obj.collisionShape.height) > shape.obj.y + shape.obj.collisionShape.y)
                        ){
                            x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.obj.x + shape.obj.collisionShape.x)
                                        - body.obj.collisionShape.x - body.obj.collisionShape.width;
                            this.checkInteractive(body,shape,i,j);//Проверяем интерактив (например стрела бьёт орка, орк бьёт игрока и т.д.)
                        }
                    }
                }
            }




            


    
            if(x<oldX){//moving left
                this.staticShapes.forEach(shape=>{
                    if(((oldX + 1 + body.obj.collisionShape.x) > (shape.x+shape.width)) &&
                      ((x + body.obj.collisionShape.x) < (shape.x+shape.width)) &&
                      ((y + body.obj.collisionShape.y) < (shape.y + shape.height)) &&
                      ((y + body.obj.collisionShape.y+body.obj.collisionShape.height) > shape.y)
                    ){
                        x = Math.max(x + body.obj.collisionShape.x, shape.x+shape.width)- body.obj.collisionShape.x;
                        this.checkInteractiveWithStatic(body,i);
                    }
                });

                //Коллизия персонажей между собой
                for(let j=0; j<this.bodies.length;j++){
                    let shape = this.bodies[j];
                    if(body != shape){//Если это не тот же самый объект
                        if(((oldX + 1 + body.obj.collisionShape.x) > shape.obj.x + shape.obj.collisionShape.x + shape.obj.collisionShape.width) &&
                            ((x + body.obj.collisionShape.x) < shape.obj.x + shape.obj.collisionShape.x + shape.obj.collisionShape.width) &&
                            ((y + body.obj.collisionShape.y) < (shape.obj.y + shape.obj.collisionShape.y + shape.obj.collisionShape.height)) &&
                            ((y + body.obj.collisionShape.y + body.obj.collisionShape.height) > shape.obj.y + shape.obj.collisionShape.y)
                        ){
                            x = Math.max(x + body.obj.collisionShape.x, shape.obj.x + shape.obj.collisionShape.x + shape.obj.collisionShape.width)- body.obj.collisionShape.x;
                            this.checkInteractive(body,shape,i,j);
                        }
                    }
                }
            }




    
            if(y>oldY){//moving down
                this.staticShapes.forEach(shape=>{
                    if(((oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height) < shape.y)&&
                        ((y + body.obj.collisionShape.y + body.obj.collisionShape.height) > shape.y) &&
                        ((x + body.obj.collisionShape.x) < (shape.x + shape.width)) &&
                        ((x + body.obj.collisionShape.x+body.obj.collisionShape.width) > shape.x)
                    ){
                        y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, shape.y)- body.obj.collisionShape.y - body.obj.collisionShape.height;
                        this.checkInteractiveWithStatic(body,i);
                    }
                });

                //Коллизия персонажей между собой
                for(let j=0; j<this.bodies.length;j++){
                    let shape = this.bodies[j];
                    if(body != shape){//Если это не тот же самый объект
                        if(((oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height) < shape.obj.y + shape.obj.collisionShape.y) &&
                            ((y + body.obj.collisionShape.y + body.obj.collisionShape.height) > shape.obj.y + shape.obj.collisionShape.y) &&
                            ((x + body.obj.collisionShape.x) < (shape.obj.x + shape.obj.collisionShape.x + shape.obj.collisionShape.width)) &&
                            ((x + body.obj.collisionShape.x + body.obj.collisionShape.height) > shape.obj.x + shape.obj.collisionShape.x)
                        ){
                            y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, shape.obj.y + shape.obj.collisionShape.y)
                                        - body.obj.collisionShape.y - body.obj.collisionShape.height;
                            this.checkInteractive(body,shape,i,j);
                        }
                    }
                }
            }
    





            if(y<oldY){//moving up
                this.staticShapes.forEach(shape=>{
                    if(((oldY + 1 + body.obj.collisionShape.y) > (shape.y+shape.height)) &&
                      ((y + body.obj.collisionShape.y) < (shape.y+shape.height)) &&
                      ((x + body.obj.collisionShape.x) < (shape.x + shape.width)) &&
                      ((x + body.obj.collisionShape.x+body.obj.collisionShape.width) > shape.x)
                    ){
                        y = Math.max(y + body.obj.collisionShape.y, shape.y+shape.height)- body.obj.collisionShape.y;
                        this.checkInteractiveWithStatic(body,i);
                    }
                })

                for(let j=0; j<this.bodies.length;j++){
                    let shape = this.bodies[j];
                    if(body != shape){//Если это не тот же самый объект
                        if(((oldY + 1 + body.obj.collisionShape.y) > shape.obj.y + shape.obj.collisionShape.y + shape.obj.collisionShape.height) &&
                            ((y + body.obj.collisionShape.y) < shape.obj.y + shape.obj.collisionShape.y + shape.obj.collisionShape.height) &&
                            ((x + body.obj.collisionShape.x) < (shape.obj.x + shape.obj.collisionShape.x + shape.obj.collisionShape.width)) &&
                            ((x + body.obj.collisionShape.x + body.obj.collisionShape.width) > shape.obj.x + shape.obj.collisionShape.x)
                        ){
                            y = Math.max(y + body.obj.collisionShape.y, shape.obj.y + shape.obj.collisionShape.y + shape.obj.collisionShape.height)- body.obj.collisionShape.y;
                            this.checkInteractive(body,shape,i,j);
                        }
                    }
                }
            }
    
            body.x = x;
            body.y = y;
            body.obj.x = x;
            body.obj.y = y;
        }//this.bodies cycle
    }//checkStatic





    checkInteractive(body,shape,indexOfBody,indexOfShape){
        if(body.obj.hasOwnProperty('name') && shape.obj.hasOwnProperty('name')){//Проверка на случай, если попадётся объект без названия
            if(body.obj.name == 'arrow' && shape.obj.name == 'orc'){//Если стрела коснулась орка
                //На самом деле вместо двух, можно сделать один вызов this.remove(this.bodies,indexOfBody,indexOfShape). Но мне так удобнее отлаживать
                this.bodies=RemoveFromArray.remove(this.bodies,indexOfBody)//Стрела исчезает, удалить из коллайдера, удалить сам объект
                body.obj.delete();//Удаляем стрелу
                this.bodies=RemoveFromArray.remove(this.bodies,indexOfShape)//Отключить его от коллайдера (удалить элемент по индексу из массива this.bodies)
                shape.obj.death(); //Орк погибает
            }
            // if(body.obj.name == 'player' && shape.obj.name == 'orc'){
            //     shape.obj.gotPlayer = true;
            // }
        }
    }//checkInteractive





    checkInteractiveWithStatic(body,indexOfBody){//
        if(body.obj.hasOwnProperty('name')){//Проверка на случай, если попадётся объект без названия
            if(body.obj.name == 'arrow'){
                body.obj.stop();//Стрела перестаёт двигаться
                this.bodies=RemoveFromArray.remove(this.bodies,indexOfBody);//удалить из коллайдера
            }
        }
    }
 





}





