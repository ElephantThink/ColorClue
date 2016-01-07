/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="colorCore.ts" />
/// <reference path="randomCore.ts" />
/// <reference path="colorList.ts" />

class Board {

    element: JQuery;
    goodPoints: number = 0;
    badPoints: number = 0;

    constructor() {
        this.element = $('<span id="counter">Good :  / Bad :  </span>');
        $('#header').append(this.element);
    };

    putGoodPoints():void {
        this.goodPoints++;
        this.renderScreen();
    };

    putBadPoints():void {
        this.badPoints++;
        this.renderScreen();
    };

    renderScreen():void {
        this.element.text('Good : ' + this.goodPoints + '/ Bad : ' + this.badPoints);
    };
}

class Dot {
    element: JQuery;
    color: colorList.IColor;

    constructor(item: colorList.IColor, selected: number) {
        this.color = item;
        this.element = $("<div class='color-dot " + item.hex + "' style='background-color:" + item.hex + "; align:center' title='color:" + item.hex + "'></div>");
        this.element.click((e) => { this.checkAnswer(e, selected) });
        var className = (colorMetric.hexToHsl(this.color.hex).l > 0.60) ? 'light' : 'Dark ';
        this.element.addClass(className);
    }

    checkAnswer(e: Event, selected: number): void {
        var isCorrect = e.currentTarget === this.element.parent('.dot-collections').find('.color-dot').eq(selected)[0];
        this.element.parent('.dot-collections').find('.color-dot').off('click');

        if (!isCorrect) {
            this.element.addClass('incorrect');
            board.putBadPoints();
        } else {
            board.putGoodPoints();
        }

        this.element.parent('.dot-collections').find('.color-dot').eq(selected).addClass('correct');
    }
}

class RowOfDots {
    private numberOfElement: number;

    mainElement: JQuery;
    colorsDotCollection: JQuery;
    questionElement: JQuery;

    listOfElement: Dot[] = [];
    listOfRandom: number[];



    selected: number;

    constructor(numberOfElement) {
        this.numberOfElement = numberOfElement;
        this.mainElement = $("<div class='row-color'></div>");
        this.colorsDotCollection = $("<div class='dot-collections'></div>");
        this.questionElement = $("<div class='question'></div>");

        this.listOfRandom = randomLib.getRandom(numberOfElement, colorList.getLenghtColor(), false);

        this.selected = randomLib.getRandom(1, numberOfElement)[0];

        for (var i = 0; i < this.numberOfElement; i++) {
            this.listOfElement[i] = new Dot(colorList.getColorUsingIndex(this.listOfRandom[i]), this.selected);
            this.colorsDotCollection.append(this.listOfElement[i].element[0]);
        }

        this.questionElement.text(this.listOfElement[this.selected].color.name);

        this.mainElement.append(this.colorsDotCollection);
        this.mainElement.append(this.questionElement);
    }

}



class Game {

    constructor() {
    }



}


interface IOptions {
    rows: number;
    dots: number;
    nivel: number;
}

//Set Options of the game
var Options: IOptions = {
    rows: 5,
    dots: 5,
    nivel: 1,
}







var board = new Board();
var game = new Game();

var rows: RowOfDots[] = [];

for (var j = 0; j < Options.rows; j++) {
    rows[j] = new RowOfDots(Options.dots);
    $('#main').append(rows[j].mainElement);
}

/*
    Todo
    add jquery .d.ts //
    organize files (Change estructure) //
    checkNames //
    Add Board //
    add colors list
    add modules
    add Design / bower Bootstrap
*/