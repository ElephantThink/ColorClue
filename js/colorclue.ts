/// <reference path="../typings/jquery/jquery.d.ts" />
import $ = require('jquery');
import randomLib = require('randomCore');
import colorList = require('colorList');
import colorMetric = require('colorCore');
import domCore = require('domCore');


class Board extends domCore.baseTemplate {
    private goodPoints: number = 0;
    private badPoints: number = 0;

        constructor(parentElement: string, template: string) {
            super(parentElement, template);
            this.addElement();
            this.renderScreen();
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


class Dot extends domCore.baseTemplate {
    color: colorList.IColor;
    constructor(parentElement: any, template: string, item: colorList.IColor, selected: number) {
        super(parentElement, template);
        super.addElement();

        super.addAttr({
            title: item.hex,
        });

        super.addStyle({
            backgroundColor: item.hex
        });

        super.addEvent('click', (e) => { this.checkAnswer(e, selected) });

        var className = (colorMetric.hexToHsl(item.hex).l > 0.60) ? 'light' : 'Dark ';
        this.element.addClass(className);
        this.color = item;
    }

    checkAnswer(e: Event, selected: number): void {
        this.parentElement.find('.color-dot').off('click');

        if (!(e.currentTarget === this.parentElement.find('.color-dot').eq(selected)[0])) {
            this.element.addClass('incorrect');
            board.putBadPoints();
        } else {
            board.putGoodPoints();
        }

        this.parentElement.find('.color-dot').eq(selected).addClass('correct');
    }
}


class RowOfDots extends domCore.baseTemplate{
    private numberOfElement: number;

    colorsDotCollection: JQuery;
    questionElement: JQuery;

    listOfElement: Dot[] = [];
    listOfRandom: number[];

    selected: number;

    constructor(parentElement,template,numberOfElement) {

        super(parentElement, template);

        this.numberOfElement = numberOfElement;

        this.colorsDotCollection = $("<div class='dot-collections'></div>");
        this.questionElement = $("<div class='question'></div>");

        this.listOfRandom = randomLib.getRandom(numberOfElement, colorList.getLenghtColor(), false);

        this.selected = randomLib.getRandom(1, numberOfElement)[0];

        for (var i = 0; i < this.numberOfElement; i++) {
            this.listOfElement[i] = new Dot(this.element,"<div class='color-dot'></div>",colorList.getColorUsingIndex(this.listOfRandom[i]), this.selected);
            this.colorsDotCollection.append(this.listOfElement[i].element[0]);
        }

        this.questionElement.text(this.listOfElement[this.selected].color.name);

        this.element.append(this.colorsDotCollection);
        this.element.append(this.questionElement);
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



class Game {
    constructor() {
        var rows: RowOfDots[] = [];

        for (var j = 0; j < Options.rows; j++) {
            rows[j] = new RowOfDots('#main', '<div class="row-color"></div>', Options.dots);
            $('#main').append(rows[j].element);
        }
    }
}

        var board = new Board('#header', '<div></div>');


(() => {
    var game = new Game();
 })();







/*
    Todo
    add jquery .d.ts //
    organize files (Change estructure) //
    checkNames //
    Add Board //
    add colors list //
    abstract tamplate base
    add groups
    add learn colors to no repeat
    add modules //
    add Design / bower Bootstrap
*/

