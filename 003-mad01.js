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