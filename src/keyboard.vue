<template lang="jade">
	div.vue-touch-keyboard
		input(type="text", v-model="keyboardText", v-if="!input")
		.keyboard
			.line(v-for="line in keyboardLayout", track-by="$index")
				span(v-for="key in line", track-by="$index", :class="getClassesOfKey(key)", v-text="getCaptionOfKey(key)", @click="clickKey(key)")

</template>

<script>
	export default {
		props: [
			"keyboardText",
			"layouts",
			"input",
			"accept",
			"cancel",
			"hide",
			"change"
		],
		
		data () {
			return {
				currentLayout: "default"
			};
		},

		computed: {
			keyboardLayout() {
				return this.layouts[this.currentLayout || "default"];
			}			
		},

		watch: {
			input() {
				if (this.input) {
					this.keyboardText = this.input.value;
					this.setFocusToInput();
				}
			}
		},

		methods: {
			changeLayout(name) {
				if (this.layouts[name] != null)
					this.currentLayout = name;
			},
			
			toggleLayout(name) {
				this.currentLayout = this.currentLayout == name ? "default" : name;
			},
			
			getCaptionOfKey(key) {
				if (typeof key == "object") {
					return key.text || key.key || "";
				}
				return key;
			},
			
			getClassesOfKey(key) {
				if (typeof key == "object")
					return "key " + (key.classes || "");
				
				if (key == "")
					return "ph";
				
				return "key";
			},

			clickKey(key) {
				let selStart = -1;
				if (this.input) {
					selStart = this.input.selectionStart;
				}
				let addChar = null;
				if (typeof key == "object") {
					if (key.layout) {
						this.changeLayout(key.layout);
					}
					else if (key.func) {
						switch(key.func) {
						case "backspace": {
							let kbt = this.keyboardText;
							if (this.input) {
								this.keyboardText = kbt.substring(0, selStart - 1) + kbt.substring(selStart);
								selStart -= 1;
							}
							else {
								this.keyboardText = kbt.length ? kbt.substring(0, kbt.length - 1) : kbt;
							}
							break;
						}
						case "accept": {
							if (this.accept)
								this.accept(this.keyboardText);
							return;
						}
						case "cancel": {
							if (this.cancel)
								this.cancel();
							return;
						}
						case "hide": {
							if (this.hide)
								this.hide();
							return;
						}
						}
					} else {
						addChar = key.key;
					}

				} else {
					addChar = key;
				}

				if (this.input) {
					if (addChar) {
						let e = document.createEvent("Event"); 
						e.initEvent("keypress", true, true); 
						e.keyCode = addChar.charCodeAt();
						e.which = e.keyCode;
						if (this.input.dispatchEvent(e)) {
							let txt = this.keyboardText;
							this.keyboardText = txt.substr(0, selStart) + addChar.toString() + txt.substr(selStart);
							this.input.value = this.keyboardText;
							selStart += 1;

							if (this.change)
								this.change(this.keyboardText, addChar);
						}

						if (this.currentLayout == "shifted")
							this.changeLayout("default");
					}
					else {
						this.input.value = this.keyboardText;
					}

					this.setFocusToInput(selStart);
				}
			},
			
			setFocusToInput(selStart) {
				if (this.input) {
					this.input.focus();
					if (selStart) {
						this.input.selectionStart = selStart;
						this.input.selectionEnd = selStart;
					}
				}
			}			
		},

		ready() {
			if (this.input) {
				this.keyboardText = this.input.value;
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
				
			} // span
			
			.ph {
				flex: $width / 2;
				height: $height;
				line-height: $height;
			}
			
			.half {
				flex: $width / 2;
			}
			
			.space {
				flex: 200;
			}
			
			.zero {
				flex: 120;
			}
			
			.featured {
				color: #fff;
				background-color: #337ab7;
				border-color: #2e6da4;
			}

			.accept {
				flex: 80;
			}
			
			.half {
				flex: $width / 2;
			}
			
			.highlighted {
				color: #fff;
				background-color: #337ab7;
				border-color: #2e6da4;
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