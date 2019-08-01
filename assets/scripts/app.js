
window.onload = () => {
	const totop = document.querySelector('.totop')
	const content = document.querySelector('.overflow')
	var hidden = true

	totop.addEventListener('click', () => {
		content.scrollTo(0, 0)
	})

	content.addEventListener('scroll', () => {
		if (content.scrollTop > 64 && hidden) {
			totop.classList.remove('hidden')
			hidden = false
		} else if (content.scrollTop < 64 && !hidden) {
			totop.classList.add('hidden')
			hidden = true
		}
	})
}
