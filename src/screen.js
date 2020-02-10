import {ImageLoader} from './image-loader';
import {TileMap} from './tile-map'

export class Screen{
    constructor(width , height){
        this.width= width;
        this.height = height;
        this.canvas = this.createCanvas(width, height);
        this.context = this.canvas.getContext('2d');
        this.images = {};
        this.isImagesLoaded = false;
        this.camera = null;
        this.isCameraSet = false;

        this.addStylesToCanvas();
    }

    addStylesToCanvas(){
        this.canvas.style.display = 'block';
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0';
        this.canvas.style.right = '0';
        this.canvas.style.top = '0';
        this.canvas.style.bottom = '0';
        this.canvas.style.margin = 'auto';
        document.body.style.background = 'black';
    }

    setCamera(camera){
        this.camera = camera;
        this.isCameraSet = true;
    }

    loadImages(imagesFiles){
        const loader =  new ImageLoader(imagesFiles);
        loader.load().then(names=>{

            //Object.assign копирует в первый объект свойства остальных объектов. В loader.images сейчас {orc: img, player: img, title: img, tiles: img}
            //img - это объект Image, в нём есть свойство src, в котором записан путь к картинке
            this.images = Object.assign(this.images, loader.images);
            this.isImagesLoaded = true;
        });
    }

    createCanvas(width, height){
        let elements = document.getElementsByTagName('canvas');
        let canvas = elements[0] || document.createElement('canvas');
        document.body.appendChild(canvas);
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }




//На карте много объектов, для оптимизации делаем пререндер (заранее отрисовать карту и использовать как картинку)
    createMap(name, mapData, tileset) {
        const mapImage = document.createElement('canvas');
        mapImage.width = mapData.width * mapData.tilewidth;//данные  mapData.width и mapData.tilewidth берутся из level1.json
        mapImage.height = mapData.height * mapData.tileheight;
        const mapContext = mapImage.getContext('2d');
        const hitboxes = [];
        let row, col;
        mapData.layers.forEach(layer => {//Все необходимые данные лежат в mapData.layers (level1.json)
            if(layer.type == "tilelayer") {//У слоев type == "tilelayer"
                row = 0;
                col = 0;
                layer.data.forEach(index => {
                    if(index > 0) {//layer.data - это массив [7, 21, 0, 23, 7, 0 и т.д.]. Index = 0 значит, что ячейка пустая
                        mapContext.drawImage(this.images[tileset.imageName],
                            tileset.getSourceX(index), tileset.getSourceY(index),
                            mapData.tilewidth, mapData.tileheight,
                            col * mapData.tilewidth, row * mapData.tileheight,
                            mapData.tilewidth, mapData.tileheight
                            );
                    }
                    col++;
                    if(col > (mapData.width - 1)) {//Если дошли до конца строки, переходим на новую строку
                        col = 0;
                        row++;
                    }
                });
            }
            if(layer.type == "objectgroup") {//У объектов type == "tilelayer"
                hitboxes.push(...layer.objects.map(obj => ({x1: obj.x, x2: obj.x + obj.width, y1: obj.y, y2: obj.y + obj.height})));
            }
        });//mapData.layers.forEach

        this.images[name] = mapImage;//Добавить полученное изображение карты в загруженные изображения
        return new TileMap({//TileMap extends Sprite - карта представляет из себя один большой спрайт
            imageName: name,
            sourceX: 0,
            sourceY: 0,
            width: mapImage.width,
            height: mapImage.height,
            hitboxes: hitboxes
        });
    }//createMap


    
    fill(color){
        this.context.fillStyle = color;
        this.context.fillRect (0,0, this.width, this.height);
    }

    print(x,y,text,fontSize = 22){
        // this.context.shadowOffsetX = 4; //Не работает
        // this.context.shadowOffsetY = 4;
        // this.context.shadowBlur = 3;
        // this.contextshadowColor = 'black';
        this.context.fillStyle = '#FFFFFF';
        this.context.font = fontSize+'px Arial';
        this.context.fillText(text,x,y);
    }

    drawImage(x,y,imageName){
        this.context.drawImage(this.images[imageName],x,y);
    }

    drawSprite(sprite){
        this.context
        let spriteX = sprite.x;
        let spriteY = sprite.y;

        if(this.isCameraSet){
            spriteX -=this.camera.x;
            spriteY -=this.camera.y
        }

        //Спрайты, которые не попадают в область видимости камеры, не отрисовываем
        if(
            (spriteX >= this.width) ||
            (spriteY >= this.height) ||
            ((spriteX + sprite.width) <= 0)||
            ((spriteY + sprite.height) <=0)
        ){
            return;
        }



        //Если спрайт лишь частично попадает в область видимости камеры, отрисовываем только видимую часть спрайта
        let sourceX=sprite.sourceX+
                    Math.abs(
                        Math.min(0, spriteX)//При выходе за левый край получается sprite.sourceX + |spriteX|
                        );

        let sourceY=sprite.sourceY + Math.abs(Math.min(0, spriteY));;

        let width=Math.min(
                            this.width,//ширина экрана
                            spriteX + sprite.width) - 
                  Math.max(0, spriteX);/*Если spriteX + sprite.width будет больше this.width (если спрайт выйдет за правый край), 
                  ширина спрайта let width получится отрицательной. Отрицательная ширина захватывает изображение не вправо как обычно, а влево*/

        let height = Math.min(this.height, spriteY + sprite.height) - Math.max(0, spriteY);


        
        this.context.drawImage(this.images[sprite.imageName],
            sourceX,//Координаты спрайта на исходном изображении
            sourceY, 
            width,//Размеры спрайта на исходном изображении
            height,
            Math.max(0,spriteX),//Рисование спрайта на холсте. Если задана камера, она повлияет на эти координаты
            Math.max(0,spriteY),
            width,//Размеры спрайта на холсте
            height);

    }//drawSprite
}