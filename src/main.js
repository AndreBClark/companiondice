randomNumGen = (max) => Math.ceil(Math.random() * max)

const d20 = document.getElementById("dTwentyBtn");
const d20Display = document.getElementById("dTwentyOutput");

function rollNSidedDie(sides) {
    let speed = 60;
    let result = randomNumGen(sides);
    let ticks = randomNumGen(10) + 10;

    d20Display.innerHTML = result;

    let randomArray = [result]

    for (let i = 0; i < ticks; i++) {
        randomArray.unshift(
            randomNumGen(sides)
        );
    }

    let displayRefresh = 0;
    let interval = setInterval(function() {
        d20Display.innerHTML = randomArray.shift();
        if (++displayRefresh === ticks) {
            window.clearInterval(interval);
        }
    }, speed);
}