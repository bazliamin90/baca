document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".h-a");

    elements.forEach(element => {
        let text = element.innerText;
        if (text.length >= 1) {
            let newText = 
                text.slice(0, 6) + 
                '<span class="highlight">' + text.slice(6, 12) + '</span>' + 
                text.slice(12);
            element.innerHTML = newText;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".h-b");

    elements.forEach(element => {
        let text = element.innerText;
        if (text.length >= 1) {
            let newText = 
                text.slice(0, 2) + 
                '<span class="highlight">' + text.slice(2, 9) + '</span>' + 
                text.slice(9);
            element.innerHTML = newText;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".h-c");

    elements.forEach(element => {
        let text = element.innerText;
        if (text.length >= 1) {
            let newText = 
                text.slice(0, 4) + 
                '<span class="highlight">' + text.slice(4, 9) + '</span>' + 
                text.slice(9);
            element.innerHTML = newText;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".h-d");

    elements.forEach(element => {
        let text = element.innerText;
        if (text.length >= 1) {
            let newText = 
                text.slice(0, 0) + 
                '<span class="highlight">' + text.slice(0, 7) + '</span>' + 
                text.slice(7);
            element.innerHTML = newText;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".h-e");

    elements.forEach(element => {
        let text = element.innerText;
        if (text.length >= 1) {
            let newText = 
                text.slice(0, 0) + 
                '<span class="highlight">' + text.slice(0, 6) + '</span>' + 
                text.slice(6);
            element.innerHTML = newText;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".h-f");

    elements.forEach(element => {
        let text = element.innerText;
        if (text.length >= 1) {
            let newText = 
                text.slice(0, 12) + 
                '<span class="highlight">' + text.slice(12, 18) + '</span>' + 
                text.slice(18);
            element.innerHTML = newText;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".h-g").forEach(element => {
        let text = element.textContent.trim();
        if (text.length >= 1) { // Ensure text is long enough to avoid errors
            element.innerHTML =
                text.slice(0, 26) +
                '<span class="highlight">' + text.slice(26, 30) + '</span>' +
                text.slice(30, 50) +
                '<span class="highlight">' + text.slice(50, 54) + '</span>' +
                text.slice(54);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".h-h").forEach(element => {
        let text = element.textContent.trim();
        if (text.length >= 1) { // Ensure text is long enough to avoid errors
            element.innerHTML =
                text.slice(0, 2) +
                '<span class="highlight">' + text.slice(2, 7) + '</span>' +
                text.slice(7, 29) +
                '<span class="highlight">' + text.slice(29, 33) + '</span>' +
                text.slice(33);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".h-i").forEach(element => {
        let text = element.textContent.trim();
        if (text.length >= 1) { // Ensure text is long enough to avoid errors
            element.innerHTML =
                text.slice(0, 3) +
                '<span class="highlight">' + text.slice(3, 7) + '</span>' +
                text.slice(7, 23) +
                '<span class="highlight">' + text.slice(23, 27) + '</span>' +
                text.slice(27, 43) +
                '<span class="highlight">' + text.slice(43, 49) + '</span>' +
                text.slice(49);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".h-j").forEach(element => {
        let text = element.textContent.trim();
        if (text.length >= 1) { // Ensure text is long enough to avoid errors
            element.innerHTML =
                text.slice(0, 18) +
                '<span class="highlight">' + text.slice(18, 24) + '</span>' +
                text.slice(24, 48) +
                '<span class="highlight">' + text.slice(48, 52) + '</span>' +
                text.slice(52, 79) +
                '<span class="highlight">' + text.slice(79, 83) + '</span>' +
                text.slice(83, 110) +
                '<span class="highlight">' + text.slice(110, 116) + '</span>' +
                text.slice(116);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".h-k").forEach(element => {
        let text = element.textContent.trim();
        if (text.length >= 1) { // Ensure text is long enough to avoid errors
            element.innerHTML =
                text.slice(0, 6) +
                '<span class="highlight">' + text.slice(6, 10) + '</span>' +
                text.slice(10, 29) +
                '<span class="highlight">' + text.slice(29, 34) + '</span>' +
                text.slice(34);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".h-l").forEach(element => {
        let text = element.textContent.trim();
        if (text.length >= 1) { // Ensure text is long enough to avoid errors
            element.innerHTML =
                text.slice(0, 12) +
                '<span class="highlight">' + text.slice(12, 17) + '</span>' +
                text.slice(17, 60) +
                '<span class="highlight">' + text.slice(60, 65) + '</span>' +
                text.slice(65);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".h-m");
    elements.forEach(element => {
        let text = element.innerText;
        if (text.length >= 1) {
            let newText = 
                text.slice(0, 8) + 
                '<span class="highlight">' + text.slice(8, 19) + '</span>' + 
                text.slice(19);
            element.innerHTML = newText;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".h-n").forEach(element => {
        let text = element.textContent.trim();
        if (text.length >= 1) { // Ensure text is long enough to avoid errors
            element.innerHTML =
                text.slice(0, 25) +
                '<span class="highlight">' + text.slice(25, 32) + '</span>' +
                text.slice(32, 51) +
                '<span class="highlight">' + text.slice(51, 57) + '</span>' +
                text.slice(57);
        }
    });
});