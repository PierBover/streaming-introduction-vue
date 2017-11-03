const data = {
	products: [
		{
			id: 1,
			name: 'Laptop XPS 13',
			manufacturer: 'Dell',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor diam cursus ligula tristique bibendum. Aliquam at erat quis tellus adipiscing tempus. Cras sed rutrum velit. Curabitur vel lacus eget erat tincidunt fringilla nec in ante.',
			price: '9999',
			currency: 'MXN',
			img: 'http://i.dell.com/sites/imagecontent/products/PublishingImages/xps-13-9350-laptop/laptop-xps-13-9350-pdp-polaris-01.jpg'
		},
		{
			id: 2,
			name: 'Macbook Air',
			manufacturer: 'Apple',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor diam cursus ligula tristique bibendum. Aliquam at erat quis tellus adipiscing tempus. Cras sed rutrum velit. Curabitur vel lacus eget erat tincidunt fringilla nec in ante.',
			price: '9999',
			currency: 'MXN',
			img: 'https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/H/K5/HK5L2/HK5L2?wid=572&hei=572&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1463171783837'
		},
		{
			id: 3,
			name: 'PixelBook',
			manufacturer: 'Google',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor diam cursus ligula tristique bibendum. Aliquam at erat quis tellus adipiscing tempus. Cras sed rutrum velit. Curabitur vel lacus eget erat tincidunt fringilla nec in ante.',
			price: '9999',
			currency: 'MXN',
			img: 'http://blog.cubot.net/wp-content/uploads/2017/09/59c854f0a8042.jpg'
		},
		{
			id: 4,
			name: 'Envy',
			manufacturer: 'HP',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor diam cursus ligula tristique bibendum. Aliquam at erat quis tellus adipiscing tempus. Cras sed rutrum velit. Curabitur vel lacus eget erat tincidunt fringilla nec in ante.',
			price: '9999',
			currency: 'MXN',
			img: 'http://product-images.www8-hp.com/digmedialib/prodimg/lowres/c05504697.png'
		}
	]
}

data.products.forEach((product) => {

	const html = `
		<img src="${product.img}" alt="">
		<div class="data">
			<h2>${product.name}</h2>
			<h3>${product.manufacturer}</h3>
			<p>${product.description}</p>
			<h4>${product.price} <small>${product.currency}</small></h4>
			<button type="button" name="button">COMPRAR</button>
		</div>
	`;

	const $product = $('<div/>').addClass('producto').append(html);

	$product.find('button').click(function(event) {
		buy(product);
	});

	$('.productos').append($product);
});

function buy(product) {
	console.log('COMPRAR', product.id, product.name);
}