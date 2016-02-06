define(["require", "exports"], function (require, exports) {
    function getRandom(returnLenght, gap, float) {
        var listOfRandom = [];
        var randomNumber;
        function getRandomNumber() {
            function randomness() {
                return (float) ? Math.random() * gap : Math.floor(Math.random() * gap);
            }
            randomNumber = randomness();
            while (listOfRandom.indexOf(randomNumber) !== -1) {
                randomNumber = randomness();
            }
            ;
            listOfRandom.push(randomNumber);
        }
        for (var i = 0; i < returnLenght; i++) {
            getRandomNumber();
        }
        return listOfRandom;
    }
    exports.getRandom = getRandom;
});
//# sourceMappingURL=randomCore.js.map