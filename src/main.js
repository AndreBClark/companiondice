function RNG(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const x = document.getElementById("dTwentyBtn");
const y = document.getElementById("dTwentyOutPut");

x.addEventListener("click", RespondNumbs);

function RespondNumbs() {
    let start = 1;
    let end = RNG(1, 21);
    let ticks = 20;
    let speed = 60;

    y.innerHTML = end;

    let randomNumbers = [end]

    for (let i = 0; i < ticks - 1; i++) {
        randomNumbers.unshift(
            Math.floor(Math.random() * (end - start + 1) + start)
        );
    }

    console.log(randomNumbers.length)

    let z = 0;
    let interval = setInterval(function() {

        y.innerHTML = randomNumbers.shift();

        if (++z === ticks) {
            window.clearInterval(interval);
        }

    }, speed);
}