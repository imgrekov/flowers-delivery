function _createModal(
	title = 'Розы',
	desc = 'Розы — это популярные цветы. На данный момент существует несколько тысяч сортов роз. Розы — это цветы, которые обладают волшебной красотой. Тысячи легенд сложено о розе. Ее любят все, ну и даже преклоняются пред ней. Все народы мира чествуют это прекрасное растение.',
) {
	const modal = document.createElement('div')
	modal.classList.add('mymodal')
	modal.classList.add('visibility-hidden')
	modal.insertAdjacentHTML(
		'afterbegin',
		`
    <div class="modal-overlay" data-close="close">
      <div class="modal-body">
        <h2 class="modal__title">${title}</h2>
        <!-- /.modal__title -->
        <p class="modal__desc">${desc}</p>
        <!-- /.modal__desc -->
        <button class="modal__close" data-close="close">&times;</button>
      </div>
      <!-- /.modal-body -->
    </div>
    <!-- /.modal-overlay -->
  `,
	)
	document.body.appendChild(modal)
	return modal
}

export const modal = function (options) {
	const $modal = _createModal(options)
	$modal.addEventListener('click', event => {
		// console.log(event.target.dataset.close)
		// event.target.dataset.close === 'close' ? console.log('y') : console.log('n')
	})
	return {
		open() {
			document.body.classList.add('overflow-hidden')
			$modal.classList.remove('visibility-hidden')
			$modal.classList.add('open')
		},
		close() {
			$modal.classList.add('visibility-hidden')
			$modal.classList.remove('open')
			document.body.classList.remove('overflow-hidden')
		},
		destroy() {},
	}
}

window.modal = modal()
