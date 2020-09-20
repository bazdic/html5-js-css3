self.addEventListener("message", function (event) {
    var number = event.data;
    var results = calculateFibonacciSequence(number);
    self.postMessage(results);
});

function calculateFibonacciSequence(number) {
    var array = [];

    if (isNaN(number)) {
        return array;
    }

    if (number > 0) {
        array.push(0);
    }

    if (number > 1) {
        array.push(1);
    }

    var currentSum = 1;
    var previousSum = 0;
    var tmp = 0;

    for (var i = 1; i < number - 1; i++) {
        tmp = previousSum + currentSum;
        previousSum = currentSum;
        currentSum = tmp;

        array.push(currentSum);
        sleep(500);
    }

    return array;
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}