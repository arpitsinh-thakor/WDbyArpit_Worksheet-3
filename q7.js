var examination = 1;
let marks=85;
document.write("<h1> FOR Selected Examination is- "+examination+"</h1>")
document.write("<h1> Entered Examination-"+examination+ " is- "+marks+"</h1>")

function gradefunction(num) {
    let grade;
  
    if (examination == "1" || examination == 1) {
      if (num >= 89 && num <= 100) {
        grade = "A+";
        if (grade == "A+") {
         return document.write("<h2>TRUE it's A+ GRADE</h2>");
        }
      } else {
        return document.write("<h2>FALSE it's not A+ GRADE</h2>");
      }
    } else if (examination == "2" || examination == 2) {
      if (num >= 90) {
        grade = "A+";
        if (grade == "A+") {
          return document.write("<h2>TRUE it's A+ GRADE</h2>");
        }
      } else {
        return document.write("<h2>FALSE it's not A+ GRADE</h2>");
      }
    }
  }
  document.write(gradefunction(marks));
  
  var examination2 = 2;
let marks2=95;
document.write("<h1> FOR Selected Examination is- "+examination2+"</h1>")
document.write("<h1> Entered Examination-"+examination2+ " is- "+marks2+"</h1>")

function gradefunction2(num) {
    let grade2;
  
    if (examination2 == "1" || examination2 == 1) {
      if (num >= 89 && num <= 100) {
        grade2 = "A+";
        if (grade2 == "A+") {
         return document.write("<h2>TRUE it's A+ GRADE</h2>");
        }
      } else {
        return document.write("<h2>FALSE it's not A+ GRADE</h2>");
      }
    } else if (examination2 == "2" || examination2 == 2) {
      if (num >= 90) {
        grade2 = "A+";
        if (grade2 == "A+") {
          return document.write("<h2>TRUE it's A+ GRADE</h2>");
        }
      } else {
        return document.write("<h2>FALSE it's not A+ GRADE</h2>");
      }
    }
  }
  document.write(gradefunction2(marks2));

   

