module colorList {
    export interface IGroupColor {
        groupColor: string;
    }

    export interface IColorDescription {
        hex: string;
        name: string;
    }

    export interface IColor extends IColorDescription, IGroupColor { }

    export var LISTOFCOLOR: IColor[] = [
        { name: "Pink", hex: "#FFC0CB", groupColor: 'Pink Colors' },
        { name: "Light Pink", hex: "#FFB6C1", groupColor: 'Pink Colors' },
        { name: "Hot Pink", hex: "	#FF69B4", groupColor: 'Pink Colors' },
        { name: "Deep Pink", hex: "#FF1493", groupColor: 'Pink Colors' },
        { name: "Pale Violet Red", hex: "#DB7093", groupColor: 'Pink Colors' },
        { name: "Medium Violet Red", hex: "#C71585", groupColor: 'Pink Colors' },

        { name: "Lavender", hex: "#E6E6FA", groupColor: 'Purple Colors' },
        { name: "Thistle", hex: "#D8BFD8", groupColor: 'Purple Colors' },
        { name: "Plum", hex: "#DDA0DD", groupColor: 'Purple Colors' },
        { name: "Orchid ", hex: "#DA70D6", groupColor: 'Purple Colors' },
        { name: "Violet", hex: "#EE82EE", groupColor: 'Purple Colors' },
        { name: "Fuchsia", hex: "#FF00FF", groupColor: 'Purple Colors' },
        { name: "Magenta", hex: "#FF00FF", groupColor: 'Purple Colors' },
        { name: "Medium Orchid", hex: "#BA55D3", groupColor: 'Purple Colors' },
        { name: "Dark Orchid", hex: "#9932CC", groupColor: 'Purple Colors' },
        { name: "Dark Violet", hex: "#9400D3", groupColor: 'Purple Colors' },
        { name: "Blue Violet", hex: "#8A2BE2", groupColor: 'Purple Colors' },
        { name: "Dark Magenta", hex: "#8B008B", groupColor: 'Purple Colors' },
        { name: "Purple", hex: "#800080", groupColor: 'Purple Colors' },
        { name: "Medium Purple", hex: "#9370DB", groupColor: 'Purple Colors' },
        { name: "Medium Slate Blue", hex: "#7B68EE", groupColor: 'Purple Colors' },
        { name: "Slate Blue", hex: "#6A5ACD", groupColor: 'Purple Colors' },
        { name: "Dark Slate Blue", hex: "#483D8B", groupColor: 'Purple Colors' },
        { name: "Rebecca Purple", hex: "#663399", groupColor: 'Purple Colors' },
        { name: "Indigo", hex: "#4B0082", groupColor: 'Purple Colors' },

        { name: "Light Salmon", hex: "#FFA07A", groupColor: 'Red Colors' },
        { name: "Salmon", hex: "#FA8072", groupColor: 'Red Colors' },
        { name: "Dark Salmon", hex: "#E9967A", groupColor: 'Red Colors' },
        { name: "Light Coral", hex: "#F08080", groupColor: 'Red Colors' },
        { name: "Indian Red", hex: "#CD5C5C", groupColor: 'Red Colors' },
        { name: "Crimson", hex: "#DC143C", groupColor: 'Red Colors' },
        { name: "Fire Brick", hex: "#B22222", groupColor: 'Red Colors' },
        { name: "Dark Red", hex: "#8B0000", groupColor: 'Red Colors' },
        { name: "Red", hex: "#FF0000", groupColor: 'Red Colors' },

        { name: "Orange Red", hex: "#FF4500", groupColor: 'Orange Colors' },
        { name: "Tomato", hex: "#FF6347", groupColor: 'Orange Colors' },
        { name: "Coral", hex: "#FF7F50", groupColor: 'Orange Colors' },
        { name: "Dark Orange", hex: "#FF8C00", groupColor: 'Orange Colors' },
        { name: "Orange", hex: "#FFA500", groupColor: 'Orange Colors' },

        { name: "Gold", hex: "#FFD700", groupColor: 'Yellow Colors' },
        { name: "Yellow", hex: "#FFFF00", groupColor: 'Yellow Colors' },
        { name: "Light Yellow", hex: "#FFFFE0", groupColor: 'Yellow Colors' },
        { name: "Lemon Chiffon", hex: "#FFFACD", groupColor: 'Yellow Colors' },
        { name: "Light Goldenrod Yellow", hex: "#FAFAD2", groupColor: 'Yellow Colors' },






    ];

}

module colorTools {
     export function getColorFromName(colorName: string): colorList.IColor {
            var hexNumber: colorList.IColor = undefined;

            colorList.LISTOFCOLOR.forEach(function(value, index) {
                if (colorName.toLowerCase() === value.name.toLowerCase()) {
                    hexNumber = value;
                }
            });

            return hexNumber;
    }

    export function  getColorUsingIndex(index: number): colorList.IColor {
            return colorList.LISTOFCOLOR[index];
    }

    export function getLenghtColor(): number {
            return colorList.LISTOFCOLOR.length;
    }

    export function getGroupsColor(): string[] {
            return [];
    }

    export function getColorsInGroupsColors(): colorList.IColor[]{
            return [];
    }

}

module randomLib {
    export function getRandom(returnLenght: number, gap: number, float?: boolean):number[] {
        var listOfRandom: number[] = [];
        var randomNumber: number;

        function getRandomNumber() {

           randomNumber =  (float) ?  Math.random() * gap : Math.floor(Math.random() * gap);

           if (listOfRandom.indexOf(randomNumber) !== -1) {
               getRandomNumber();
           } else {
               listOfRandom.push(randomNumber);
           }

        }

        for (var i = 0; i < returnLenght; i++){
                getRandomNumber();
        }

        return listOfRandom;
    }
}

class Dot {
    element: HTMLElement;
    color: colorList.IColor;

    constructor(item: colorList.IColor,selected:number) {
        this.color = item;
        this.element = $("<div class='color-dot " + item.hex + "' style='background-color:" + item.hex + ";' title='color:"+ item.hex +"'></div>");
        this.element.click((e) => { this.checkAnswer(e,selected) });
    }

    checkAnswer(e: Event, selected: number): void {
        var isCorrect = e.currentTarget === this.element.parent('.dot-collections').find('.color-dot').eq(selected)[0];
        this.element.parent('.dot-collections').find('.color-dot').off('click');

        if (isCorrect) {
            this.element.addClass('correct');
        } else {
            this.element.addClass('incorrect');
            this.element.parent('.dot-collections').find('.color-dot').eq(selected).addClass('correct');
        }

    }
}

class RowOfDots {
    private numberOfElement: number;

    outterElement: HTMLElement;
    colorsDotCollection: HTMLElement;
    questionElement: HTMLElement;

    listOfElement: Dot[] = [];
    listOfRandom: number[];

    selected: number;

    constructor(numberOfElement) {
        this.numberOfElement = numberOfElement;
        this.outterElement = $("<div class='row-color'></div>");
        this.colorsDotCollection = $("<div class='dot-collections'></div>");
        this.questionElement = $("<div class='question'></div>");

        this.listOfRandom = randomLib.getRandom(numberOfElement, colorTools.getLenghtColor(), false);

        this.selected = randomLib.getRandom(1, numberOfElement)[0];

        for (var i = 0; i < this.numberOfElement; i++){
            this.listOfElement[i] = new Dot(colorTools.getColorUsingIndex(this.listOfRandom[i]),this.selected);
            this.colorsDotCollection.append(this.listOfElement[i].element[0]);
        }

        this.questionElement.text(this.listOfElement[this.selected].color.name;);

        this.outterElement.append(this.colorsDotCollection);
        this.outterElement.append(this.questionElement);
    }

}


interface IOptions {
    rows: number;
    dots: number;
    nivel: number;
}



var Options: IOptions = {
    rows: 3,
    dots: 10,
    nivel:1,
}



class Board { }



class Game{
    rows: RowOfDots[]= [];

    constructor(Options:IOptions) {
        for (var j = 0; j < Options.rows; j++){
            this.rows[j] = new RowOfDots(Options.dots);
            $('#main').append(this.rows[j].outterElement);
        }

    }
}



var game = new Game(Options);



/*
    Todo
    add jquery .d.ts
    organize files
    checkNames
    Add Board
    add colors list
    add modules
    add Design / bower Bootstrap


*/