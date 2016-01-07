module randomLib {
    export function getRandom(returnLenght: number, gap: number, float?: boolean): number[] {
        var listOfRandom: number[] = [];
        var randomNumber: number;

        function getRandomNumber() {

            randomNumber = (float) ? Math.random() * gap : Math.floor(Math.random() * gap);

            if (listOfRandom.indexOf(randomNumber) !== -1) {
                getRandomNumber();
            } else {
                listOfRandom.push(randomNumber);
            }

        }

        for (var i = 0; i < returnLenght; i++) {
            getRandomNumber();
        }

        return listOfRandom;
    }
}