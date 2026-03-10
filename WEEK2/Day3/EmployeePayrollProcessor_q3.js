// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Tasks:
//     1. filter() employees from IT department
    const ITemployees=employees.filter(emp=>emp.department==="IT");
    console.log(ITemployees);
    
//     2. map() to add:
//             netSalary = salary + 10% bonus
    const netSalary=employees.map((emp)=>{
       return { ...emp,netSalary: 1.1*emp.salary};
    })
    console.log(netSalary);
    
//     3. reduce() to calculate total salary payout
    const totalSal=employees.reduce((acc,emp)=>acc+emp.salary,0);
    console.log(totalSal);
    
//     4. find() employee with salary 30000
    let result=employees.find(emp=>emp.salary===30000);
    console.log(result);
//     5. findIndex() of employee "Neha"
    let employee=employees.findIndex(emp=>emp.name==="Neha");
    console.log(employee);