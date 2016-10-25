/*eslint quotes: ['error', 'single']*/
/*eslint-env es6*/

module.exports = {

	'normal': {

		_meta: {
			"tab": { key: '\t', text: 'Tab', width: 60},
			"shiftl": { keySet: 'shifted', text: 'Shift', width: 50},
			"shiftr": { keySet: 'shifted', text: 'Shift', width: 80},
			"caps": { keySet: 'capsed', text: 'Caps lock', width: 80},
			"space": { key: ' ', text: 'Space', width: 180},
			"enter": { key: '\r\n', text: 'Enter', width: 80},
			"backspace": { func: 'backspace', classes: 'fa fa-arrow-left'},
			"accept": { func: 'accept', text: 'Accept', classes: 'featured'},
			"cancel": { func: 'cancel', text: 'Close'}
		},

		default: [
			['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '{backspace}'],
			['{tab}', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
			['{caps}', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '{enter}'],
			['{shiftl}', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '{shiftr}'],
			['{space}', '{accept}', '{cancel}']
		],
		shifted: [
			['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{backspace}'],
			['{tab}', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
			['{caps}', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '{enter}'],
			['{shiftl}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '{shiftr}'],
			['{space}', '{accept}', '{cancel}']
		],
		
		capsed: [
			['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '{backspace}'],
			['{tab}', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
			['{caps}', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '{enter}'],
			['{shiftl}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '{shiftr}'], 
			['{space}', '{accept}', '{cancel}']
		]		
	},

	'mini': {

		_meta: {
			"default": { keySet: 'default', text: 'abc'},
			"alpha": { keySet: 'default', text: 'Abc'},
			"shift": { keySet: 'shifted', text: 'ABC'},
			"numbers": { keySet: 'numbers', text: '123'},
			"space": { key: ' ', text: 'Space', width: 180},
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
			"cancel": { func: 'cancel', text: 'Close'},
			"zero": { key: '0', width: 130}
		},

		default: [
			['1', '2', '3'],
			['4', '5', '6'],
			['7', '8', '9'],
			['_', '-', '.', '{zero}', '{backspace}', '{accept}', '{cancel}']
		]
	}

};