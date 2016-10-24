<template lang="jade">
	input.input(type="text")
	vue-touch-keyboard#keyboard(v-if="visible", :layouts="layouts", :hide="hide", :input="input")

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
				layouts: VueTouchKeyboard.layouts["alphaNumeric-mini"],
				input: null,
				accept: null				
			}
		},

		methods: {
			hide() {
				this.keyboard.visible = false;
			},			 
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
		font-size: 14px;
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
		max-width: 1000px;
		margin: 0 auto;

		padding: 1em;

		background-color: #EEE;
		box-shadow: 0px -3px 10px rgba(black, 0.3);

		border-radius: 10px;
	}	

</style>