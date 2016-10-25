/*eslint quotes: ['error', 'single']*/
/*eslint-env es6*/

module.exports = {

	'alphaNumeric-mini': {

		_meta: {
			"default": { keySet: 'default', text: 'abc'},
			"alpha": { keySet: 'default', text: 'Abc'},
			"shift": { keySet: 'shifted', text: 'ABC'},
			"numbers": { keySet: 'numbers', text: '123'},
			"space": { key: ' ', text: 'Space', classes: 'space'},
			"backspace": { func: 'backspace', classes: 'fa fa-arrow-left'},
			"accept": { func: 'accept', text: 'Accept', classes: 'featured'},
			"cancel": { func: 'cancel', text: 'Close'}
		},

		default: [
			['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
			['', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ''],
			['{shift}', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.'],
			['{numbers}', '-', '{space}', '{backspace}', '{accept}', '{cancel}']
		],

		shifted: [
			['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
			['', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',''],
			['{default}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ','],
			['{numbers}', '_', '{space}', '{backspace}', '{accept}', '{cancel}']
		],

		numbers: [
			['1', '2', '3'],
			['4', '5', '6'],
			['7', '8', '9'],
			['', '', '{alpha}', '.', { key: '0', classes: 'zero'}, '{backspace}', '{accept}', '{cancel}']
		]
	},

	'numeric': {

		_meta: {
			"backspace": { func: 'backspace', classes: 'fa fa-arrow-left'},
			"accept": { func: 'accept', text: 'Accept', classes: 'featured'},
			"cancel": { func: 'cancel', text: 'Close'}
		},

		default: [
			['1', '2', '3'],
			['4', '5', '6'],
			['7', '8', '9'],
			['_', '-', '.', { key: '0', classes: 'zero'}, '{backspace}', '{accept}', '{cancel}']
		]
	},

	'alphaNumeric-full': {

		_meta: {
			"shift": { keySet: 'shifted', text: 'Shift'},
			"caps": { keySet: 'capsed', text: 'Caps Lock'},
			"space": { key: ' ', text: 'Space', classes: 'space'},
			"backspace": { func: 'backspace', classes: 'fa fa-arrow-left'},
			"accept": { func: 'accept', text: 'Accept', classes: 'featured'},
			"cancel": { func: 'cancel', text: 'Close'}
		},

		default: [
			['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '{backspace}'],
			[{ key: '\t', text: 'Tab'}, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
			['{caps}', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
			['{shift}', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '{shift}'],
			['{space}']
		],
		shifted: [
			['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{backspace}'],
			['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
			['{caps}', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
			['{shift}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '{shift}'],
			['{space}']
		],
		
		capsed: [
			['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '{backspace}'],
			['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
			['{caps}', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
			['{shift}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '{shift}'], 
			['{space}']
		]		
	}

};