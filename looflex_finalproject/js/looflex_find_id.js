const name = document.getElementById('name')
const test2 = document.getElementById('test2')
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')

const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{

    if(name.value == ''){
        alert('이름을 적어주세요')
        name.focus()
        return
    }

    if(number1.value == ''){
        alert('주민등록번호 앞 6자리를 적어주세요')
        number1.focus()
        return
    }

    if(number2.value == ''){
        alert('주민등록번호 뒤 7자리를 적어주세요')
        number1.focus()
        return
    }    


    for (let i=0; i<localStorage.length; i++){
        const key = localStorage.key(i)
        const data = localStorage.getItem(key)
        const user = JSON.parse(data)

        if (name.value == user.name && number1.value == user.number1 && number2.value == user.number2){
            test2.innerText=`아이디 : ${user.id}`
            return
            
        }else{
            test2.innerText='아이디가 존재하지 않습니다.'
        } 
    }
})