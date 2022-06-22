function myFunction(dotsid, hiddenid, linkid) {
        var dots = document.getElementById(dotsid);
        var moreText = document.getElementById(hiddenid);
        var btnText = document.getElementById(linkid);

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