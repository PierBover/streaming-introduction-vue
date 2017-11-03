<template lang="html">
	<div class="producto" :class="cssClass">
		<img :src="config.img" alt="">
		<div class="data">
			<h2>{{config.name}}</h2>
			<h3>{{config.manufacturer}}</h3>
			<p v-if="showDescription">{{config.description}}</p>
			<h4>{{config.price}} <small>{{config.currency}}</small></h4>
			<button type="button" name="button" @click="buyProduct">COMPRAR</button>
			<button type="button" name="button" @click="toggleDescription">DESCRIPTION</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['config'],
	data () {
		return {
			showDescription: true,
			selected: false
		}
	},
	methods: {
		buyProduct () {
			console.log("COMPRARRR!!!!", this.config.id, this.config.name);
			this.selected = !this.selected;
		},
		toggleDescription () {
			this.showDescription = !this.showDescription;
		}
	},
	computed: {
		cssClass () {
			if (this.selected) return 'selected';
			else return '';
		}
	}
}
</script>

<style lang="css" scoped>

.selected {
	background-color: green;
	font-family: monospace;
}

.producto {
	border: 1px solid grey;
	margin: 0 2rem 2rem 0;
	width: 20rem;
}

.producto .data {
	padding: 1rem;
	background-color: #f0f0f0;
}

.producto img {
	height: 10rem;
	display: block;
	margin: 1rem auto;
}

button {
	font-size: 1rem;
}
</style>
