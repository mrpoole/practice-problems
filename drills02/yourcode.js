
function countOccurences(array, word) {
    var count = 0;

    for (var index = 0; index < array.length; index++) {
        var currentWord = array[index];
        if (currentWord === word) {
            count++;
        }
    }
    return count;
}

function wordLengths(array) {
    var wordLengthArray = [];
    for (var i = 0; i < array.length; i++) {
        var currentWord = array[i];
        var wordLength = currentWord.length;
        wordLengthArray.push(wordLength);
    }
    return wordLengthArray;
}

function getMinMaxMean(array) {
    var highest = 0;
    var lowest = 100;
    var total = 0;
    var mean = 0;
    array.forEach((num) => {
        if (num < lowest) {
            lowest = num;
        }
        if (num > highest) {
            highest = num;
        }
        total += num;
    });
    mean = total / array.length;
    return { min: lowest, max: highest, mean: mean };
}

function findMode(array) {
    var currentNum;
    var timesOccurred = 0;
    var currentHighestTimesAppeared = 0;

    for(var index = 0; index < array.length; index++) {
        var currentNum = array[index];
        for(var secondNum = 0; secondNum < array.length; secondNum++) {
            if(currentNum === secondNum) {
                ++timesOccurred;
            }
            if(timesOccurred > currentHighestTimesAppeared) {
                currentHighestTimesAppeared = timesOccurred;
                mostFrequent = currentNum;
            }
        }
        return mostFrequent;
    }
    
}

