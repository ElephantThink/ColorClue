/// <reference path="../../../typings/jquery/jquery.d.ts" />

export interface IAttrs {
}

type template = string;

export class Base {
    parentElement: JQuery;
    element: JQuery;

    constructor(parentElement: any, template: template) {
        this.parentElement = (typeof(parentElement)==='string') ? $(parentElement) : parentElement;
        this.element = $(template);
        jQuery.data(this.element[0], '$$Data', {});
    }

    appendThisElement():void {
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

    doJQuery(method:string,value) {
        this.element[method](value)
    }

    addData(key: string, data: any) {
        jQuery.data(this.element[0], '$$Data')[key] = data;
    }

    setData(key: string, data: any) {
        jQuery.data(this.element[0], '$$Data')[key] = data;
        this.parentElement.empty();
        this.appendThisElement();
    }

    getData(key?: string) {
        return key ? jQuery.data(this.element[0])['$$Data'][key] : jQuery.data(this.element[0])['$$Data'];
    }
}

//Should be in other Library of Generatorsx
export class listGenerator < T >{
    listOf: T[] = [];

    getItemFromIndex(index:number): T {
        return this.listOf[index];
    }

    addItem(T):void {
        this.listOf.push(T);
    }

    getLength(): number {
        return this.listOf.length;
    }
}


//Utility

export function getDataFromElement(element: any) {
    return $.data(element);
}