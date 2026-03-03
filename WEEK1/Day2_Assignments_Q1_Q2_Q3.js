//Assignments:
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];




// 1. Insert new Emp at 2nd position
    const newEmp = {
    eno: 106,
    name: "Divya",
    marks: [80, 85, 88],
    };

    employees.splice(1, 0, newEmp);
    console.log("Inserted new Employee at 2nd position",employees);

// 2. Remove an emp with name "Kiran"
    let empIndex=employees.findIndex(empObj=>empObj.name==="Kiran");
    employees.splice(empIndex,1);
    console.log("Removed employee named Kiran",employees);

// 3.Change the last mark 95 to 75 of emp  "Sneha"
    let emp=employees.find(empObj=>empObj.name==="Sneha");
    emp.marks[2]=75;
    console.log("Updated Sneha last marks",employees);
