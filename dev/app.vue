<template lang="jade">
	select.layoutSelector(v-model="layout")
		option(v-for="layout in allLayouts", :value="$key") {{ $key }}

	input.input(type="text", @focus="show", data-layout="normal")
	input.input(type="number", number, @focus="show", data-layout="numeric")
	input.input(type="password", @focus="show", data-layout="mini")
	vue-touch-keyboard#keyboard(v-if="visible", :layout="layout", :cancel="hide", :accept="accept", :input="input")

</template>

<script>
	import Vue from "vue";
	import VueTouchKeyboard from "../src";

	import {each, isFunction, cloneDeep, merge} from 'lodash';	

	Vue.use(VueTouchKeyboard);

	export default {

		data() {
			return {
				visible: false,
				allLayouts: VueTouchKeyboard.layouts,
				//layout: VueTouchKeyboard.layouts["alphaNumeric-mini"],
				layout: "mini",
				input: null				
			}
		},

		methods: {
			hide() {
				this.visible = false;
			},	

			accept(text) {
				alert("Input text: " + text);
				this.hide();
			},

			show(e) {
				if (!this.visible)
					this.visible = true

				this.input = e.target;
				this.layout = e.target.dataset.layout;
			}		 
		},
		
		ready() {
			window.app = this;
			this.$nextTick(() => {
				this.input = document.querySelector("input.input");
				this.visible = true;
			});
		}
	}

	window.Vue = require('vue');
</script>

<style lang="sass">
	//@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700|Open+Sans+Condensed:300&subset=latin,latin-ext);

	html {
		font-family: "Arial", sans-serif;
		font-size: 16px;
	}

	* {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	#keyboard {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;

		z-index: 1000;
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;

		padding: 1em;

		background-color: #EEE;
		box-shadow: 0px -3px 10px rgba(black, 0.3);

		border-radius: 10px;
	}	

</style>