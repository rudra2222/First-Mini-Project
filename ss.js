let arr = ["red", "blue", "green", "orange"];
let level = 0;
let start = false;
let h2 = document.querySelector("h2");
let user = [];
let system = [];
let score = 0;
let maxi = 0;
let scelement = document.querySelector(".score");
let mxelement = document.querySelector(".maxi");

document.addEventListener("keypress", () => {
    if (start == false) {
        system = [];
        start = true;
        score = 0;
        levelup();
    }
});

function flashsystem(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}
function wrong() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(() => {
        body.style.backgroundColor = ""; 
    }, 250);
}


function levelup() {
    scelement.innerText = `score : ${score}`;
    level++;
    user = [];

    h2.innerText = `level ${level}`;

    // flash
    let ran = Math.floor(Math.random() * 4);
    let col = arr[ran];
    let btn = document.querySelector(`.${col}`);
    system.push(col);
    flashsystem(btn);
}

let btns = document.querySelectorAll(".div");
for (const btn of btns) {
    btn.addEventListener("click", () => {
        if (!start) return;
        
        let col = btn.classList[1];
        user.push(col);
        let ind = user.length - 1;
        flashsystem(btn);
        if (user[ind] === system[ind]) {
            if (system.length == user.length) {
                score = level;
                maxi = Math.max(maxi, score);
                
                setTimeout(levelup,500);
            }
        }
        else {
            h2.innerHTML = `your score is ${score}<br>your maximum score is ${maxi}<br>
            press any key to restart`;
            level = 0;
            score = 0;
            mxelement.innerText = `maximum score : ${maxi}`;
            start = false;
            wrong();

        }
    
    })


}

