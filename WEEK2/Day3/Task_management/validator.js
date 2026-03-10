// TODO: Export these validation functions
// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
// Your code here
    if(title.length>=3 && title!=null)return true;
    else return false;
}
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
// Your code here
    if(priority==="low"||priority==="high"||priority==="medium")
        return true;
    return false;
}
// 3. Validate due date (must be future date)
function validateDueDate(date) {
// Your code here
    let currDate='25022026';
    if(date.toString()>currDate)return true;
    return false;
}

export {validateTitle,validatePriority,validateDueDate};