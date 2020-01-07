randomNumGen = (max) => Math.ceil(Math.random() * max)

const d20 = document.getElementById("dTwentyBtn");
const d20Display = document.getElementById("dTwentyOutput");

d20.addEventListener("click", function() {
    rollNSidedDie(20)
})
d12.addEventListener("click", function() {
    rollNSidedDie(12)
})
d10.addEventListener("click", function() {
    rollNSidedDie(10)
})
d8.addEventListener("click", function() {
    rollNSidedDie(8)
})
d6.addEventListener("click", function() {
    rollNSidedDie(6)
})
d4.addEventListener("click", function() {
    rollNSidedDie(4)
})

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