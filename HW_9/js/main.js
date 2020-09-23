const container = document.querySelector('.container');

const generateRandomColor = () => {
    return `#${(Math.ceil(Math.random()*16777215)).toString(16)}`
}

const generateBlocks = () => {
    for (var j = 0; j < 5; j++) {
        for (var i = 0; i < 5; i++) {
            const firstLine = document.createElement("div");
            firstLine.classList.add("colorBlock");
            firstLine.style.cssText = `width: 50px; height: 50px; background-color: ${generateRandomColor()}`;
            container.append(firstLine);
        }
    }

}

generateBlocks();

export default setInterval(function generateBlocksInterval() {
    const colorBlockList = document.getElementsByClassName("colorBlock");
    for (var i = 0; i < colorBlockList.length; i++) {
        colorBlockList[i].style.backgroundColor = `${generateRandomColor()}`;
    }
}, 1000);