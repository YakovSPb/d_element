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

});
