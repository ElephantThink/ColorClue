/// <reference path="../typings/jquery/jquery.d.ts" />

export interface IAttrs {
}

type template = string;

export class Base {
    parentElement: JQuery;
    element: JQuery;

    constructor(parentElement: any, template: template) {
        this.parentElement = (typeof(parentElement)==='string') ? $(parentElement) : parentElement;
        this.element = $(template);
    }

    addElement():void {
        this.parentElement.append(this.element);
    }

    addAttr(attrs: IAttrs):void {
            this.element.attr(attrs);
    }

    addStyle(csses: IAttrs):void {
            this.element.css(csses);
    }

    addEvent(nameEvent:string,callBack:Function):void {
        this.element.on(nameEvent, (e) => {
            callBack(e);
        })
    }
}

//Should be in other Library of Generators
export class listGenerator < T >{
    listOf: T[] = [];

    getItemFromIndex(index:number): T {
        return this.listOf[index];
    }

    addItem(T) {
        this.listOf.push(T);
    }
}