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
const fontGenerator = newFontGenerator(14);


buttonUp.addEventListener("click", () => {
    fontGenerator.next("up").value;
});

buttonDown.addEventListener("click", () => {
    fontGenerator.next("down").value;

});

function* newFontGenerator(fontIndex) {
    let tmp;  
    while (true) {
        tmp = yield testingText.style.fontSize = `${fontIndex}px`;
        if (tmp === "up") {
            fontIndex += 2;

        } else if (tmp === "down") {
            fontIndex -= 2;
        }
    }

}