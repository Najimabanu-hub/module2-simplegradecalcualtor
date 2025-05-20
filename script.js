function calculateGrade() {
    let mark1 = parseFloat(document.getElementById("mark1").value);
    let mark2 = parseFloat(document.getElementById("mark2").value);
    let mark3 = parseFloat(document.getElementById("mark3").value);
    let mark4 = parseFloat(document.getElementById("mark4").value);
    let mark5 = parseFloat(document.getElementById("mark5").value);
  
    if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3) || isNaN(mark4) || isNaN(mark5)) {
      alert("Please enter all marks correctly.");
      return;
    }
  
    let total = mark1 + mark2 + mark3 + mark4 + mark5;
    let average = total / 5;
  
    let grade;
    if (average >= 90) {
      grade = "A+";
    } else if (average >= 80) {
      grade = "A";
    } else if (average >= 70) {
      grade = "B";
    } else if (average >= 60) {
      grade = "C";
    } else if (average >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    alert("Total Marks: " + total +
          "\nAverage Marks: " + average.toFixed(2) +
          "\nGrade: " + grade);
  }
  