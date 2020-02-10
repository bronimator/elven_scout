import {SpriteSheet} from './sprite-sheet';

export class CharacterSheet extends SpriteSheet{
    constructor({imageName}){
        super({
            imageName: imageName,
            imageWidth: 832,
            imageHeight: 1344
        });
        this.sequences = this.getSequences();
    }

    getSequences(){
        const data = require ('./maps/animations.json');
        const sequences = {};
        data.layers.forEach(layer =>{

            //Ширину брали по самой большой последовательности, поэтому на некоторых последовательностях поменьше в конце есть нули. Их убираем, фильтруем
            sequences[layer.name] = layer.data.filter(i => i>0);
        });
        return sequences;
    }

    getAnimation(name, speed = 70, repeat = true, autorun = true){
        return super.getAnimation(this.sequences[name], speed, repeat, autorun);
    }
}