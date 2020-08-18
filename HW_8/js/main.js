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
        return this.studentDismiss ? null : this.studentsMarks.push(mark);
    }

    getAverageMark() {
        return Math.round(this.studentDismiss ? null : this.studentsMarks.reduce((acc, el) => acc + el) / this.studentsMarks.length);
    }

    dismiss() {
        return this.studentDismiss = true;
    }

    recover() {
        return this.studentDismiss = false;
    }
}


const student = new Student('НУЛП', 2, 'Петро Хома');

console.log(student.getInfo());
console.log(student.marks);
student.marks = 5;
console.log(student.marks);
console.log(student.getAverageMark());

console.log(student.dismiss());

console.log(student.getInfo());
console.log(student.marks);
student.marks = 5;
console.log(student.marks);
console.log(student.getAverageMark());

console.log(student.recover());

console.log(student.getInfo());
console.log(student.marks);
student.marks = 5;
console.log(student.marks);
console.log(student.getAverageMark());

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        if (!this.studentDismiss && this.getAverageMark() >= 4) {
            setInterval(() => this.getScholarship(), 30000);
        }
    }

    getScholarship() {
        console.log('Ви отримали 1400 грн. стипендії');
    }
}
const budgetStudent = new BudgetStudent('НУЛП', 2, 'Петро Хома');