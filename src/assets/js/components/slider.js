import Glide from '@glidejs/glide'

export const slider = () =>
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
