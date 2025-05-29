let darkmode = document.getElementById("darkmode");

darkmode.addEventListener("click", changedark);

function changedark(){
    let body=document.querySelector("body")
    let content=document.querySelector(".content")

    if (getComputedStyle(content).backgroundColor == "rgb(255, 255, 255)"){
        content.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        content.style.backgroundColor = "white";
        body.style.color = "black";
    }
    
}

window.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        let body = document.querySelector("body");
        let content = document.querySelector(".content");
        content.style.backgroundColor = "black";
        body.style.color = "white";
    }
});