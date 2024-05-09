#! /usr/bin/env node
class school {
    name = [];
    student = [];
    teacher = [];
    addstudent(stdobj) {
        this.student.push(stdobj);
    }
    addteacher(teobj) {
        this.teacher.push(teobj);
    }
    constructor(name) {
    }
}
class student {
    name;
    rollnumber;
    schoolname;
    constructor(name, rollnumber, schoolname) {
        this.name = name;
        this.rollnumber = rollnumber;
        this.schoolname = schoolname;
    }
}
class teacher extends student {
}
//school name
let school1 = new school("pakistan hight");
let school2 = new school("alsuffah");
let school3 = new school("educonz");
//student name
let s1 = new student("sana", 24001, school.name);
let s2 = new student("sana", 24001, school.name);
let s3 = new student("sana", 24001, school.name);
//teacher
let t1 = new teacher("seerat", 34, school.name);
let t2 = new teacher("fatima", 34, school.name);
let t3 = new teacher("javeria", 34, school.name);
//
school1.addstudent(s1);
school2.addstudent(s2);
school3.addstudent(s3);
//teacher 
school1.addteacher(t1);
school2.addteacher(t2);
school3.addteacher(t3);
console.log(t1);
console.log(t2);
console.log(t3);
console.log(school1);
console.log(school2);
console.log(school3);
export {};
