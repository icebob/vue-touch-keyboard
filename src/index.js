let component = require("./keyboard.vue");

module.exports = {
	component,
	layouts: require("./layouts"),

	install(Vue) {
		Vue.component("VueTouchKeyboard", component);
	}
};