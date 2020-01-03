function RNG(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const x = document.getElementById("dTwentyBtn");
const y = document.getElementById("dTwentyOutPut");

x.addEventListener("click", RespondNumbs);
}