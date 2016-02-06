define(["require", "exports"], function (require, exports) {
    function getRandom(returnLenght, gap, float) {
        var listOfRandom = [];
        var randomNumber;
        if (returnLenght > gap) {
            console.log(returnLenght, gap, float);
        }
        function getRandomNumber() {
            randomNumber = (float) ? Math.random() * gap : Math.floor(Math.random() * gap);
            if (listOfRandom.indexOf(randomNumber) === -1) {
                listOfRandom.push(randomNumber);
            }
            else {
                getRandomNumber();
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