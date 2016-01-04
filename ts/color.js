var colorList;
(function (colorList) {
    colorList.LISTOFCOLOR = [
        { name: "Pink", hex: "#FFC0CB", groupColor: 'Pink Colors' },
        { name: "Light Pink", hex: "#FFB6C1", groupColor: 'Pink Colors' },
        { name: "Hot Pink", hex: "	#FF69B4", groupColor: 'Pink Colors' },
        { name: "Deep Pink", hex: "#FF1493", groupColor: 'Pink Colors' },
        { name: "Pale Violet Red", hex: "#DB7093", groupColor: 'Pink Colors' },
        { name: "Medium Violet Red", hex: "#C71585", groupColor: 'Pink Colors' },
        { name: "Lavender", hex: "#E6E6FA", groupColor: 'Purple Colors' },
        { name: "Thistle", hex: "#D8BFD8", groupColor: 'Purple Colors' },
        { name: "Plum", hex: "#DDA0DD", groupColor: 'Purple Colors' },
        { name: "Orchid ", hex: "#DA70D6", groupColor: 'Purple Colors' },
        { name: "Violet", hex: "#EE82EE", groupColor: 'Purple Colors' },
        { name: "Fuchsia", hex: "#FF00FF", groupColor: 'Purple Colors' },
        { name: "Magenta", hex: "#FF00FF", groupColor: 'Purple Colors' },
        { name: "Medium Orchid", hex: "#BA55D3", groupColor: 'Purple Colors' },
        { name: "Dark Orchid", hex: "#9932CC", groupColor: 'Purple Colors' },
        { name: "Dark Violet", hex: "#9400D3", groupColor: 'Purple Colors' },
        { name: "Blue Violet", hex: "#8A2BE2", groupColor: 'Purple Colors' },
        { name: "Dark Magenta", hex: "#8B008B", groupColor: 'Purple Colors' },
        { name: "Purple", hex: "#800080", groupColor: 'Purple Colors' },
        { name: "Medium Purple", hex: "#9370DB", groupColor: 'Purple Colors' },
        { name: "Medium Slate Blue", hex: "#7B68EE", groupColor: 'Purple Colors' },
        { name: "Slate Blue", hex: "#6A5ACD", groupColor: 'Purple Colors' },
        { name: "Dark Slate Blue", hex: "#483D8B", groupColor: 'Purple Colors' },
        { name: "Rebecca Purple", hex: "#663399", groupColor: 'Purple Colors' },
        { name: "Indigo", hex: "#4B0082", groupColor: 'Purple Colors' }
    ];
})(colorList || (colorList = {}));
var colorTools;
(function (colorTools) {
    function getColorFromName(colorName) {
        var hexNumber = undefined;
        colorList.LISTOFCOLOR.forEach(function (value, index) {
            if (colorName.toLowerCase() === value.name.toLowerCase()) {
                hexNumber = value;
            }
        });
        return hexNumber;
    }
    colorTools.getColorFromName = getColorFromName;
    function getColorUsingIndex(index) {
        return colorList.LISTOFCOLOR[index];
    }
    colorTools.getColorUsingIndex = getColorUsingIndex;
    function getLenghtColor() {
        return colorList.LISTOFCOLOR.length;
    }
    colorTools.getLenghtColor = getLenghtColor;
    function getGroupsColor() {
        return [];
    }
    colorTools.getGroupsColor = getGroupsColor;
    function getColorsInGroupsColors() {
        return [];
    }
    colorTools.getColorsInGroupsColors = getColorsInGroupsColors;
})(colorTools || (colorTools = {}));
var randomLib;
(function (randomLib) {
    function getRandom(returnLenght, gap, float) {
        var listOfRandom = [];
        var randomNumber;
        function getRandomNumber() {
            randomNumber = (float) ? Math.random() * gap : Math.floor(Math.random() * gap);
            if (listOfRandom.indexOf(randomNumber) !== -1) {
                getRandomNumber();
            }
            else {
                listOfRandom.push(randomNumber);
            }
        }
        for (var i = 0; i < returnLenght; i++) {
            getRandomNumber();
        }
        return listOfRandom;
    }
    randomLib.getRandom = getRandom;
})(randomLib || (randomLib = {}));
// function checkAnswer(isCorrect: boolean): boolean {
//     console.log(isCorrect);
//     return isCorrect;
// }
var Dot = (function () {
    function Dot(item, selected) {
        var _this = this;
        this.color = item;
        this.element = $("<div class='color-dot " + item.hex + "' style='background-color:" + item.hex + ";'></div>");
        console.log(selected);
        this.element.click(function (e) { _this.checkAnswer(e, selected); });
    }
    Dot.prototype.checkAnswer = function (e, selected) {
        var isCorrect = e.currentTarget === this.element.parent('.dot-collections').find('.color-dot').eq(selected)[0];
        this.element.parent('.dot-collections').find('.color-dot').off('click');
        if (isCorrect) {
            this.element.addClass('correct');
        }
        else {
            this.element.addClass('incorrect');
            this.element.parent('.dot-collections').find('.color-dot').eq(selected).addClass('correct');
        }
    };
    return Dot;
})();
var RowOfDots = (function () {
    function RowOfDots(numberOfElement) {
        this.listOfElement = [];
        this.numberOfElement = numberOfElement;
        this.outterElement = $("<div class='row-color'></div>");
        this.colorsDotCollection = $("<div class='dot-collections'></div>");
        this.questionElement = $("<div class='question'></div>");
        this.listOfRandom = randomLib.getRandom(numberOfElement, 24, false);
        this.selected = randomLib.getRandom(1, numberOfElement)[0];
        for (var i = 0; i < this.numberOfElement; i++) {
            this.listOfElement[i] = new Dot(colorTools.getColorUsingIndex(this.listOfRandom[i]), this.selected);
            this.colorsDotCollection.append(this.listOfElement[i].element[0]);
        }
        this.questionElement.text(this.listOfElement[this.selected].color.name);
        ;
        this.outterElement.append(this.colorsDotCollection);
        this.outterElement.append(this.questionElement);
    }
    return RowOfDots;
})();
var rows = [];
for (var j = 0; j < 3; j++) {
    rows[j] = new RowOfDots(3);
    $('#main').append(rows[j].outterElement);
}
//# sourceMappingURL=color.js.map