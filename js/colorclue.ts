/// <reference path="../typings/jquery/jquery.d.ts" />
import $ = require('jquery');
import randomLib = require('./lib/utility/randomCore');
import colorList = require('./lib/color/colorList');
import colorMetric = require('./lib/color/colorCore');
import component = require('./lib/dom/domCore');
// import timing = require('./lib/utility/timingCore');

window['randomLib'] = randomLib;
window['colorList'] = colorList;

export class Dot extends component.Base {
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

        this.addData('color',item)

        var className = (colorMetric.hexToHsl(item.hex).l > 0.60) ? 'light' : 'Dark ';
        this.element.addClass(className);
        this.color = item;
    }

    checkAnswer(e: Event, selected: number): void {
        this.parentElement.find('.color-dot').off('click');

        if (!(this.getData().color.hex === component.getDataFromElement(this.parentElement[0]).$$Data.colorSelected.hex)) {
            this.doJQuery('addClass','incorrect');
            board.putBadPoints();
        } else {
            board.putGoodPoints();
        }

        this.parentElement.find('.color-dot').eq(selected).addClass('correct');
        this.parentElement.slideUp('fast');
        rule.addOneRow();

    }
}

export interface IOptions {
    rows: number;
    dots: number;
    level: number;
}

 interface IRandomColors {
     selected: any,
     listOfRandom: colorList.IColor[]

 }


export class RowOfDots extends component.Base{
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

            console.log(this.selection);

            this.listOfElement[i] = new Dot(this.element, "<div class='color-dot'></div>", this.selection.listOfRandom[i], this.selection.selected);

            this.colorsDotCollection.doJQuery('append',this.listOfElement[i].element[0]);
        }

        this.addData('colorSelected', this.selection.listOfRandom[this.selection.selected]);

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
                var listColorSelected = randomLib.getRandom(Options.dots, colorList.getLenghtOfListColor(), false);

                for (var k = 0; k < listColorSelected.length; k++){
                    objectReturn.listOfRandom.push(colorList.getColorUsingIndex(listColorSelected[k]));
                }

                objectReturn.selected = randomLib.getRandom(1, Options.dots)[0];
                break;
            case 2:

                break;
            case 3:
                var index = randomLib.getRandom(1, colorList.getLenghtOfListColor())[0];
                var colorSelected: colorList.IColor = colorList.getColorUsingIndex(index);

                var colorInTheGroup = colorList.getListColorsInGroups(colorSelected.groupColor);

                console.log(index,colorSelected,colorInTheGroup.length)

                var listColorSelected = randomLib.getRandom(Options.dots, colorInTheGroup.length, false);


                for (var k = 0; k < listColorSelected.length; k++){
                    objectReturn.listOfRandom.push(colorInTheGroup[listColorSelected[k]]);
                }


                objectReturn.selected = randomLib.getRandom(1, Options.dots)[0];

                break;

            default:
                break;
        }

        return objectReturn;
    }
}

export class Board extends component.Base {
    private goodPoints: number = 0;
    private badPoints: number = 0;

        constructor(parentElement: string, template: string) {
            super(parentElement, template);
            this.appendThisElement();
            this.addData('goodPoints', 0);
            this.addData('badPoints', 0);
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



class Rule {

      element: JQuery;
      rows: component.listGenerator<RowOfDots>;

    constructor() {
         this.element = $('#main');
         this.rows = new component.listGenerator<RowOfDots>();
    }

    addOneRow() {
        this.rows.addItem(new RowOfDots(this.element, '<div class="row-color"></div>', Options));
        this.element.append(this.rows.listOf[this.rows.getLength()-1].element);
    }
}


var Options = {
    level: 3,
    rows: 5,
    dots:5
}




class Button extends component.Base{
    constructor(parentElement, template) {

        super(parentElement, template)

        this.addEvent('click', () => {

            this.parentElement.empty();

            listOfColors = new component.listGenerator<colorList.IColor>();
           board = new Board('#header', '<div></div>');
           rule = new Rule();
           game = new Game();

        })
        this.appendThisElement();
    }
}

class IntroScreen extends component.Base{
    constructor(parentElement, template) {
        super(parentElement, template);



        var button = new Button(parentElement, '<input type="button"></input>');
        button.addAttr({value:'click Here'})
    }
}

class Game {
        constructor() {
        for (var k = 0; k < Options.rows; k++){
            rule.addOneRow();
        }
    }
}

var listOfColors, board, rule, game;
var intro = new IntroScreen('.intro', "<div></div>");






// /*
//     =============================
//     Todo
//     ============================


// medium

// documentation


//     implement Time Modules

//     add Design / bower Bootstrap
// */

