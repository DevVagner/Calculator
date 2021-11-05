let display = document.querySelector(".display");
let btn_num = document.querySelector(".btn_num");

document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('btn_num')) {
            insertNum(el.innerText);
        }
    }
)

function del() {
    display.value = '';
}

function delOne() {
    display.value = display.value.slice(-0, -1);
}

function result() {
    let result = display.value;

    try {
        result = eval(result);

        if(!result) {
            alert('Conta inválida')
            return;
        }

        display.value = String(result);
    } catch(e) {
        alert('Conta inválida');
        return;
    }
}

function insertNum(value) {
    display.value += value;
}