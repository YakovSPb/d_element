document.addEventListener("DOMContentLoaded", function() {

	function paddingRight(){
		var width = document.body.clientWidth
		var container = 940
		var footerLine = document.querySelector('.footer__line')
		if(width> 992){
			footerLine.style.right = (width-container)/2 + 100 + 'px'
		}
	}

	paddingRight()
  window.addEventListener('resize', function(event){
   paddingRight()
 });

	// menu
  const link = document.getElementsByClassName('gumburger')
  const close = document.getElementsByClassName('close-menu')
  const menu = document.getElementsByClassName('m-menu')

  link[0].addEventListener('click', event => {
    event.preventDefault()
    menu[0].classList.add('m-menu__active')
    link[0].style.display = 'none'

  })
  close[0].addEventListener('click', event => {
    event.preventDefault()
    menu[0].classList.remove('m-menu__active')
    link[0].style.display = 'block'
  })


//Modal window
const modal = document.querySelector('#yak-my-modal');
const modalBtn = document.querySelector('.team__btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Validate
var form = document.querySelector('.form-modal')
var validateBtn = form.querySelector('.validateBtn')
var formName = form.querySelector('.form__input-name')
var formEmail = form.querySelector('.form__input-mail')
var formMessage = form.querySelector('.form__input-message')
var fields = form.querySelectorAll('.field')
var emailError = document.querySelector('.email-error')

form.addEventListener('submit', function(event){
  var th = $(this);
  event.preventDefault()
  removeValidation()

  var readyToSend = true

  for (var i = 0; i < fields.length; i++) {
    if(!fields[i].value) {
      var error = document.createElement('div')
      error.className = 'error'
      error.style.color = 'red'
      error.innerHTML = 'Поле не может быть пустым!'
      fields[i].parentElement.insertBefore(error, fields[i])
      readyToSend = false
    }

  }
  if(fields[1].value){
    if(!validateEmail(fields[1].value)){
      var error = `
      <div style="color:red">Введите корректный email</div>
      `
      emailError.innerHTML = error
      readyToSend = false
    } else{
      emailError.innerHTML = ''
    }
  }

    if(readyToSend){
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: th.serialize()
      }).done(function() {
        $('.success').addClass("visible")
        setTimeout(function() {
          th.trigger("reset")
          $('.success').removeClass("visible")
          closeModal()
        }, 3000)
      });
      return false;
    }

})

var removeValidation = function () {
  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }

}
var removeValidation2 = function () {
  var errors2 = form2.querySelectorAll('.error')

  for (var i = 0; i < errors2.length; i++) {
    errors2[i].remove()
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// static form
var form2 = document.querySelector('.static-form') || ''
if(form2){
  var validateBtn2 = form2.querySelector('.validateBtn')
  var formName2 = form2.querySelector('.form__input-name')
  var formEmail2 = form2.querySelector('.form__input-mail')
  var formMessage2 = form2.querySelector('.form__input-message')
  var fields2 = form2.querySelectorAll('.field')
  var emailError2 = document.querySelector('.email-error')

  form2.addEventListener('submit', function(event){
    var th = $(this);
    event.preventDefault()
    removeValidation2()

    var readyToSend = true

    for (var i = 0; i < fields2.length; i++) {
      if(!fields2[i].value) {
        var error = document.createElement('div')
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Поле не может быть пустым!'
        fields2[i].parentElement.insertBefore(error, fields2[i])
        readyToSend = false
      }

    }
    if(fields2[1].value){
      if(!validateEmail(fields2[1].value)){
        var error = `
        <div style="color:red">Введите корректный email</div>
        `
        emailError.innerHTML = error
        readyToSend = false
      } else{
        emailError.innerHTML = ''
      }
    }

    if(readyToSend){
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: th.serialize()
      }).done(function() {
        $('.success').addClass("visible")
        closeModal()
        setTimeout(function() {
          th.trigger("reset")
          $('.success').removeClass("visible")
        }, 3000)
      });
      return false;
    }


  })

}



});
