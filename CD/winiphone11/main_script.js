var conMid,
    mydate = new Date,
    year = mydate.getFullYear(),
    month = mydate.getMonth(),
    day = mydate.getDate(),
    weekday = mydate.getDay(),
    count = 1,
    headline = document.getElementById("headline"),
    topDate = document.getElementById("topDate"),
    today = document.getElementById("today"),
    con = document.getElementById("container"),
    whCon = document.getElementById("wheelCon"),
    dWheel = document.getElementById("wheel"),
    button = document.getElementById("pressButton"),
    device = document.getElementById("devMockup"),
    first = document.getElementById("firstpage"),
    second = document.getElementById("secondpage");

function setButtonHeight() {
    conMid = (whCon.getBoundingClientRect().bottom - whCon.getBoundingClientRect().top) / 2,
        button.style.top = conMid - button.offsetHeight / 2 - 0.2 * button.offsetHeight / 2 + "px"
}

function spin() {
    switch (count) {
        case 1:
            button.disabled = true, dWheel.className = "spinAround", setTimeout(function () {
                button.disabled = false, alert("Vous avez une tentative supplémentaire !\n\nRéessayez !"), autospin2()
            }, 6800);
            break;
        case 2:
            dWheel.className = "spinAround2", setTimeout(function () {
                dWheel.className = dWheel.className + " transparent"
            }, 6800), setTimeout(function () {
                device.style.display = "block", device.style.left = whCon.offsetWidth / 2 - device
                    .offsetWidth / 2 + "px", device.style.top = conMid - device.offsetHeight / 2 + "px",
                    device.style.zIndex = "3"
            }, 7000), setTimeout(function () {
                first.innerHTML = "<img src='loading.gif'>", first.style.padding = "195px 0px", setTimeout(
                    function () {
                        first.parentNode.removeChild(first), second.style.display = "block", con
                            .insertBefore(second, con.firstChild), setInterval("countdown()", 1000)
                    }, 1500)
            }, 9000)
    }
    count++
}

function autospin2() {
    spin()
}

function autospin1() {
    alert("Félicitations, utilisateur " + getURLParameter("browser") +
        ' !\n\nVous faites partie des 7 personnes sélectionnées pour participer à notre programme de fidélité ! Vous pouvez obtenir 1 cadeau parmi 4 !\n\nCliquez sur "OK" pour commencer !'
    ), document.getElementById("pressButton").click();
}

function countdown() {
    var e = parseInt(document.getElementById("mins").innerHTML),
        f = parseInt(document.getElementById("hsecs").innerHTML),
        g = 0,
        h = 0;
    0 !== e && 0 === f ? (g = e - 1, h = 59) : 0 !== e || 0 !== f ? (g = e, h = f - 1) : 0 === e && 0 === f && (g = e,
            h = f),
        h < 10 && (h = "0" + h),
        document.getElementById("mins").textContent = g,
        document.getElementById("hsecs").textContent = h
};
