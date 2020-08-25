const audioNodeList = document.querySelectorAll('audio');
console.log("button:", audioNodeList);

document.addEventListener('keydown', (event) => {
    audioNodeList.forEach(function(element) {
    	if (element.id == event.keyCode) {
    		element.play();
    	}
    });
})

const buttonNodeList = document.querySelectorAll('.button');

document.addEventListener('click', (event) => {
    console.log(event);
    if (event.target.closest('.button')) {
        buttonNodeList.forEach(function(element, index) {
            if (element.lastElementChild.innerText == event.path[1].lastElementChild.innerHTML) {
                audioNodeList[index].play();
            }
        });
    }
})