'use strict';

const fs = require('fs');
global.student = [];
global.studentN = [];

function readStudent(){
    fs.readFile('student.json', (err, data) => {
        if (err) throw err;
        student = JSON.parse(data);
        student.forEach(element =>{
            console.log (element);
            studentN.push(element);
            console.log(studentN);
        });
    });
}

function addStudent(studentData){
    let data = JSON.stringify(studentData);
    fs.writeFile ('student_2.json', data, (err) => {
        if (err) throw err;
        console.log("Data written to file");
    })
}

var dataX={};
    dataX.name = "mkey";
    dataX.age = 3020;
    dataX.gender = "Male";
    dataX.departament = "Informatics CS3";
    dataX.car="Honda";



    var dataY={};
    dataY.name = "angel";
    dataY.age = 2030;
    dataY.gender = "Male";
    dataY.departament = "CS3 TIC";
    dataY.car="TOY";

    studentN.push(dataY);
    studentN.push(dataX);

    readStudent();
    console.log(studentN);

    addStudent(studentN);


