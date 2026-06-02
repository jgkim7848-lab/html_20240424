const id = document.getElementById('id')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const name = document.getElementById('name')
const email = document.getElementById('email')
const btn = document.getElementById('btn')
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')

const sign_Up = document.querySelector('.sign_Up')

btn.addEventListener('click', (e)=>{

    e.preventDefault()

    if(id.value == ''){
        alert("아이디를 입력하세요")
        id.focus()
        return
    }

    if(id.value.length<8){
        alert('8글자 이상 적어주세요.')
        id.focus()
        return
    }

    // 중복확인
    const data = localStorage.getItem(id.value)
    if(data){
        const user = JSON.parse(data)
        if (id.value == user.id){
            alert('중복된 아이디 입니다.')
            id.value = ''
            id.focus()
            return
        }
    }
    alert('사용가능한 아이디 입니다.')
})

sign_Up.addEventListener('click', (e)=> {

    e.preventDefault()
    
    if(id.value == ''){
        alert("아이디를 입력하세요")
        id.focus()
        return
    }

    // 중복확인
    const data = localStorage.getItem(id.value)
    if(data){
        const user = JSON.parse(data)
        if (id.value == user.id){
            alert('중복된 아이디 입니다.')
            id.focus()
            id.value = ''
            return
        }
    }

    if(password.value == ''){
        alert('비밀번호를 적어주세요.')
        password.focus()
        return
    }

    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if(!regExp.test(password.value)){
        alert('비밀번호를 다시 적어주세요')
        password.focus()
        return
    }

    if(name.value == ''){
        alert('이름을 적어주세요.')
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
    
    const gender_box = document.querySelector('input[name="gender"]:checked')
    if(!gender_box){
        alert('성별을 체크해주세요.')
        return
    }
    

    // 로컬 저장
    const user = {
        id : id.value,
        password : password.value,
        confirmPassword : confirmPassword.value,
        name : name.value,
        number1 : number1.value,
        number2 : number2.value,
        gender : gender_box.value,
        email : email.value
    }
    
    localStorage.setItem(id.value, JSON.stringify(user))
    
    alert('가입되었습니다.')
    
    // 로그인 페이지로
    location.href = '../html/looflex_login.html'
})

const text2 = document.querySelectorAll('.text2')

id.addEventListener('input', ()=>{
    
    if(id.value.length < 8){
        text2[0].innerText=('8자 이상 적어주세요')
    }else{
        text2[0].innerText=('')
    }
})

password.addEventListener('input', ()=>{

    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if(!regExp.test(password.value)){
        text2[1].innerText=('비밀번호를 다시 입력해 주세요.')
    }else{
        text2[1].innerText=('')
    }
})
    
confirmPassword.addEventListener('input', ()=>{

    if(password.value != confirmPassword.value){
        text2[2].innerText=('비밀번호가 같지 않습니다.')
    }else{
        text2[2].innerText=('')
    }
})