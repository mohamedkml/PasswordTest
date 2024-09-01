document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const conditions = document.querySelectorAll('.conditions-list .condition');
    let valid = true;
    
    
    const lengthCondition = /.{8,}/;
    const uppercaseCondition = /[A-Z]/;
    const lowercaseCondition = /[a-z]/;
    const digitCondition = /\d/;
    const specialCharCondition = /[@!$%^&*]/;
  
    conditions[0].classList.toggle('valid', lengthCondition.test(password));
    valid = valid && lengthCondition.test(password);
  
    conditions[1].classList.toggle('valid', uppercaseCondition.test(password));
    valid = valid && uppercaseCondition.test(password);
  
    conditions[2].classList.toggle('valid', lowercaseCondition.test(password));
    valid = valid && lowercaseCondition.test(password);
  
    conditions[3].classList.toggle('valid', digitCondition.test(password));
    valid = valid && digitCondition.test(password);
  
    conditions[4].classList.toggle('valid', specialCharCondition.test(password));
    valid = valid && specialCharCondition.test(password);
  
    
    const input = document.getElementById('password');
    if (valid) {
      input.classList.add('valid');
      input.classList.remove('invalid');
      document.querySelector('.success-message').style.display = 'block';
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
      document.querySelector('.success-message').style.display = 'none';
    }
  
    document.querySelector('.conditions-list').style.display = 'block';
    document.querySelector('.error-message').style.display = valid ? 'none' : 'block';
  });