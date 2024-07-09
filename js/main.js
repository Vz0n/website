// Functions
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

// Set social links dynamicly 
// Wont call this because the API server is down
// setSocialLinks();

// Set the footer date
let i = document.getElementById("credits");
let date = new Date();

i.textContent = date.getFullYear() + " - Vz0n | This portal is WIP";



