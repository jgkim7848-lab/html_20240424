const id = document.getElementById('id')
const password = document.getElementById('password')
const login_button = document.querySelector('.login-button')

login_button.addEventListener('click', (e)=>{

    e.preventDefault()

    // 로컬 데이터 가져오기
    const data = localStorage.getItem(id.value)
    const user = JSON.parse(data)

    if(id.value == ''){
        alert('아이디를 적어주세요.')
        id.focus()
        return
    }

    if(password.value == ''){
        alert('비밀번호를 적어주세요.')
        password.focus()
        return
    }

    // 내가 적은 아이디가 없을 경우
    if(!user){
        alert('아이디가 존재하지 않습니다.')
        id.focus()
        return
    }
    
    // 내가 적은 아이디가 있을 경우
    if(id.value == user.id && password.value == user.password){
        alert('로그인 성공')
        location.href = '../html/looflex_Main.html'
    }else{
        alert('비밀번호가 틀렸습니다.')
        password.focus()
    }
})
