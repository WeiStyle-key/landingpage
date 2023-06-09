function startTimer(t, n) {
    var o, e, a = t;
    setInterval(function () {
        o = parseInt(a / 60, 10);
        e = parseInt(a % 60, 10);
        o = o < 10 ? "0" + o : o;
        e = e < 10 ? "0" + e : e;
        n.textContent = o + ":" + e;
        --a < 0 && (a = 0);
    }, 1000);
}




window.onload = function () {
    var photos = Array.from(document.getElementsByClassName("photo"));
    var randomIndex = Math.floor(Math.random() * photos.length);
    photos[randomIndex].style.display = "block";

    startTimer(118, document.querySelector("#timer"));
};
