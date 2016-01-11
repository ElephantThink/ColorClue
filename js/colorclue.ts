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

class Dot extends component.Base {
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
        this.parentElement.slideUp('fast');

    }
}


class RowOfDots extends component.Base{
    private numberOfElement: number;

    colorsDotCollection: component.Base;
    questionElement:component.Base;
    listOfElement: Dot[] = [];
    listOfRandom: number[];
    selected: number;

    constructor(parentElement,template,numberOfElement) {
        super(parentElement, template);
        this.numberOfElement = numberOfElement;
        this.colorsDotCollection = new component.Base(this.element,"<div class='dot-collections'></div>");
        this.questionElement = new component.Base(this.element,"<div class='question'></div>");
        this.listOfRandom = randomLib.getRandom(numberOfElement, colorList.getLenghtColor(), false);
        this.selected = randomLib.getRandom(1, numberOfElement)[0];

        listOfColors.addItem(colorList.getColorUsingIndex(this.listOfRandom[this.selected]));
            if (listOfColors.listOf.indexOf(colorList.getColorUsingIndex(this.listOfRandom[this.selected])) !== -1) {
                this.selected = randomLib.getRandom(1, numberOfElement)[0];
            }
        for (var i = 0; i < this.numberOfElement; i++) {
            this.listOfElement[i] = new Dot(this.element, "<div class='color-dot'></div>",colorList.getColorUsingIndex(this.listOfRandom[i]), this.selected);
            this.colorsDotCollection.element.append(this.listOfElement[i].element[0]);
        }

        this.questionElement.element.text(this.listOfElement[this.selected].color.name);
        this.element.append(this.colorsDotCollection.element);
        this.element.append(this.questionElement.element);
    }
}

interface IOptions {
    rows: number;
    dots: number;
    nivel: number;
}

var Options: IOptions = {
    rows:5,
    dots: 5,
    nivel: 1,
}

class Game {
    constructor() {
        var rows: RowOfDots[] = [];

        function make(i:number) {
             rows[i] = new RowOfDots('#main', '<div class="row-color"></div>', Options.dots);
            $('#main').append(rows[i].element);
        }

        for (var j = 0; j < Options.rows; j++) {
            make(j);
        }

        setTimeout(function() {
            alert('stop');
        }, 60000);

        setInterval(function() {
            if ($('.row-color:visible').length < 5) {
                Options.rows++
                make(Options.rows);
            }
         },100);
    }
}

var listOfColors = new component.listGenerator<colorList.IColor>();
var board = new Board('#header', '<div></div>');
var game = new Game();

/*
    =============================
    Todo
    ============================

    add groups

    add learn colors to no repeat

    implement Time Modules

    add Design / bower Bootstrap
*/

