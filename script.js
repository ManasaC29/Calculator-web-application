let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const btn = e.target.innerHTML;

        if (btn === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (btn === 'AC') {
            string = "";
            input.value = string;
        } else if (btn === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += btn;
            input.value = string;
        }
    });
});

// ✅ Keyboard input support
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '%', '.', '(', ')'].includes(key)) {
        string += key;
        input.value = string;
    } else if (key === 'Enter') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    } else if (key.toLowerCase() === 'c') {
        string = "";
        input.value = string;
    }
});


