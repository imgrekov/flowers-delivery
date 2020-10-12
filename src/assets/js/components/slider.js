import Glide from '@glidejs/glide'

export const flowersSlider = () =>
	new Glide('.header-slider', {
		type: 'carousel',
		startAt: 0,
		perView: 6,
		autoplay: 7000,
		breakpoints: {
			991: {
				perView: 4,
			},
			767: {
				perView: 3,
			},
			575: {
				perView: 1,
			},
		},
	}).mount()

export const reviewsSlider = () =>
	new Glide('.reviews-slider', {
		type: 'carousel',
		startAt: 0,
		perView: 1,
	}).mount()
