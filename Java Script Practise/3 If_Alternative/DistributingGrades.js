/* If-Else If Ladder: Write code to determine grades based on marks:
• Above 90 is 'A’. 
• 80 to 89 is 'B’. 
• 70 to 79 is 'C’. 
• 60 to 69 is 'D’. 
• Below 60 is 'F’ */

let mark = prompt("Enter Your Marks: ");

if (mark>=90 && mark<=100) {
    console.log("A Grade");
} else if (mark>=80 && mark<90) {
    console.log ("B Grade");
} else if (mark>=70 && mark<80) {
    console.log ("C Grade");
} else if (mark>=60 && mark<70) {
    console.log ("D Grade");
} else if (mark<60) {
    console.log ("F Grade");
} else {
    console.log("Enter a valid Number..!!");
}