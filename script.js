const pTag = document.getElementById('demo');

const br = document.createElement('br');

let isTrue = false;


function MyFunction (input) {
    pTag.innerHTML = input.value;
}

function MainFunction (limit) {    
    document.querySelector('input').addEventListener('keypress', function (e) {
        let text = pTag.innerText;
        if(e.keyCode === 32) {
            let amni = text.split(' ');
            if(amni.length === limit) {
                amni.length = 0;
                pTag.innerHTML = '<br>';
            }
        }
    });
};

MainFunction(5);