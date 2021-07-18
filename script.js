const registerBuuton = document.querySelector('.register-btn')

registerBuuton.addEventListener('click', (event) => {
  event.preventDefault()
  const emailInput = document.querySelector('.input-text')
  const email = emailInput.value

  function emailValidate() {
    const emailTester = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    if (emailTester.test(email)) {
      return true
    }
  }

  if (emailValidate()) {
    const data = JSON.parse(localStorage.getItem('emails')) || [];
    data.push(email)
    localStorage.setItem('emails', JSON.stringify(data))
    return alert('Email cadastrado com sucesso! :)')
  }
  return alert('Email Inválido')
})
