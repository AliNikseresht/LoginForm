////////////////////////----MODAL----START------//////////----------
let OpIco = document.querySelectorAll('.open-icon')
OpIco[0].addEventListener('click', () => {
    document.querySelector('.modal-box-reg').style.transform = 'translateY(0)'
    document.querySelector('.modal-box-reg').style.transition = '1s'
})
OpIco[1].addEventListener('click', () => {
    document.querySelector('.modal-box-link').style.transform = 'translateY(0)'
    document.querySelector('.modal-box-link').style.transition = '1s'
})
OpIco[2].addEventListener('click', () => {
    document.querySelector('.modal-box-google').style.transform = 'translateY(0)'
    document.querySelector('.modal-box-google').style.transition = '1s'
})
OpIco[3].addEventListener('click', () => {
    document.querySelector('.modal-box-git').style.transform = 'translateY(0)'
    document.querySelector('.modal-box-git').style.transition = '1s'
})

let CloIco = document.querySelectorAll('.close-icon')
CloIco[1].addEventListener('click', () => {
    document.querySelector('.modal-box-link').style.transform = 'translateY(-130%)'
    document.querySelector('.modal-box-link').style.transition = '1s'
})
CloIco[2].addEventListener('click', () => {
    document.querySelector('.modal-box-google').style.transform = 'translateY(-130%)'
    document.querySelector('.modal-box-google').style.transition = '1s'
})
CloIco[3].addEventListener('click', () => {
    document.querySelector('.modal-box-git').style.transform = 'translateY(-130%)'
    document.querySelector('.modal-box-git').style.transition = '1s'
})
CloIco[0].addEventListener('click', () => {
    document.querySelector('.modal-box-reg').style.transform = 'translateY(-130%)'
    document.querySelector('.modal-box-reg').style.transition = '1s'
})
/////////////////////////----MODAL----END------//////////-----------
/////////////////////////----REGX----START------//////////----------

let allError = [...document.getElementsByClassName('errorReq')]
allError.map((item) => {
    item.style.cssText = 'transform:scale(0)'
})
let inp = document.getElementsByTagName('input')

for (i = 0; i < inp.length; i++) {
    let username = document.getElementById('username')
    let password = document.getElementById('password')

    inp[i].addEventListener('input', function () {

        if (this.getAttribute('id') == username.getAttribute('id')) {
            this.nextElementSibling.style.cssText = 'transform:scale(0)'
            if (this.value.search(/[!@#$%^&()=\s?<>:;"',/*-+-,-]/i) != -1) {
                this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
            }
        }

        if (this.getAttribute('id') == password.getAttribute('id')) {
            this.nextElementSibling.style.cssText = 'transform:scale(0)'
            if (this.value.search(/[!@#$%^&()=\s?<>:;"',/*-+-,-]/i) != -1) {
                this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
            }
        }
    })
}
/////////////////////////----REGX----END------//////////----------