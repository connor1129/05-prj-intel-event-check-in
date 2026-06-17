const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect")


//attendance
let count = 0;
const maxCount = 50;

// form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value
  const team = teamSelect.value
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);


//increase count
count++;
console.log("Total check-ins: ", count);

//update progress bar
const percentage = Math.round((count / maxCount) * 100) + "%";

console.log("Percentage:", percentage);

//team counter
const teamCounter = document.getElementById(team + "Count")
teamCounter.textContent = parseInt(teamCounter.textContent) + 1;


//welcome
const message = `Welcome, ${name} from ${teamName}`;
console.log(message)

form.reset();
});
