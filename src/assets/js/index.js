import '../sass/style.sass'
import './components/card'
import { modal } from './components/modal'
import { flowersSlider, reviewsSlider } from './components/slider'

flowersSlider('.header-slider', {
	type: 'carousel',
})
reviewsSlider('.reviews-slider', {
	type: 'carousel',
})
