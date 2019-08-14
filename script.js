let getId = x => document.getElementById(x);
let getSel = s => document.querySelector(s);
let text = document.querySelector('.text');

let f6 = document.forms['f6'];
let f7 = document.forms['f7'];
let f8 = document.forms['f8'];
let f9 = document.forms['f9'];

getId('bold').onclick = function () {
    text.classList.toggle('bold')
}
getId('italic').onclick = function () {
    text.classList.toggle('italic')
}
getId('underline').onclick = function () {
    text.classList.toggle('underline')
}
getId('line').onclick = function () {
    text.classList.toggle('line')
}
getId('left').onclick = function () {
    text.style.textAlign = 'left';
}
getId('center').onclick = function () {
    text.style.textAlign = 'center';
}
getId('right').onclick = function () {
    text.style.textAlign = 'right';
}
// Текстареа
getId('area').onclick = function () {
    getId('textarea').value = text.innerHTML;
    getId('cont1').style.display = 'none';
    getId('cont2').style.display = 'block';
    getId('block1').style.display = 'none';
    getId('block2').style.display = 'flow-root';
}

//Шрифт
function myFamily(event) {
    console.log(event.target);
    for (let i = 0; i < document.getElementsByClassName('dropdown-item').length; i++) {
        text.style.fontFamily = event.target.textContent;
    }
}

//Розмір

function mySize(event) {
    console.log(event.target);
    for (let i = 0; i < document.getElementsByClassName('dropdown-item').length; i++) {
        text.style.fontSize = event.target.textContent;
    }
}


//Логін
getId('butt').onclick = function () {
    let login = log10.in1.value;
    let pass = log10.in2.value;
    debugger
    let imp1 = document.querySelector('.imp1');
    let imp2 = document.querySelector('.imp2');
    if (login == 'admin' && pass == 'admin') {
        this.setAttribute("data-dismiss", "modal");
        imp1.style.border = '';
        imp2.style.border = '';
    } else if (login == '' && pass == '') {
        this.removeAttribute("data-dismiss");
        imp1.style.border = '1px solid red';
        imp2.style.border = '1px solid red';
        getId('modalLogin').style.display = 'block';
    } else {
        this.removeAttribute("data-dismiss");
        imp1.style.border = '1px solid red';
        imp2.style.border = '1px solid red';
    }

    log10.reset()
}

//колір тексту
let сol = document.querySelectorAll('.num1');
for (let i = 0; i < сol.length; i++) {
    сol[i].addEventListener('click', myDog => {
        let styli = getComputedStyle(myDog.target);
        text.style.color = styli.color;
        console.log(styli.color);
    })
}

// Колір фону
let bagCol = document.querySelectorAll('.num2');
for (let i = 0; i < bagCol.length; i++) {
    bagCol[i].addEventListener('click', myCool => {
        let styles = getComputedStyle(myCool.target);
        getId('cont1').style.backgroundColor = styles.backgroundColor;
        getId('cont1').style.backgroundImage = ''
        console.log(styles.backgroundColor);
    })
}


// Картинки
let bagImg = document.querySelectorAll('.box');
for (let i = 0; i < bagImg.length; i++) {
    bagImg[i].addEventListener('click', myImg => {
        let styleImg = getComputedStyle(myImg.target);
        getId('cont1').style.background = styleImg.background;
        console.log(styleImg.background);
    })

}

//зберігати
getId('save').onclick = function () {
    text.innerHTML = getId('textarea').value;
    getId('cont1').style.display = 'block';
    getId('cont2').style.display = 'none';
    getId('block1').style.display = 'flex';
    getId('block2').style.display = 'none';
}

// Таблиця

f6.button.onclick = function () {

    let CountTR = f6.CountTR.value;
    let CountTD = f6.CountTD.value;
    let WidthTD = f6.WidthTD.value;
    let HeightTD = f6.HeightTD.value;
    let WidthBorder = f6.WidthBorder.value;
    let select2 = f6.select2.value;
    let select3 = f6.select3.value;

    let inputs = document.getElementsByClassName('table-inp');
    let check = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value != inputs[i].value * 1 || inputs[i].value == '') {
            check = false;
            inputs[i].style.border = '1px solid red';
        } else {
            inputs[i].style.border = ''
        }
    }
    if (check) {
        let newTable = document.createElement('table');
        text.appendChild(newTable);
        for (let i = 0; i < CountTR; i++) {
            let newTR = document.createElement('tr');
            newTable.appendChild(newTR);
            for (let j = 0; j < CountTD; j++) {
                let newTD = document.createElement('td');
                newTR.appendChild(newTD);
                newTD.style.width = `${WidthTD}px`
                newTD.style.height = `${HeightTD}px`
                newTD.style.border = `${WidthBorder}px ${select2} ${select3}`
                newTD.textContent = `TD`;
            }
        }
        getId('textarea').value = text.innerHTML;
        newTable.style.display = 'none';
    }


}

// Лішка OL

f9.button.onclick = function () {
    let CountLi = f7.listNum.value;
    console.log(CountLi);

    let select = f7.types.value;
    let inpOl = document.querySelector('.inpOl')

    if (CountLi == '') {
        inpOl.style.border = '1px solid red';
    } else if (CountLi.search(/\d/) == -1) {
        inpOl.style.border = '1px solid red';

    } else {
        let newOl = document.createElement('ol');
        text.appendChild(newOl);
        newOl.style.listStyleType = select;
        for (let i = 0; i < CountLi; i++) {
            let newLi = document.createElement('li');
            newOl.appendChild(newLi);
            newLi.textContent = `item ${i+1}`;
        }
        getId('textarea').value = text.innerHTML;
        inpOl.style.border = ''
    }



}


// Лішка UL

f8.button2.onclick = function () {
    let CountLi = f8.listUl.value;
    let select5 = f8.types2.value;
    let inpUl = document.querySelector('.inpUl');

    if (CountLi == '') {
        inpUl.style.border = '1px solid red';
    } else if (CountLi.search(/\d/) == -1) {
        inpUl.style.border = '1px solid red';

    } else {

        let newUl = document.createElement('ul');
        text.appendChild(newUl);
        newUl.style.listStyleType = select5;
        for (let i = 0; i < CountLi; i++) {
            let newLi = document.createElement('li');
            newUl.appendChild(newLi);
            newLi.textContent = `item ${i+1}`;
        }
        getId('textarea').value = text.innerHTML;
        inpUl.style.border = ''

    }
    

}

f9.reset.onclick = function () {
    f7.reset();
}

//Файл
getId('file-box').onchange = function (e) {
    let url = URL.createObjectURL(event.target.files[0]);
    getId('cont1').style.background = `url(${url})`
}