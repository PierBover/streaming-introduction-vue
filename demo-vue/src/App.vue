<template>
  <div id="app">
	  <h1>Productos</h1>
	  <div class="productos">
		  <product v-for="product in products" :config="product"/>
	  </div>
  </div>
</template>

<script>
import Product from './Product.vue';

export default {
	components: {
		'product': Product
	},
	name: 'app',
	data () {
		return {
			products: [
				{
					id: 1,
					name: 'Laptop XPS 13',
					manufacturer: 'Dell',
					description: 'Lorem ipsum dolor sit amet, consectrsus ligula tristique bibendum. Aliquam at erat quis tellus adipiscing tempus. Cras sed rutrum velit. Curabitur vel lacus eget erat tincidunt fringilla nec in ante.',
					price: '10',
					currency: 'MXN',
					img: 'http://i.dell.com/sites/imagecontent/products/PublishingImages/xps-13-9350-laptop/laptop-xps-13-9350-pdp-polaris-01.jpg'
				},
				{
					id: 2,
					name: 'Macbook Air',
					manufacturer: 'Apple',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pue bibendum. Aliquam at erat quis tellus adipiscing tempus. Cras sed rutrum velit. Curabitur vel lacus eget erat tincidunt fringilla nec in ante.',
					price: '9999',
					currency: 'MXN',
					img: 'https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/H/K5/HK5L2/HK5L2?wid=572&hei=572&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1463171783837'
				},
				{
					id: 3,
					name: 'PixelBook',
					manufacturer: 'Google',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor diam cursus ligula tristique bibendum. Aliquam at erat quis tellus adipiscing tempus. Cras sed rutrum velit. Curabitur vel lacus eget erat tincidunt fringilla nec in ante.',
					price: '98798',
					currency: 'MXN',
					img: 'http://blog.cubot.net/wp-content/uploads/2017/09/59c854f0a8042.jpg'
				},
				{
					id: 4,
					name: 'Envy',
					manufacturer: 'HP',
					description: '',
					price: '9999',
					currency: 'MXN',
					img: 'http://product-images.www8-hp.com/digmedialib/prodimg/lowres/c05504697.png'
				}
			]
		}
	}
}
</script>

<style>
body {
	margin: 3rem;
	font-family: sans-serif;
}

.productos {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
</style>
