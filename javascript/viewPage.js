let data = JSON.parse(localStorage.getItem("signUpData")) || [];
const displayDiv = document.getElementById("signUpData");

function displayData(data) {

    displayDiv.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
    displayDiv.innerHTML += `
    <tr>
      <td>${data[i].studentID}</td>
      <td>${data[i].studentName}</td>
      <td>${data[i].studentBD}</td>
      <td>${data[i].studentMail}</td>
      <td>${data[i].studentPhone}</td>
      <td>${data[i].studentGrade}</td>
      <td>${data[i].studentResidence}</td>
      <td>${data[i].studentClub}</td>
      <td>${data[i].studentWhy}</td>
    </tr>
    `;
    }
}

function magicSort() {
const sortOption = document.getElementById("magicSorter").value;

if (sortOption === ""|| sortOption === "None") {
    displayData(data);
  }
else{
    const filtered = data.filter(
      student => student.studentClub === sortOption
    );
    displayData(filtered);
  }
}

displayData(data);
document.getElementById("magicSorter").addEventListener("change", magicSort);