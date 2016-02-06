
export function getRandom(returnLenght: number, gap: number, float?: boolean): number[] {
    var listOfRandom: number[] = [];
    var randomNumber: number;

    function getRandomNumber() {


        function randomness() {
            return (float) ? Math.random() * gap : Math.floor(Math.random() * gap);
        }


        randomNumber = randomness();

        while (listOfRandom.indexOf(randomNumber) !== -1) {
            randomNumber = randomness();
        } ;

        listOfRandom.push(randomNumber);
    }

    for (var i = 0; i < returnLenght; i++) {
        getRandomNumber();
    }

    return listOfRandom;
}
