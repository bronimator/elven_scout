export class ImageLoader{

    //- В конструктор передается объект с путями к файлам
    //- this.screen.loadImages({
    //-     orc: 'img/orc.png',
    //-     player: 'img/player.png',
    //-     title: 'img/title.jpg',
    //-     tiles: 'img/tiles.png'            
    //- });
    constructor(imageFiles){
        this.imageFiles = imageFiles;
        this.images={};
    }

    load(){
        const promises = [];
        for (let name in this.imageFiles){
            promises.push(this.loadImage(name, this.imageFiles[name]));
        }
        return Promise.all(promises);//Благодаря методу all удобно работать с массивом объектов Promise. Например: Promise.all([p1,p2]).then(()=>console.log('done'))
    }

    loadImage(name,src){
        return new Promise((resolve,reject)=>{
            const image = new Image();
            this.images[name] = image;
            image.onload = () => resolve(name);
            image.src = src;
        });
    }
}