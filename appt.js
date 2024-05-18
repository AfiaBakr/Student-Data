#! 
let studentData = [{
        Name: "Afia",
        RollNo: 112244,
        Age: 30,
        Address: "Flat no 1407, Sadder,Karachi",
    }, {
        Name: "Huma",
        RollNo: 105644,
        Age: 27,
        Address: "H no 127, Nazimabad, Karachi",
    }, {
        Name: "Uzma",
        RollNo: 245167,
        Age: 23,
        Address: "Flat no 105, Buns Road, Karachi",
    }, {
        Name: "Atia",
        RollNo: 201123,
        Age: 31,
        Address: "H no 128, Clifton, Karachi"
    }];
for (let i = 0; i < studentData.length; i++) {
    console.log(studentData[i]);
}
for (let i = 0; i < studentData.length; i++) {
    console.log("Name:" + " " + studentData[i].Name);
}
for (let i = 0; i < studentData.length; i++) {
    console.log("Roll No:" + " " + studentData[i].RollNo);
}
for (let i = 0; i < studentData.length; i++) {
    console.log("Age:" + " " + studentData[i].Age);
}
for (let i = 0; i < studentData.length; i++) {
    console.log("Address:" + " " + studentData[i].Address);
}
for (let i = 0; i < 1; i++) {
    console.log(studentData[0]);
}
export {};
