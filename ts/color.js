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
        //Return an Array of random numbers
        return listOfRandom;
    }
    randomLib.getRandom = getRandom;
})(randomLib || (randomLib = {}));
var Circle = (function () {
    function Circle(hex) {
        this.element = $("<div class='color-dot " + hex + "' style='background-color:" + hex + ";'></div>")[0];
    }
    ;
    return Circle;
})();
var p = new Circle(colorTools.getColorUsingIndex(randomLib.getRandom(1, 24, false)[0]).hex);
$('#main').append(p.element);
//# sourceMappingURL=color.js.map