const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
];

const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
];

const studentCount = students.length; 

const studentCountElement = document.querySelector("#studentCount");

studentCountElement.textContent = studentCount;

const gradeScores = students.map(student => student.grade);

const numericGrades = gradeScores.map(grade => Number(grade));

let totalGrade = 0;

for (let i = 0; i < numericGrades.length; i++) {
    totalGrade += numericGrades[i];
}

const averageGrade = totalGrade / numericGrades.length;

const roundedAverage = Math.ceil(averageGrade);

let averageLetter;

if (roundedAverage === 6) {

    averageLetter = "A";
} else if (roundedAverage === 5) {
    averageLetter = "B";
} else if (roundedAverage === 4) {
    averageLetter = "C";
} else if (roundedAverage === 3) {
    averageLetter = "D";
} else if (roundedAverage === 2) {
    averageLetter = "E";
} else if (roundedAverage === 1) {
    averageLetter = "F";
}

const averageGradeElement = document.querySelector("#averageGrade");

averageGradeElement.textContent = averageLetter

for (let i = 0; i < grades.length; i++) {
    const currentGrade = grades[i];
    const currentScore = currentGrade.score;
    const matchingGrades = numericGrades.filter(grade => grade === currentScore);
    const matchingCount = matchingGrades.length;
    const gradeElement = document.querySelector("#grade" + currentGrade.letter);
    gradeElement.textContent = matchingCount;

}

const ages = students.map(student => student.age);

let totalAge = 0; 

for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}

const averageAge = totalAge / ages.length;

const roundedAverageAge = averageAge.toFixed(2);

const averageAgeElement = document.querySelector("#averageAge");
averageAgeElement.textContent = roundedAverageAge;

const highSchoolStudents = students.filter(student => student.age === 19);
const highSchoolCount = highSchoolStudents.length;

const experiencedStudents = students.filter(student => student.workexperience >= 1);
const experiencedCount = experiencedStudents.length;

const highSchoolElement = document.querySelector("#highSchool");
highSchoolElement.textContent = highSchoolCount;

const workExperienceElement = document.querySelector("#workExperience");
workExperienceElement.textContent = experiencedCount;

//https://chatgpt.com/share/6ac6ae33-7954-83ed-b03b-1cd79f2bf353 Dette er chatten jeg brukte
// som hjelp med oppgaven. Synes oppgaven var ekstremt vanskelig, og ville nok ikke ha greid å gjøre det uten veiledning av KI.