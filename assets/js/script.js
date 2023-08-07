var questionBox = document.querySelector(".quizQuestions");
var questions = ["whatever", "things"]

function AdjustingInterval(workFunc, interval, errorFunc) {
    var that = this;
    var expected, timeout;
    this.interval = interval;

    this.start = function() {
        expected = Date.now() + this.interval;
        timeout = setTimeout(step, this.interval);
    }

    this.stop = function() {
        clearTimeout(timeout);
    }

    function step() {
        var drift = Date.now() - expected;
        if (drift > that.interval) {
            if (errorFunc) errorFunc();
        }
        workFunc();
        expected += that.interval;
        timeout = setTimeout(step, Math.max(0, that.interval-drift));
    }
}

var timerNum = 0;

var doWork = function() {
    console.log(++timerNum);
};

var doError = function() {
    console.warn('The drift exceeded the interval.');
};

var timer = new AdjustingInterval(doWork, 1000, doError)

// addEventListener();
console.log(questions[1]);

const question = document.createElement("p");
question.innerHTML = questions[1];
document.getElementById("#qBox").appendChild("question");

console.log(questions[1]);