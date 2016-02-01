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
        // this.addData('_data', {});
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

    addData(element:any,key:string, data: any) {
        jQuery.data(element,key, data);
    }

    getData(element:any,key?: string) {
        if (key) {
            return jQuery.data(element)[key];
        } else {
            return jQuery.data(element);
        }
    }
}

//Should be in other Library of Generators
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