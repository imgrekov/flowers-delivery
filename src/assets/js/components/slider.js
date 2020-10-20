import Glide from '@glidejs/glide'

export const flowersSlider = (element, options = { type: 'slider' }) =>
	new Glide(element, {
		type: options.type,
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

export const reviewsSlider = (element, options = { type: 'slider' }) =>
	new Glide(element, {
		type: options.type,
		startAt: 0,
		perView: 1,
	}).mount()
