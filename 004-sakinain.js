document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".h-a");

    elements.forEach(element => {
        let text = element.innerText;
        if (text.length >= 1) {
            let newText = 
                text.slice(0, 2) + 
                '<span class="highlight">' + text.slice(2, 5) + '</span>' + 
                text.slice(5);
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
                '<span class="highlight">' + text.slice(2, 6) + '</span>' + 
                text.slice(6);
            element.innerHTML = newText;
        }
    });
});