<template lang="jade">
	.vue-touch-keyboard
		// input(type="text", v-model="keyboardText", v-if="!input")
		.keyboard
			.line(v-for="(line, index) in keySet", :key="index")
				span(v-for="(key, index) in line", :key="index", :class="getClassesOfKey(key)", v-text="getCaptionOfKey(key)", @click="e => clickKey(e, key)", @mousedown="mousedown", :style="getKeyStyle(key)")


</template>

<script>
	import Layouts from "./layouts";
	import isString from "lodash/isString";
	import isObject from "lodash/isObject";

	export default {
		props: {
			input: [HTMLInputElement, HTMLTextAreaElement],
			layout: [String, Object],
			defaultKeySet: {
				type: String,
				default: "default",
			},

			accept: Function,
			cancel: Function,
			change: Function,
			next: Function,

			options: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		
		data () {
			return {
				currentKeySet: this.defaultKeySet,

				inputScrollLeft: 0
			};
		},

		computed: {

			keySet() {
				let layout = this.getLayout();
				if (!layout) return;
				
				let keySet = layout[this.currentKeySet];
				if (!keySet) return;

				let res = [];

				let meta = layout["_meta"] || {};

				keySet.forEach((line) => {
					let row = [];
					line.split(" ").forEach((item) => {
						if (isObject(item)) {
							row.push(item);
						}
						else if (isString(item)) {
							if (item.length > 2 && item[0] == "{" && item[item.length- 1] == "}") {
								let name = item.substring(1, item.length - 1);
								if (meta[name])
									row.push(meta[name]);
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

				return res;
			}			
		},

		watch: {
			layout() {
				this.currentKeySet = "default";
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
					return "placeholder";
				else {
					let classes = "key " + (key.func || "") + " " + (key.classes || "");
					if (key.keySet && this.currentKeySet == key.keySet)
						classes += " activated";

					return classes;
				}
			},

			getKeyStyle(key) {
				if (key.width) 
					return {
						flex: key.width
					};
			},

			supportsSelection() {
				return (/text|password|search|tel|url/).test(this.input.type); 
			},

			getCaret() {
				if (this.supportsSelection()) {
					let pos = {
						start: this.input.selectionStart || 0,
						end: this.input.selectionEnd || 0
					};

					if (pos.end < pos.start)
						pos.end = pos.start;

					return pos;

				} else {
					let val = this.input.value;
					return {
						start: val.length,
						end: val.length
					};
				}
			},

			backspace(caret, text) {
				if (caret.start < caret.end) {
					text = text.substring(0, caret.start) + text.substring(caret.end);
				} else {
					text = text.substring(0, caret.start - 1) + text.substring(caret.start);
					caret.start -= 1;
				}
				caret.end = caret.start;
				return text;
			},

			insertChar(caret, text, ch) {
				if (caret.start < caret.end) {
					text = text.substring(0, caret.start)  + ch.toString() + text.substring(caret.end);
				} else {
					text = text.substr(0, caret.start) + ch.toString() + text.substr(caret.start);
				}
				caret.start += ch.length;
				caret.end = caret.start;
				return text;
			},

			mousedown(e) {
				if (!this.input) return;
				if (this.options.preventClickEvent) e.preventDefault();

				this.inputScrollLeft = this.input.scrollLeft;
			},

			clickKey(e, key) {
				if (!this.input) return;
				if (this.options.preventClickEvent) e.preventDefault();

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
							text = this.backspace(caret, text);
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

						case "next": {
							if (this.next)
								this.next();
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
					if (this.input.maxLength <= 0 || text.length < this.input.maxLength) {
						if (this.options.useKbEvents) {
							let e = document.createEvent("Event"); 
							e.initEvent("keydown", true, true);
							e.which = e.keyCode = addChar.charCodeAt();
							if (this.input.dispatchEvent(e)) {
								text = this.insertChar(caret, text, addChar);
							}
						} else {
							text = this.insertChar(caret, text, addChar);
						}
					} 

					if (this.currentKeySet == "shifted")
						this.changeKeySet("default");
				}

				this.input.value = text;
				this.setFocusToInput(caret);

				if (this.change)
					this.change(text, addChar);

				if (this.input.maxLength > 0 && text.length >= this.input.maxLength) {
					// The value reached the maxLength
					if (this.next)
						this.next();
				}

				// trigger 'input' Event
				this.input.dispatchEvent(new Event("input", { bubbles: true }));

			},
			
			setFocusToInput(caret) {
				this.input.focus();
				if (caret && this.supportsSelection()) {
					this.input.selectionStart = caret.start;
					this.input.selectionEnd = caret.end;
				}
			}			
		},

		mounted() {
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
	$radius: 0.35em;

	.vue-touch-keyboard {

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


				&.backspace {
					background-image: url("./icons/backspace.svg");
					background-position: center center;
					background-repeat: no-repeat;
					background-size: 35%;
				}
			
				&.half {
					flex: $width / 2;
				}

				&.control {
					color: #fff;
					background-color: #7d7d7d;
					border-color: #656565;
				}
							
				&.featured {
					color: #fff;
					background-color: #337ab7;
					border-color: #2e6da4;
				}

				&:hover {
					color: #333;
					background-color: #d6d6d6;
					border-color: #adadad;
				}
				
				&:active {
					transform: scale(.98); // translateY(1px);
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
			/*
			// Apple style
			.key {
				color: #aaa;
				//font: bold 9pt arial;
				background: #eff0f2;
				border-radius: 4px;
				border-top: 1px solid #ddd;
				box-shadow: 
					inset 0 0 25px #e8e8e8,
					0 1px 0 #c3c3c3,
					0 2px 0 #c9c9c9,
					0 2px 3px #333;
				text-shadow: 0px 1px 0px #f5f5f5;

				&.control {
					box-shadow: 
						0 1px 0 #c3c3c3,
						0 2px 0 #c9c9c9,
						0 2px 3px #333;
					text-shadow: 0px 1px 0px #777;
				}

				&:hover {
					color: #aaa;
					background-color: inherit;
					border-color: inherit;
				}

				&:active {
					color: #888;
					background: #ebeced;
					transform: translateY(3px);
					box-shadow: inset 0 0 25px #ddd, 0 0 3px #333;
					border-top: 1px solid #eee;
				}
			}*/

			.placeholder {
				flex: $width / 2;
				height: $height;
				line-height: $height;
				
				&:not(:last-child) {
					margin-right: $margin;
				}
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
