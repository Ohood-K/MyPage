let darkmode = document.getElementById("darkmode");

darkmode.addEventListener("click", changedark);

let LightMode = true

function changedark(){
    let body=document.querySelector("body")
    let content=document.querySelector(".content")
    let icon = document.querySelector(".mode");

    if (LightMode){
        contentBackground("#0c111c")
        body.style.color = "#f2f2f2";
        body.style.backgroundImage = "url('src/night brick.jpg')";
        icon.src = "src/sun.png";
        LightMode= false
    }
    else {
        contentBackground("#f2f2f2")
        body.style.color = "#0c111c";
        body.style.backgroundImage = "url('src/brick wall.jpg')";
        icon.src = "src/moon.png";
        LightMode= true
    }
    
}

window.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        let body = document.querySelector("body");
        contentBackground("#0c111c")
        body.style.color = "#f2f2f2";
        body.style.backgroundImage = "url('src/night brick.jpg')";
        darkmode.src = "src/sun.png";
        LightMode= false
    }
});

function contentBackground(backgroundColor){
    document.querySelectorAll('.content').forEach(el => {
    el.style.backgroundColor = backgroundColor;
});
}