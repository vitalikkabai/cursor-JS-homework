class Student {
    constructor(university, course, fullName) {
        this.fullName = fullName;
        this.university = university;
        this.course = course;
        this.studentsMarks = [5, 4, 4, 5];
        this.studentDismiss = false;
    }

    getInfo() {
        return this.studentDismiss ? null : `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    }

    get marks() {
        return this.studentDismiss ? null : this.studentsMarks;
    }

    set marks(mark) {
        this.studentDismiss ? null : this.studentsMarks.push(mark);
    }

    getAverageMark() {
        return Math.round(this.studentDismiss ? null : this.studentsMarks.reduce((acc, el) => {return acc + el}, 0) / this.studentsMarks.length);
    }

    dismiss() {
        return this.studentDismiss = true;
    }

    recover() {
        return this.studentDismiss = false;
    }
}


const student = new Student('НУЛП', 2, 'Петро Хома');

console.log("Сукупна інформація про студента:", student.getInfo());
console.log("Оцінки студента:", student.marks);
student.marks = 5;
console.log("Змінені оцінки студента:", student.marks);
console.log("Заокруглена середня оцінка студента:", student.getAverageMark());

console.log("Студента вигнали?", student.dismiss());

console.log("Сукупна інформація про студента:", student.getInfo());
console.log("Оцінки студента:", student.marks);
student.marks = 5;
console.log("Змінені оцінки студента:", student.marks);
console.log("Заокруглена середня оцінка студента:", student.getAverageMark());

console.log("Студента вигнали?", student.recover());

console.log("Сукупна інформація про студента:", student.getInfo());
console.log("Оцінки студента:", student.marks);
student.marks = 5;
console.log("Змінені оцінки студента:", student.marks);
console.log("Заокруглена середня оцінка студента:", student.getAverageMark());

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName); {
            setInterval(() => {
                if (!this.studentDismiss && this.getAverageMark() >= 4) {
                    this.getScholarship()
                }
            }, 30000);
        }
    }

    getScholarship() {
        console.log('Ви отримали 1400 грн. стипендії');
    }
}
const budgetStudent = new BudgetStudent('НУЛП', 2, 'Петро Хома');