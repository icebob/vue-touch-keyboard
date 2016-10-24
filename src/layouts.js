
module.exports = {

	"alphaNumeric-mini": {

		default: [
			['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
			['', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ''],
			[{ layout: 'shifted', text: 'ABC'}, 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.'],
			[{ layout: 'numbers', text: '123'}, '-', { key: ' ', text: 'Space', classes: "space"}, { func: "backspace", classes: "fa fa-arrow-left"}, { func: 'hide', text: 'Close', classes: "featured"}]
		],

		shifted: [
			['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
			['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
			[{ layout: 'default', text: 'abc'}, 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.'],
			[{ layout: 'numbers', text: '123'}, '_', { key: ' ', text: 'Space', classes: "space"}, { func: "backspace", classes: "fa fa-arrow-left"}, { func: 'hide', text: 'Close', classes: "accept"}]
		],

		numbers: [
			['1', '2', '3'],
			['4', '5', '6'],
			['7', '8', '9'],
			['', '', { layout: 'default', text: 'Abc'}, '.', { key: '0', classes: "zero"}, { func: "backspace", classes: "fa fa-arrow-left"}, { func: 'hide', text: 'Close', classes: "accept"}]
		]
	},

	"numeric": {
		default: [
			['1', '2', '3'],
			['4', '5', '6'],
			['7', '8', '9'],
			['_', '-', '.', { key: '0', classes: "zero"}, { func: "backspace", classes: "fa fa-arrow-left"}, { func: 'hide', text: 'Close', classes: "accept"}]
		]
	},

	"alphaNumeric-full": {
		default: [
			['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '<- | Delete'],
			['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
			['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
			['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
			['Space']
		],
		shifted: [
			['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Delete'],
			['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
			['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
			['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift'],
			['Space']
		],
		
		capsed: [
			['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete'],
			['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
			['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
			['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'], 
			['Space']
		]		
	}

}