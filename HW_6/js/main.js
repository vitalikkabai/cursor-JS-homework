const getSubjects = (studentName) => {
    let studentSubjects = [];
    students.forEach((student) => {
        if (student.name === studentName) {
            studentSubjects = Object.keys(student.subjects);
        }
    })
    return studentSubjects.map(item => item[0].toUpperCase() + item.slice(1).replace("_", " "));
}

// Функція 1

const getAverageMark = (studentName) => {
    let studentMarkArr = [];
    students.forEach((student) => {
        if (student.name === studentName) {
            studentMarkArr = [].concat.apply([], Object.values(student.subjects));
        }
    })
    return Math.round(((studentMarkArr.reduce((acc, curr) => acc + curr)) / (studentMarkArr.length)) * 100) / 100;
}

// Функція 2

const getStudentInfo = (studentName, averageMark) => {
    let studensInfoObj = {};
    students.forEach((student) => {
        if (student.name === studentName) {
            studensInfoObj = Object.assign({ "averageMark": averageMark }, student);
        }
    })
    delete studensInfoObj.subjects;
    return Object
        .entries(studensInfoObj)
        .reverse()
        .reduce((acc, [key, value]) => { return acc + `${key}: ${value}, ` }, "");
}

// Функція 3

const getStudentsNames = () => {
    return students.map(item => item.name).sort();
}

// Функція 4

const getBestStudent = () => {
    averageMarkList = students.map(item => getAverageMark(item.name));
    return students[averageMarkList.indexOf(Math.max(...averageMarkList))].name;
}

// Функція 5

const calculateWordLetters = (inputText) => {
    const inputTextArr = inputText.toLowerCase().split('');
    for (var i = 0; i < inputTextArr.length; i++) {
        if (inputTextArr[i] === " ") {
            inputTextArr.splice(i, 1);
            i--;
        }
    }
    const wordLettersObj = {}
    inputTextArr.forEach(item => {
        (wordLettersObj[item] != undefined) ? ++wordLettersObj[item] : wordLettersObj[item] = 1;
    })
    return Object.entries(wordLettersObj)
        .reduce((acc, [key, value]) => { return acc + `${key}: ${value}, ` }, "");;
}

// Функція 6