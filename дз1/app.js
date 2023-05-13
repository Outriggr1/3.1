//1 - task
const btn  = document.querySelector('#showPassword')
const int = document.querySelector('#password')

btn.addEventListener('change', (event) => {
    if (btn.checked) {
        int.type = 'text'
    }else {
        int.type = 'password'
    }
})
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;

const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    const password = document.getElementById('password').value
    const conpassword = document.getElementById('confirmPassword').value

    if (!passwordRegExp.test(password)) {
        alert("Пароль должен содержать как минимум одну букву верхнего регистра, одну букву нижнего регистра, одну цифру и быть не короче 4 символов.")
        event.preventDefault();
    }else if (password !== conpassword) {
        alert("пароль не совпадает")
        event.preventDefault();
    }else {
        alert("успешно")
    }
})









// task 2 
const block = document.querySelector('.block')
 
let position = 0 
const func = ()  => {
    if (position <= 500) {
        position++
        block.style.left = `${position}px`
        setTimeout(func, 10)
    }
}
func()














