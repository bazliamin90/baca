document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".h-a");

    elements.forEach(element => {
        let text = element.innerText;
        if (text.length >= 1) {
            let newText = 
                text.slice(0, 5) + 
                '<span class="highlight">' + text.slice(5, 9) + '</span>' + 
                text.slice(9);
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
                text.slice(0, 7) + 
                '<span class="highlight">' + text.slice(7, 11) + '</span>' + 
                text.slice(11);
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
                text.slice(0, 9) + 
                '<span class="highlight">' + text.slice(9, 14) + '</span>' + 
                text.slice(14);
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
                text.slice(0, 4) + 
                '<span class="highlight">' + text.slice(4, 10) + '</span>' + 
                text.slice(10);
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
                text.slice(0, 2) + 
                '<span class="highlight">' + text.slice(2, 7) + '</span>' + 
                text.slice(7);
            element.innerHTML = newText;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".h-g");

    elements.forEach(element => {
        let text = element.innerText;
        if (text.length >= 1) {
            let newText = 
                text.slice(0, 3) + 
                '<span class="highlight">' + text.slice(3, 10) + '</span>' + 
                text.slice(10);
            element.innerHTML = newText;
        }
    });
});