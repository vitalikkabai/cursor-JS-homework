const firstForm = document.getElementById('firstForm');
const secondForm = document.getElementById('secondForm');
const firstResult = document.getElementById('firstResult');
const firstError = document.getElementById('firstError');
const secondResult = document.getElementById('secondResult');
const thirdResult = document.getElementById('thirdResult');
const fourthResult = document.getElementById('fourthResult');
const fifthResult = document.getElementById('fifthResult');
const sixthResult = document.getElementById('sixthResult');

const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];


firstForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const studentName = event.target[0].value;
    if (students.some(item => item.name === studentName)) {
        firstResult.innerText = `Функція №1: [${getSubjects(studentName)}]`;
        const averageMark = getAverageMark(studentName);
        secondResult.innerText = `Функція №2: [${averageMark}]`;
        thirdResult.innerText = `Функція №3: ${getStudentInfo(studentName, averageMark)}`;
        fourthResult.innerText = `Функція №4: [${getStudentsNames()}]`;
        fifthResult.innerText = `Функція №5: ${getBestStudent()}`;
    } else {
        firstError.innerText = "Введіть правильне ім'я студента. Та майте повагу пишіть з великої букви;)";
    }
    const inputText = event.target[0]
});

secondForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputText = event.target[0].value;
    sixthResult.innerText = `Функція №5: ${calculateWordLetters(inputText)}`
});