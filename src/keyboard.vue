<template lang="jade">
	div.vue-touch-keyboard
		// input(type="text", v-model="keyboardText", v-if="!input")
		.keyboard
			.line(v-for="line in keySet", track-by="$index")
				span(v-for="key in line", track-by="$index", :class="getClassesOfKey(key)", v-text="getCaptionOfKey(key)", @click="clickKey(key)", :style="getKeyStyle(key)")

</template>

<script>
	import Layouts from "./layouts";
	import isString from "lodash/isString";
	import isObject from "lodash/isObject";

	export default {
		props: {
			input: HTMLInputElement,
			layout: [String, Object],

			accept: Function,
			cancel: Function,
			change: Function,

			options: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		
		data () {
			return {
				currentKeySet: "default"
			};
		},

		computed: {

			keySet() {
				let layout = this.getLayout();
				let keyset = layout[this.currentKeySet];

				let res = []

				let meta = layout["_meta"] || {};

				keyset.forEach((line) => {
					let row = [];
					line.split(" ").forEach((item) => {
						if (isObject(item)) {
							row.push(item);
						}
						else if (isString(item)) {
							if (item.length > 2 && item[0] == "{" && item[item.length- 1] == "}") {
								let name = item.substring(1, item.length - 1);
								if (meta[name])
									row.push(meta[name])
								else
									console.warn("Missing named key from meta: " + name);
							} else {
								if (item == "") {
									// Placeholder
									row.push({
										placeholder: true
									});
									
								} else {
									// Normal key
									row.push({
										key: item,
										text: item
									});
								}
							}
						}
					});
					res.push(row);
				});

				console.log(res);
				return res;
			}			
		},

		methods: {
			getLayout() {
				if (isString(this.layout))
					return Layouts[this.layout];

				return this.layout;
			},
			
			changeKeySet(name) {
				let layout = this.getLayout();
				if (layout[name] != null)
					this.currentKeySet = name;
			},
			
			toggleKeySet(name) {
				this.currentKeySet = this.currentKeySet == name ? "default" : name;
			},
			
			getCaptionOfKey(key) {
				return key.text || key.key || "";
			},
			
			getClassesOfKey(key) {
				if (key.placeholder)
					return "placeholder"
				else {
					let classes = "key " + (key.classes || "");
					if (key.keySet && this.currentKeySet == key.keySet)
						classes += " activated"

					return classes;
				}
			},

			getKeyStyle(key) {
				if (key.width) 
					return {
						flex: key.width
					}
			},

			supportsSelection() {
 				return (/text|password|search|tel|url/).test(this.input.type); 
			},

			getCaret() {
				if (this.supportsSelection()) {
					let pos = {
						start: this.input.selectionStart || 0,
						end: this.input.selectionEnd || 0
					}
					if (pos.end < pos.start)
						pos.end = pos.start;

					return pos
				} else {
					let val = this.input.value;
					return {
						start: val.length,
						end: val.length
					}
				}
			},

			backspace(caret, text) {
				text = text.substring(0, caret.start - 1) + text.substring(caret.start);
				caret.start -= 1;
				caret.end = caret.start;
				return text;
			},

			insertChar(caret, text, ch) {
				text = text.substr(0, caret.start) + ch.toString() + text.substr(caret.start);
				caret.start += ch.length;
				caret.end = caret.start;
				return text;
			},

			clickKey(key) {
				if (!this.input) return;

				let caret = this.getCaret();
				let text = this.input.value;
				
				let addChar = null;
				if (typeof key == "object") {
					if (key.keySet) {
						this.toggleKeySet(key.keySet);
					}
					else if (key.func) {
						switch(key.func) {

						case "backspace": {
							text = this.backspace(caret, text)
							break;
						}

						case "accept": {
							if (this.accept)
								this.accept(text);
							return;
						}

						case "cancel": {
							if (this.cancel)
								this.cancel();
							return;
						}

						}
					} else {
						addChar = key.key;
					}

				} else {
					addChar = key;
				}

				if (addChar) {
					if (this.options.useKbEvents) {
						let e = document.createEvent("KeyboardEvent"); 
						e.initEvent("keypress", true, true); 
						e.which = e.keyCode = addChar.charCodeAt();
						if (this.input.dispatchEvent(e)) {
							text = this.insertChar(caret, text, addChar);
						}
					} else {
						text = this.insertChar(caret, text, addChar);
					}

					if (this.currentKeySet == "shifted")
						this.changeKeySet("default");
				}

				this.input.value = text;
				this.setFocusToInput(caret);

				if (this.change)
					this.change(text, addChar);
			},
			
			setFocusToInput(caret) {
				this.input.focus();
				if (caret && this.supportsSelection()) {
					this.input.selectionStart = caret.start;
					this.input.selectionEnd = caret.end;
				}
			}			
		},

		ready() {
			if (this.input) {
				this.setFocusToInput();
			}			
		}
	};
	
</script>

<style lang="sass">
		
	$width: 40;
	$height: 2.2em;
	$margin: 0.5em;
	$radius: 0.625em;

	.vue-touch-keyboard {

		.wrapper {
			width: 100%;
		} // .wrapper

		.keyboard {
			width: 100%;
			margin: 0;
			
			.line {
				display: flex;
				justify-content: space-around;    
				&:not(:last-child) {
					margin-bottom: $margin;
				}
			}
			
			.key {
				&:not(:last-child) {
					margin-right: $margin;
				}

				flex: $width;
				//width: $btnW;
				height: $height;
				line-height: $height;
				overflow: hidden;

				vertical-align: middle;
				border: 1px solid #ccc;
				color: #333;
				background-color: #fff;
				box-shadow: 0px 2px 2px rgba(0, 0, 0, .6);
				border-radius: $radius;

				font-size: 1.25em;
				text-align: center;
				white-space: nowrap;
				user-select: none;
				cursor: pointer;


			
				&.half {
					flex: $width / 2;
				}
							
				&.featured {
					color: #fff;
					background-color: #337ab7;
					border-color: #2e6da4;
				}

				&:hover {
					color: #333;
					background-color: #e6e6e6;
					border-color: #adadad;
				}
				
				&:active {
					transform: scale(.95);
					color: #333;
					background-color: #d4d4d4;
					border-color: #8c8c8c;					
				}

				&.activated {
					color: #fff;
					background-color: #5bc0de;
					border-color: #46b8da;
				}

			} // .key

			.placeholder {
				flex: $width / 2;
				height: $height;
				line-height: $height;
			}
			
			
			&:before,
			&:after {
				content: "";
				display: table;
			}
			&:after {
				clear: both;
			}  
		} // .keyboard

	} // .vue-touch-keyboard
</style>