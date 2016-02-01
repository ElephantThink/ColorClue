define(["require", "exports"], function (require, exports) {
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
    exports.getRandom = getRandom;
});
//# sourceMappingURL=randomCore.js.map