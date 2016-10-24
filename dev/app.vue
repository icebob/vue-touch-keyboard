<template lang="jade">
	vue-touch-keyboard()

</template>

<script>
	import Vue from "vue";
	import VueTouchKeyboard from "../src";

	import {each, isFunction, cloneDeep, merge} from 'lodash';	

	Vue.use(VueTouchKeyboard);

	export default {

		data() {
			return {
				
			}
		},

		methods: {
			 
		},
		
		ready() {
			window.app = this;
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

</style>