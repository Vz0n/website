// Old Functions
async function getSocialLinks(){
    let resp = await fetch("https://archive.vzondev.com/api/v1/social");
    return resp.json();
}

function setSocialLinks(){
    let socials_el = document.getElementById("social-links");
    getSocialLinks().then((data) => {
       const links = data.social;
       for(link in links){
          let el = document.createElement("li");

          // Set attributes
          el.setAttribute("data-url", links[link]);
          el.className = "link";
          el.textContent = link;

          // Set click event
          el.addEventListener("click", () => {
            window.location = el.getAttribute("data-url");
          });

          socials_el.appendChild(el);
       }
    }).catch((err) => {console.error("Error loading the social links: " + err)});

}



