randomNumberGenerator = (max) => Math.ceil(Math.random() * max)

const d20 = document.getElementById("dTwentyBtn");
const d20Display = document.getElementById("dTwentyOutPut");

d20.addEventListener("click", function() {
    rollNSidedDie(20)
})

function rollNSidedDie(sides) {
    let result = randomNumberGenerator(sides);
    let ticks = 20;
    let speed = 60;

    d20Display.innerHTML = result;

    let randomArray = [result]

    for (let i = 0; i < ticks - 1; i++) {
        randomArray.unshift(
            randomNumberGenerator(sides)
        );
    }

    let z = 0;
    let interval = setInterval(function() {

        d20Display.innerHTML = randomArray.shift();

        if (++z === ticks) {
            window.clearInterval(interval);
        }

    }, speed);
}