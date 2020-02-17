export const cryptoRandomNumberGen = (min, max) => {
    let array = new Uint32Array(1);
    crypto.getRandomValues(array);
    let getFloatingPoint = array[0] / Math.pow(2, 32);
    let randNum = Math.ceil(getFloatingPoint * (max - min)) + min;
    return randNum;
};

export const randomNumGen = (min, max) =>
    Math.ceil(Math.random() * (max - min)) + min;
