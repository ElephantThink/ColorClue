/// <reference path="../typings/jquery/jquery.d.ts" />
import $ = require('jquery');
import randomLib = require('./lib/utility/randomCore');
import colorList = require('./lib/color/colorList');
import colorMetric = require('./lib/color/colorCore');
import component = require('./lib/dom/domCore');


var Options = {
    height: 2,
    width: 2
};

class Frame extends component.Base {

    height: number;
    width: number;
    listOfBox: Box[] = []

    constructor(private parent,private template) {
        super(parent, template);
        this.height = $(window).height();
        this.width = $(window).width();

        this.addStyle({
            'height': this.height + 'px',
            'width': this.width + 'px'
        });

        this.createBox();
        this.appendThisElement();
    }

    createBox() {
        for (var x = 0; x < Options.height * Options.width; x++){
             this.listOfBox.push(new Box(this.parentElement,'<div class="box-color"></div>',this.height/Options.height,this.width/Options.width));
        }
    }
}

class Box extends component.Base {
    constructor(parentElement, template,h,w) {
        super(parentElement, template);

        this.addStyle({
            'height': h + 'px',
            'width': w + 'px'
        });

        this.setColor();
        this.setTimer();
        this.appendThisElement();
   }

    setColor() {
        let color: colorList.IColor = colorList.getColorUsingIndex(randomLib.getRandom(1,colorList.getLenghtOfListColor())[0])
        this.addStyle({ backgroundColor: color.hex });
        this.doJQuery('html', color.name);
    }

    setTimer() {
        setInterval(() => this.setColor(), (20-randomLib.getRandom(1,15)[0])*1000);
    }
}






var frame = new Frame('#main2','<div class="frame"></div>');




