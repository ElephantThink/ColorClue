/// <reference path="../../../typings/jquery/jquery.d.ts" />
define(["require", "exports"], function (require, exports) {
    var Base = (function () {
        function Base(parentElement, template) {
            this.parentElement = (typeof (parentElement) === 'string') ? $(parentElement) : parentElement;
            this.element = $(template);
            jQuery.data(this.element[0], '$$Data', {});
        }
        Base.prototype.appendThisElement = function () {
            this.parentElement.append(this.element);
        };
        Base.prototype.addAttr = function (attrs) {
            this.element.attr(attrs);
        };
        Base.prototype.addStyle = function (csses) {
            this.element.css(csses);
        };
        Base.prototype.addEvent = function (nameEvent, callBack) {
            this.element.on(nameEvent, function (e) {
                callBack(e);
            });
        };
        Base.prototype.doJQuery = function (method, value) {
            this.element[method](value);
        };
        Base.prototype.addData = function (key, data) {
            jQuery.data(this.element[0], '$$Data')[key] = data;
        };
        Base.prototype.setData = function (key, data) {
            jQuery.data(this.element[0], '$$Data')[key] = data;
            this.parentElement.empty();
            this.appendThisElement();
        };
        Base.prototype.getData = function (key) {
            return key ? jQuery.data(this.element[0])['$$Data'][key] : jQuery.data(this.element[0])['$$Data'];
        };
        return Base;
    })();
    exports.Base = Base;
    //Should be in other Library of Generatorsx
    var listGenerator = (function () {
        function listGenerator() {
            this.listOf = [];
        }
        listGenerator.prototype.getItemFromIndex = function (index) {
            return this.listOf[index];
        };
        listGenerator.prototype.addItem = function (T) {
            this.listOf.push(T);
        };
        listGenerator.prototype.getLength = function () {
            return this.listOf.length;
        };
        return listGenerator;
    })();
    exports.listGenerator = listGenerator;
    //Utility
    function getDataFromElement(element) {
        return $.data(element);
    }
    exports.getDataFromElement = getDataFromElement;
});
//# sourceMappingURL=domCore.js.map