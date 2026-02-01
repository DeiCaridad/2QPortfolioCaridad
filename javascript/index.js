const form = document.getElementById("form");
let arr = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const dataInp = {
    studentID: document.getElementById("userID").value,
    studentName: document.getElementById("userName").value,
    studentBD: document.getElementById("userBD").value,
    studentMail: document.getElementById("userMail").value,
    studentPhone: document.getElementById("userPhone").value,
    studentGrade: document.getElementById("userGrade").value,
    studentResidence: document.querySelector('input[name="userResidence"]:checked').value,
    studentWhy: document.getElementById("userWhy").value,
    studentClub: document.getElementById("userClub").value
  };

  let data = JSON.parse(localStorage.getItem("signUpData")) || [];
  data.push(dataInp);
  localStorage.setItem("signUpData", JSON.stringify(data));
  console.log(data);
});


function viewDataPage(){
  window.open("./viewSignUps.html", "_blank");
}