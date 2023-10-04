
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {

    var result = eval(screen.value)//evaluates the input value 
    var radians = (result * Math.PI) / 180;//Converts the degrees to radians and calculates the sine
    var sinResult = Math.sin(radians).toFixed(7);//Rounds the sine result to 7 decimal places
    screen.value = sinResult;


    // screen.value = Math.sin((eval(screen.value)*Math.PI)/180).toFixed(7);
}

function cos() {
    screen.value = Math.cos((eval(screen.value) * Math.PI) / 180).toFixed(7);
}

function tan() {
    screen.value = Math.tan((eval(screen.value) * Math.PI) / 180).toFixed(7);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function square() {
    screen.value = Math.sqrt(screen.value, 2).toFixed(5);
}


function log() {
    screen.value = Math.log10(screen.value);

}

function pi() {

    if (screen.value !== '') {
        var result = eval(screen.value) * Math.PI;
        screen.value = result.toFixed(4);
    } else {
        screen.value = Math.PI.toFixed(4);
    }

    // screen.value = 3.14159265359;
}

function e() {
    // If the input field will be not empty
    if (screen.value !== '') {
        var result = eval(screen.value) * Math.E;
        screen.value = result.toFixed(5);
    } else {
        // If the input field will be empty
        screen.value = 2.71828182846;

    }
}

function factorial() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspace() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}