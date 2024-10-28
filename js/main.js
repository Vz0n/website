const progammingSince = new Date(2019, 2, 9, 14, 35).getTime();
const now = new Date().getTime();

let spanElement = document.getElementById("years");
// As the timestamp is in milliseconds, the time inverse factor is 1000*60*60*24*365
let years = (now - progammingSince)/31536000000

spanElement.textContent = Math.floor(years)

