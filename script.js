const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const greeting = document.getElementById("greeting");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const guestList = document.getElementById("guestList");

// attendance
let count = 0;
const maxCount = 50;

// form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  // increase count only once
  count++;

  // update attendance count
  attendeeCount.textContent = count;

  // update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  progressBar.style.width = percentage;

  // team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // welcome message
  const message = `Welcome, ${name} from ${teamName}`;
  greeting.textContent = message;
  greeting.style.display = "block";
  greeting.classList.add("success-message");

  const guestItem = document.createElement("li");
  guestItem.textContent = `${name} - ${teamName}`;
  guestList.appendChild(guestItem);

  form.reset();
});
