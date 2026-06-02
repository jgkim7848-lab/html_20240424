const newpassword = document.getElementById('newpassword')
const confirmPassword = document.getElementById('confirmPassword')
const text2 = document.querySelectorAll('.text2')
const id = document.getElementById('id')
const password = document.getElementById('password')

const btn = document.querySelector('.btn')

newpassword.addEventListener('input', ()=>{

    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if(!regExp.test(newpassword.value)){
        text2[0].innerText=('비밀번호를 다시 입력해 주세요.')
    }else{
        text2[0].innerText=('')
    }
})

confirmPassword.addEventListener('input', ()=>{

    if(newpassword.value != confirmPassword.value){
        text2[1].innerText=('비밀번호가 같지 않습니다.')
    }else{
        text2[1].innerText=('')
    }
})

btn.addEventListener('click', ()=>{

    if(newpassword.value != confirmPassword.value){
        alert('비밀번호가 같지 않습니다.')
        return
    }

    // 잠시 저장된 데이터 가져오기
    const saveUser = sessionStorage.getItem('user1') 
 
    // location 데이터에서 내가 저장한 키값중 잠시 저장된 데이터와 키값이 같은것을 가져오기
    const data = localStorage.getItem(saveUser) 
    const user = JSON.parse(data)

    user.password = newpassword.value

    localStorage.setItem(saveUser, JSON.stringify(user))

    alert('비밀번호가 변경되었습니다.')

    location.href = '../html/looflex_login.html'
})