function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display == "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read More";
            moreText.style.display = "none";
        }

        else {
            dots.style.display = "none";
            btnText.innerHTML = "Read Less";
            moreText.style.display = "inline"
        }
    }

function dotTwo() {

    var secondDots = document.getElementById("dots-two");
    var moreTwo = document.getElementById("more-two");
    var btnTextTwo = document.getElementById("myBtnTwo");

    if (secondDots.style.display == "none") {
        secondDots.style.display = "inline";
        btnTextTwo.innerHTML = "Read More";
        moreTwo.style.display = "none";
    }
    else {
        secondDots.style.display = "none";
        btnTextTwo.innerHTML = "Read Less";
        moreTwo.style.display = "inline";
    }

}