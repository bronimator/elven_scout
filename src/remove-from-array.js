export class RemoveFromArray{
    constructor(){
    }
    static remove (arr, indexes) {//Удалить элементы из массива по индексу
        //arguments - псевдо массив, в котором хранятся все аргументы, переданные в функцию
        //[].slice() - создает пустой массив
        /*arrayOfIndexes - массив, который содержит все аргументы (кроме первого) переданные в функцию
           Это массив индексов, которые нужно удалить из основного массива arr*/
        var arrayOfIndexes = [].slice.call(arguments, 1);

        //Вернуть отфильтрованный массив
        return arr.filter(function (item, index) {
    
            //Например arrayOfIndexes = [1], то есть нужно удалить один элемент по индексу 1
            //indexOf - возвращает индекс искомого элемента. Например: ['a','b'].indexOf('b') //-> 1
            //Каждый элемент массива arr сверяет свой индекс с индексами в arrayOfIndexes.
            //Если его индекса в arrayOfIndexes нет, то метод indexOf вернёт -1, значит будет true и элемент не будет удалён из массива
            return arrayOfIndexes.indexOf(index) == -1;
        });
    }//remove
}