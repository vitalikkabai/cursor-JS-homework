const idNumber = document.getElementById('idNumber');
const btn = document.getElementById('btn');
let gen = createIdGenerator();

btn.addEventListener("click", () => {
    idNumber.innerText = gen.next().value;

})

function* createIdGenerator() {
    let index = 1;
    while (true) {
        let str = "" + index++;
        let pad = "000000"
        yield pad.substring(0, pad.length - str.length) + str;
    }
}

//


const buttonUp = document.getElementById('upText');
const buttonDown = document.getElementById('downText');
const testingText = document.getElementById('testingText');
const fontGenerator = newFontGenerator();


buttonUp.addEventListener("click", () => {
    testingText.style.fontSize = `${fontGenerator.next("up").value}px`;
});

buttonDown.addEventListener("click", () => {
    testingText.style.fontSize = `${fontGenerator.next("down").value}px`;

});

function* newFontGenerator() {
    let fontIndex = 14;
    let tmp = yield fontIndex;
    if (tmp === "up") {
        while (true) {            
            fontIndex += 2;
            yield fontIndex;

        }
    } else if (tmp === "down") {
        while (true) {
            fontIndex -= 2;
            yield fontIndex;

        }
    }



}