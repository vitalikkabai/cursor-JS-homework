const getChineseChar = () => String.fromCharCode(String(Date.now()).slice(-5));


const getRandomChinese = (length) => {
    return new Promise((resolve, reject) => {
        if (length >= 0) {
            let result = "";
            let count = 0
            for (var i = 0; i < length; i++) {
                setTimeout(() => {
                    result += getChineseChar();
                    count++;
                    if (count === length) {
                        resolve(result);
                    }
                }, 50 * (i + 1));
            }
        } else {
        	reject();	
        }
    });
}

getRandomChinese(4).then(result => {
    console.log('Done!');
    console.log(result);
}).catch(()=>{
	console.log("This length is uncorrectable!");
})