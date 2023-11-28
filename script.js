let ques = document.querySelectorAll(".question");
let ans = document.querySelectorAll(".answer");
let icon = document.querySelectorAll(".plusIcon")
flag = "show";

function toggleAnswer(i) {
    if (flag === "show") {
        ans[i].style.display = "block";
        icon[i].style.transform = "rotate(45deg)";
        icon[i].style.transition = "transform 0.01s ease-in-out";
        flag = "off";
    } else {
        ans[i].style.display = "none";
        icon[i].style.transform = "rotate(0)";
        flag = "show";
    }
}

for (let i = 0; i < ques.length; i++) {
    ques[i].addEventListener('click', () => {
        toggleAnswer(i);
    });
}


