function getYearsProgramming(){

    const progammingSince = new Date(2019, 2, 9, 14, 35).getTime();
    const now = new Date().getTime();

    // As the timestamp is in milliseconds, the time inverse factor is 1000*60*60*24*365  
    return Math.floor((now - progammingSince)/31536000000)

}

// Sets the 'target' attribute of anchor elements in a tree to "blank".
function setLinksTarget(node){
    node.childNodes.forEach((node) => {
        node.target = "blank"
    });
}

let spanElement = document.getElementById("years");
let links = document.getElementsByClassName("link-container")[0];
spanElement.textContent = getYearsProgramming();
setLinksTarget(links);

