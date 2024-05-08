let searchEngineLogo = document.querySelector(".search-engine-logo img");
let searchEngineForm = document.querySelector("#search-engine form");
let searchEngineinput = document.querySelector("#search-engine form input");
let searchButton = document.querySelector("#search-engine button");
let duckDuckGoButton = document.querySelector("img#duckduckgo-button");
let googleButton = document.querySelector("img#google-button");
let toggleButtons = document.querySelectorAll(".search-engine-toggle img");

const logoDuckDuckGo = "assets/duckduckgo-logo-horizontal.svg";
const logoGoogle = "assets/google-logo-horizontal.svg";
const postDuckDuckGo = "https://duckduckgo.com";
const postGoogle = "https://www.google.com/search"

function cleanupClasses() {
    toggleButtons.forEach(button => button.classList.remove("active"));
    searchButton.className = "";
}

function DuckDuckGo() {
    cleanupClasses();
    duckDuckGoButton.classList.add("active");
    searchEngineLogo.src = logoDuckDuckGo;
    searchEngineForm.action = postDuckDuckGo;
    searchEngineinput.placeholder = "Search DuckDuckGo!"
    searchButton.classList.add("search-button-ddg");
    document.cookie = "search-engine=DuckDuckGo";
}

function Google() {
    cleanupClasses();
    googleButton.classList.add("active");
    searchEngineLogo.src = logoGoogle;
    searchEngineForm.action = postGoogle;
    searchEngineinput.placeholder = "Search Google!"
    searchButton.classList.add("search-button-google");
    document.cookie = "search-engine=Google";
}




// Coockies!


function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function searchEngineSwitch(e) {
    let button = e['srcElement'].id;
    if (button == "duckduckgo-button") {
        DuckDuckGo();
    } else if (button == "google-button") {
        Google();
    }
}


duckDuckGoButton.addEventListener("click", searchEngineSwitch)
googleButton.addEventListener("click", searchEngineSwitch)

if (getCookie("search-engine") == "Google") {Google()}