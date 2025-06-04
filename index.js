let darkmode = document.getElementById("darkmode");

darkmode.addEventListener("click", changedark);

function changedark(){
    let body=document.querySelector("body")
    let content=document.querySelector(".content")
    let icon = document.querySelector(".mode");

    if (getComputedStyle(content).backgroundColor == "rgb(255, 255, 255)"){
        content.style.backgroundColor = "black";
        body.style.color = "white";
        body.style.backgroundImage = "url('src/night brick.jpg')";
        icon.src = "src/sun.png";
    }
    else {
        content.style.backgroundColor = "white";
        body.style.color = "black";
        body.style.backgroundImage = "url('src/brick wall.jpg')";
        icon.src = "src/moon.png";
    }
    
}

window.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        let body = document.querySelector("body");
        let content = document.querySelector(".content");
        content.style.backgroundColor = "black";
        body.style.color = "white";
        body.style.backgroundImage = "url('src/night brick.jpg')";
        darkmode.src = "src/sun.png";
    }
});