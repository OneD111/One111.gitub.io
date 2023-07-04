const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    emailInput.addEventListener('input', function(event) {
      if (emailInput.validity.valid) {
        emailError.textContent = '';
      } else {
        emailError.textContent = "请输入有效的邮箱地址";
      }
    });