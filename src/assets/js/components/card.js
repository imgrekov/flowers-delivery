const buttons = document.querySelectorAll('.btn-qty')

buttons.forEach(btn => {
	btn.addEventListener('click', function () {
		const input = this.parentElement.querySelector('.input-qty')
		let inputValue = +input.value
		input.value = this.dataset.direction === 'plus' ? inputValue + 1 : inputValue <= 1 ? inputValue : inputValue - 1
	})
})
