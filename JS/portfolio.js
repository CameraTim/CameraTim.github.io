function openForm() {
    document.getElementById("contactForm").style.display = "block";
    document.getElementById("buttonToggle").style.display = "none";
}

function closeForm() {
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("buttonToggle").style.display = "block";
}

document.addEventListener("click", function(clicked) {
    if (clicked.target.matches(".close") || !clicked.target.closest(".contactForm") && !clicked.target.closest(".contactButton") && !clicked.target.closest(".formContainer")){
        closeForm()
    }
}, false );

var picIndex = 1;
showPics(picIndex);

function picSlide(s) {
    showPics(picIndex += s);
}

function picSelect(s) {
    showPics(picIndex = s);
}

function showPics(s) {
    var pics = document.getElementsByClassName("photo");
    var points = document.getElementsByClassName("point");
    if (s > pics.length) {picIndex = 1};
    if (s < 1) {picIndex = pics.length};
    for (i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }
    for (i = 0; i < points.length; i++) {
        points[i].className = points[i].className.replace(" active", "");
    }
    pics[picIndex - 1].style.display = "block";
    points[picIndex - 1].className += " active";
}