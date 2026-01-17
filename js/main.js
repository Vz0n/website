function getYearsProgramming(){

    const progammingSince = new Date(2019, 2, 9, 14, 35).getTime();
    const now = new Date().getTime();

    // As the timestamp is in milliseconds, the time inverse factor is 1000*60*60*24*365  
    return Math.floor((now - progammingSince)/31536000000)

}

let spanElement = document.getElementById("years");
spanElement.textContent = getYearsProgramming();

