<template lang="jade">
	div
		.content(:class="{ hasKeyboard: visible }")
			fieldset
				legend Layouts
				select#layoutSelector(v-model="layout")
					option(v-for="(layout, key) in allLayouts", :value="key") {{ key }}

			fieldset
				legend Normal layout
				input#text.input(type="text", placeholder="Text input", @focus="show", data-layout="normal")

			fieldset
				legend Normal next_off layout
				input#text.input(type="text", placeholder="Text input", @focus="show", data-layout="normal_next_off")

			fieldset
				legend Compact layout
				input.input(type="text", placeholder="Text input", @focus="show", data-layout="compact", maxlength="5")

			fieldset
				legend Compact next_off layout
				input.input(type="text", placeholder="Text input", @focus="show", data-layout="compact_next_off", maxlength="5")

			fieldset
				legend Numeric layout
				input.input(type="number", placeholder="Number input", number, @focus="show", data-layout="numeric")

			fieldset
				legend Numeric next_off layout
				input.input(type="number", placeholder="Number input", number, @focus="show", data-layout="numeric_next_off")

			fieldset
				legend Password with compact layout
				input.input(type="password", placeholder="Password input", @focus="show", data-layout="compact")

		vue-touch-keyboard#keyboard(v-if="visible", :layout="layout", :cancel="hide", :enter="enter",
									:accept="accept", :input="input", :next="next", :options="options")

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
				enterPressed: false,
				allLayouts: VueTouchKeyboard.layouts,
				layout: "mini",
				input: null,
				options: {
					useKbEvents: true
				},
			}
		},
		methods: {
			hide() {
				this.visible = false;
			},	
			accept(text) {
				this.hide();
			},
			next() {
				let inputs = document.querySelectorAll("input");
				let found = false;
				[].forEach.call(inputs, (item, i) => {
					if (!found && item == this.input && i < inputs.length - 1) {
						found = true;
						this.$nextTick(() => {
							inputs[i+1].focus();
						});
					}
				});
				if (!found) {
					this.input.blur();
					this.hide();
				}
			},
			show(e) {
				this.input = e.target;
				this.layout = e.target.dataset.layout;

				if (!this.visible)
					this.visible = true

				this.$nextTick(() => {
					this.input.scrollIntoView();
				});				
			},

			enter() {
				this.enterPressed = true;
			}
		},
		mounted() {
			window.app = this;
			this.$nextTick(() => {
				this.input = document.querySelector("input#text");
				this.input.focus();
			});
		}
	}
</script>

<style lang="sass">
	html {
		font-family: "Arial", sans-serif;
		font-size: 16px;
	}

	* {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.content {
		display: flex;
    	flex-wrap: wrap;

		text-align: center;
		overflow: auto;

		&.hasKeyboard {
			display: flex;
    		flex-wrap: wrap;

			bottom: 18em;
		}
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

	fieldset {
		display: block;
		height: 300px;
		width: 300px;
		padding: 15px;
		margin: 10px;
		border-style: solid;
		background-color: #fff;
		border-color: #ddd;
		border-width: 1px;
		border-radius: 4px;	
	}

	input.input, select#layoutSelector {
		display: block;
		width: 100%;
		height: 34px;
		padding: 6px 12px;
		font-size: 14px;
		line-height: 1.42857143;
		color: #555;
		background-color: #fff;
		background-image: none;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
		transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;		

		&:focus {
			border-color: #66afe9;
			outline: 0;
			box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);			
		}
	}
</style>