export class AI {//Базовые класс, здесь хранится общий функционал. Расширяющий класс - Dummy, тупой ИИ
    constructor() {
        this.body = null;
    }

    control(body) {
        this.body = body;
    }

    update(time) {
        
    }
}