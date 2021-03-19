module.exports = {
	"normal": {
		_meta: {
			"tab": { key: "\t", text: "Tab", width: 60, classes: "control"},
			"shiftl": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"shiftr": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"caps": { keySet: "capsed", text: "Caps lock", width: 80, classes: "control"},
			"space": { key: " ", text: "Space", width: 180},
			"enter": { func: "enter", key: "\r\n", text: "Enter", width: 80, classes: "control"},
			"backspace": { func: "backspace", classes: "control backspace", width: 65},
			"accept": { func: "accept", text: "Close", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "control featured"}
		},
		default: [
			"` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} q w e r t y u i o p [ ] \\",
			"{caps} a s d f g h j k l ; ' {enter}",
			"{shiftl} z x c v b n m , . / {shiftr}",
			"{next} {space} {accept}"
		],
		default_next_off: [
			"` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} q w e r t y u i o p [ ] \\",
			"{caps} a s d f g h j k l ; ' {enter}",
			"{shiftl} z x c v b n m , . / {shiftr}",
			"{space} {accept}"
		],
		default_ru: [
			"` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} й ц у к е н г ш щ з х ъ \\",
			"{caps} ф ы в а п р о л д ж э {enter}",
			"{shiftl} я ч с м и т ь б ю . {shiftr}",
			"{next} {space} {accept}"
		],
		shifted: [
			"~ ! @ # $ % ^ & * ( ) _ + {backspace}",
			"{tab} Q W E R T Y U I O P { } |",
			"{caps} A S D F G H J K L : \" {enter}",
			"{shiftl} Z X C V B N M < > ? {shiftr}",
			"{next} {space} {accept}"
		],
		shifted_ru: [
			"Ё ! \" № ; % : ? * ( ) _ + {backspace}",
			"{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ |",
			"{caps} Ф Ы В А П Р О Л Д Ж Э {enter}",
			"{shiftl} Я Ч С М И Т Ь Б Ю , {shiftr}",
			"{next} {space} {accept}"
		],
		capsed: [
			"` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} Q W E R T Y U I O P [ ] \\",
			"{caps} A S D F G H J K L ; ' {enter}",
			"{shiftl} Z X C V B N M , . / {shiftr}", 
			"{next} {space} {accept}"
		],
		capsed_ru: [
			"Ё 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ \\",
			"{caps} Ф Ы В А П Р О Л Д Ж Э {enter}",
			"{shiftl} Я Ч С М И Т Ь Б Ю . {shiftr}", 
			"{next} {space} {accept}"
		]		
	},
	"normal_next_off": {
		_meta: {
			"tab": { key: "\t", text: "Tab", width: 60, classes: "control"},
			"shiftl": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"shiftr": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
			"caps": { keySet: "capsed", text: "Caps lock", width: 80, classes: "control"},
			"space": { key: " ", text: "Space", width: 180},
			"enter": { func: "enter", key: "\r\n", text: "Enter", width: 80, classes: "control"},
			"backspace": { func: "backspace", classes: "control backspace", width: 65},
			"accept": { func: "accept", text: "Close", classes: "control featured"},
		},
		default: [
			"` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} q w e r t y u i o p [ ] \\",
			"{caps} a s d f g h j k l ; ' {enter}",
			"{shiftl} z x c v b n m , . / {shiftr}",
			"{space} {accept}"
		],
		default_ru: [
			"` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} й ц у к е н г ш щ з х ъ \\",
			"{caps} ф ы в а п р о л д ж э {enter}",
			"{shiftl} я ч с м и т ь б ю . {shiftr}",
			"{space} {accept}"
		],
		shifted: [
			"~ ! @ # $ % ^ & * ( ) _ + {backspace}",
			"{tab} Q W E R T Y U I O P { } |",
			"{caps} A S D F G H J K L : \" {enter}",
			"{shiftl} Z X C V B N M < > ? {shiftr}",
			"{space} {accept}"
		],
		shifted_ru: [
			"Ё ! \" № ; % : ? * ( ) _ + {backspace}",
			"{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ |",
			"{caps} Ф Ы В А П Р О Л Д Ж Э {enter}",
			"{shiftl} Я Ч С М И Т Ь Б Ю , {shiftr}",
			"{space} {accept}"
		],
		capsed: [
			"` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} Q W E R T Y U I O P [ ] \\",
			"{caps} A S D F G H J K L ; ' {enter}",
			"{shiftl} Z X C V B N M , . / {shiftr}", 
			"{space} {accept}"
		],
		capsed_ru: [
			"Ё 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ \\",
			"{caps} Ф Ы В А П Р О Л Д Ж Э {enter}",
			"{shiftl} Я Ч С М И Т Ь Б Ю . {shiftr}", 
			"{space} {accept}"
		]		
	},
	"compact": {
		_meta: {
			"default": { keySet: "default", text: "abc", classes: "control"},
			"alpha": { keySet: "default", text: "Abc", classes: "control"},
			"shift": { keySet: "shifted", text: "ABC", classes: "control"},
			"numbers": { keySet: "numbers", text: "123", classes: "control"},
			"space": { key: " ", text: "Space", width: 200},
			"backspace": { func: "backspace", classes: "control"},
			"accept": { func: "accept", text: "Close", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "featured"},
			"zero": { key: "0", width: 130}
		},
		default: [
			"q w e r t y u i o p",
			" a s d f g h j k l ",
			"{shift} z x c v b n m {backspace}",
			"{numbers} , {space} . {next} {accept}"
		],
		default_ru: [
			"й ц у к е н г ш щ з",
			" ф ы в а п р о л д ",
			"{shift} я ч с м и т ь {backspace}",
			"{numbers} , {space} . {next} {accept}"
		],
		shifted: [
			"Q W E R T Y U I O P",
			" A S D F G H J K L ",
			"{default} Z X C V B N M ",
			"{numbers} _ {space} {backspace} {next} {accept}"
		],
		shifted_ru: [
			"Й Ц У К Е Y U I O P",
			" Ф Ы В А П Р О Л Д ",
			"{default} Я Ч С М И Т Ь ",
			"{numbers} _ {space} {backspace} {next} {accept}"
		],

		numbers: [
			"1 2 3",
			"4 5 6",
			"7 8 9",
			"  {alpha} . {zero} {backspace} {next} {accept}"
		]
	},
	"compact_next_off": {
		_meta: {
			"default": { keySet: "default", text: "abc", classes: "control"},
			"alpha": { keySet: "default", text: "Abc", classes: "control"},
			"shift": { keySet: "shifted", text: "ABC", classes: "control"},
			"numbers": { keySet: "numbers", text: "123", classes: "control"},
			"space": { key: " ", text: "Space", width: 200},
			"backspace": { func: "backspace", classes: "control"},
			"accept": { func: "accept", text: "Close", classes: "control featured"},
			"zero": { key: "0", width: 130}
		},
		default: [
			"q w e r t y u i o p",
			" a s d f g h j k l ",
			"{shift} z x c v b n m {backspace}",
			"{numbers} , {space} . {accept}"
		],
		default_ru: [
			"й ц у к е н г ш щ з",
			" ф ы в а п р о л д ",
			"{shift} я ч с м и т ь {backspace}",
			"{numbers} , {space} . {accept}"
		],
		shifted: [
			"Q W E R T Y U I O P",
			" A S D F G H J K L ",
			"{default} Z X C V B N M ",
			"{numbers} _ {space} {backspace} {accept}"
		],
		shifted_ru: [
			"Й Ц У К Е Y U I O P",
			" Ф Ы В А П Р О Л Д ",
			"{default} Я Ч С М И Т Ь ",
			"{numbers} _ {space} {backspace} {accept}"
		],
		numbers: [
			"1 2 3",
			"4 5 6",
			"7 8 9",
			"  {alpha} . {zero} {backspace} {accept}"
		]
	},
	"numeric": {
		_meta: {
			"backspace": { func: "backspace", classes: "control"},
			"accept": { func: "accept", text: "Close", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "control featured"},
			"zero": { key: "0", width: 130}
		},
		default: [
			"1 2 3",
			"4 5 6",
			"7 8 9",
			"_ - . {zero} {backspace} {next} {accept}"
		]
	},
	"numeric_next_off": {
		_meta: {
			"backspace": { func: "backspace", classes: "control"},
			"accept": { func: "accept", text: "Close", classes: "control featured"},
			"zero": { key: "0", width: 130}
		},
		default: [
			"1 2 3",
			"4 5 6",
			"7 8 9",
			"_ - . {zero} {backspace} {accept}"
		]
	}
};