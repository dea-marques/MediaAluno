const students = [
{
name: "Luiz",
firstTest: 7,
secondTest: 5,      
},
{
name: "Roberta",
firstTest: 10,
secondTest: 8,
},
{
name: "Diego",
firstTest: 10,
secondTest: 6,
},
{
name: "Leticia",
firstTest: 5,
secondTest: 8,
}
]

function average(firstTest, secondTest) {
 return ((firstTest + secondTest) / 2).toFixed(2)
}
      
function printStudent(student) {
 return `A sua média ${student.name} foi de ${average(student.firstTest, student.secondTest)}`
}

for (let student of students) {
 let averageMessage = printStudent(student)
 alert(averageMessage)
}

