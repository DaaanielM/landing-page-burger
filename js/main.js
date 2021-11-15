const btn__menu = document.querySelector('.btn__menu');
if (btn__menu) {
	btn__menu.addEventListener('click', () => {
		const btn__menu = document.querySelector('ul');
		btn__menu.classList.toggle('show');
	});
}
