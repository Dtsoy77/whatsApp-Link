let ROOT = document.getElementById('root')
let dataUrlClick = document.getElementById('dataUrl')

document.querySelector('button').onclick = getWhats;

function getWhats(){
    let number = document.getElementById('inp_1').value;
        if(number.length === 12){
            let url = `https://wa.me/${number}`
            let urlWhats = document.createElement('a')
            urlWhats.href = url
            urlWhats.textContent = 'Перейти в чат'
            //dataUrlClick.append(urlWhats)
            urlWhats.click()
        }else{
            alert('введите корректные данные')
        }





}