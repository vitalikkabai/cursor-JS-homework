const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


const createStudentsPair = (students) => {
	const studentsPair = [];
	studentsPair.push([students[0], students[2]]);
	studentsPair.push([students[1], students[3]]);
	studentsPair.push([students[4], students[5]]);
	return studentsPair;
}



const addStudentsPairSubject = () => {
	let studentsSubject = createStudentsPair(students);

	for (var i = 0; i < studentsSubject.length; i++) {
		studentsSubject[i][0] = studentsSubject[i].join(' і ');
		studentsSubject[i].splice(1, 1, themes[i]);
	}
	return studentsSubject;
}



const addStudentsMarks = (students) => {
	let studentsMarksList = [];
	for (var i = 0; i < students.length; i++) {
		studentsMarksList.push([students[i], marks[i]]);
	}
	return studentsMarksList;
}


const addStudentsPairMarks = () => {
	let pairMarksArr = addStudentsPairSubject();
	for (var i = 0; i < pairMarksArr.length; i++) {
		pairMarksArr[i].push(Math.floor((Math.random()*4)+1));
	}
	return pairMarksArr;
}


createStudentsPair(students);
console.log(createStudentsPair(students));

addStudentsPairSubject();
console.log(addStudentsPairSubject());

addStudentsMarks(students);
console.log(addStudentsMarks(students));

addStudentsPairMarks();
console.log(addStudentsPairMarks());

export default addStudentsPairMarks();