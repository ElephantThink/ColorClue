/// <reference path="../typings/jquery/jquery.d.ts" />
import $ = require('jquery');
import randomLib = require('randomCore');
import colorList = require('colorList');
import colorMetric = require('colorCore');
import component = require('domCore');
import timing = require('timingCore');

class Board extends component.Base {
    private goodPoints: number = 0;
    private badPoints: number = 0;

        constructor(parentElement: string, template: string) {
            super(parentElement, template);
            this.appendThisElement();
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
            this.doJQuery('text','Good : ' + this.goodPoints + '/ Bad : ' + this.badPoints);
        };
}

class Dot extends component.Base {
    color: colorList.IColor;
    constructor(parentElement: any, template: string, item: colorList.IColor, selected: number) {
        super(parentElement, template);
        this.appendThisElement();

        this.addAttr({
            title: item.hex,
            group: item.groupColor
        });

        this.addStyle({
            backgroundColor: item.hex,
        });

        this.addEvent('click', (e) => { this.checkAnswer(e, selected) });

        var className = (colorMetric.hexToHsl(item.hex).l > 0.60) ? 'light' : 'Dark ';
        this.element.addClass(className);
        this.color = item;
    }

    checkAnswer(e: Event, selected: number): void {
        this.parentElement.find('.color-dot').off('click');

        if (!(e.currentTarget === this.parentElement.find('.color-dot').eq(selected)[0])) {
            this.doJQuery('addClass','incorrect');
            board.putBadPoints();
        } else {
            board.putGoodPoints();
        }

        this.parentElement.find('.color-dot').eq(selected).addClass('correct');
        this.parentElement.slideUp('fast');

    }
}


interface IRandomColors {
    listOfRandom: colorList.IColor[],
    selected: number;
}

class RowOfDots extends component.Base{
    private numberOfElement: number;

    colorsDotCollection: component.Base;
    questionElement:component.Base;
    listOfElement: Dot[] = [];
    selection: IRandomColors;


    constructor(parentElement,template,options:IOptions) {
        super(parentElement, template);
        this.numberOfElement = options.dots;
        this.colorsDotCollection = new component.Base(this.element,"<div class='dot-collections'></div>");
        this.questionElement = new component.Base(this.element, "<div class='question'></div>");

        this.selection = this.randomColorGenerator();

        for (var i = 0; i < this.numberOfElement; i++) {

            this.listOfElement[i] = new Dot(this.element, "<div class='color-dot'></div>",this.selection.listOfRandom[i], this.selection.selected);
            this.colorsDotCollection.doJQuery('append',this.listOfElement[i].element[0]);
        }

        this.questionElement.doJQuery('text',this.listOfElement[this.selection.selected].color.name);
        this.colorsDotCollection.appendThisElement();
        this.questionElement.appendThisElement();
    }

    randomColorGenerator() {

        var objectReturn:IRandomColors = {
            selected: undefined,
            listOfRandom: []
        };

        switch (Options.level) {
            case 1:
                var listColorSelected = randomLib.getRandom(this.numberOfElement, colorList.getLenghtOfListColor(), false);

                for (var k = 0; k < listColorSelected.length; k++){
                    objectReturn.listOfRandom.push(colorList.getColorUsingIndex(listColorSelected[k]));
                }

                objectReturn.selected = randomLib.getRandom(1, this.numberOfElement)[0];
                break;
            case 2:

                break;
            case 3:
                var index = randomLib.getRandom(1, colorList.getLenghtOfListColor())[0];
                var colorSelected: colorList.IColor = colorList.getColorUsingIndex(index);

                var colorInTheGroup = colorList.getListColorsInGroups(colorSelected.groupColor);

                var listColorSelected = randomLib.getRandom(this.numberOfElement, colorInTheGroup.length, false);


                for (var k = 0; k < listColorSelected.length; k++){
                    objectReturn.listOfRandom.push(colorInTheGroup[listColorSelected[k]]);
                }


                objectReturn.selected = randomLib.getRandom(1, this.numberOfElement)[0];

                break;

            default:
                break;
        }

        return objectReturn;
    }
}

interface IOptions {
    rows: number;
    dots: number;
    level: number;
}

var Options: IOptions = {
    rows:5,
    dots: 5,
    level: 1,
}

class Game {

    element: JQuery;
    rows: component.listGenerator<RowOfDots>;

    constructor() {
        this.element = $('#main');
        this.rows = new component.listGenerator<RowOfDots>();

        for (var k = 0; k < Options.rows; k++){
            this.addOneRow();
        }
    }


    addOneRow() {
        this.rows.addItem(new RowOfDots(this.element, '<div class="row-color"></div>', Options));
        this.element.append(this.rows.listOf[this.rows.getLength()-1].element);
    }
}

var listOfColors = new component.listGenerator<colorList.IColor>();
var board = new Board('#header', '<div></div>');
var game = new Game();

/*
    =============================
    Todo
    ============================

    add groups //
    add learn colors to no repeat //

medium

documentation


    implement Time Modules

    add Design / bower Bootstrap
*/

