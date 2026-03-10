// Student Performance Dashboard
// You are working on a college result analysis system.
// Test Data:

const students = [
   { id: 1, name: "Ravi", marks: 78 },
   { id: 2, name: "Anjali", marks: 92 },
   { id: 3, name: "Kiran", marks: 35 },
   { id: 4, name: "Sneha", marks: 88 },
   { id: 5, name: "Arjun", marks: 40 }
 ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
    let passed=students.filter(studentObj=>studentObj.marks>=40);
    console.log(passed);
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
    let grades=students.map((studentObj)=>{
        if(studentObj.marks>=90) return"A";
        else if(studentObj.marks>=75 && studentObj.marks<90) return "B";
        else if(studentObj.marks>=60 && studentObj.marks<75) return "C";
        else  return "D";
    });
    console.log(grades);
//    3. reduce() to calculate average marks
    let marksSum=students.reduce((acc,studentObj)=>acc+studentObj.marks,0);
    console.log(marksSum/students.length);
//    4. find() the student who scored 92
    let res1=students.find(studentObj=>studentObj.marks===92)
    console.log(res1);
//    5. findIndex() of student "Kiran"
    let res2=students.findIndex(studentObj=>studentObj.name==="Kiran");
    console.log(res2);