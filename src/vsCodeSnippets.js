{
    "jQuery": {
      "prefix": "jquery",
      "body": "<script src='https://code.jquery.com/jquery-3.4.0.min.js' integrity='sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg=' crossorigin='anonymous'></script>",
      "description": "3.4.0 jQuery Snippet"
    },
    "jsonPlaccholder": {
      "prefix": "JPH",
      "body": [
        "\"https://jsonplaceholder.typicode.com\""
      ],
      "description": "jsonPlaccholder"
    },
    "docReady": {
      "prefix": "docReady",
      "body": [
        "$(document).ready(function(){",
        "",
        "});"
      ],
      "description": "docReady"
    },
    "firebaseDatabase": {
      "prefix": "firebaseDB",
      "body": "<script src='https://www.gstatic.com/firebasejs/7.4.0/firebase-database.js'></script>",
      "description": "7.4.0 JS SDK Firebase Database"
    },
  }

//   css

{
	"Border-box": {
		"prefix": "bor-box",
		"body": "* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }",
		"description": "Box Sizing Snippet"
	},
	"Normalize": {
		"prefix": "normalize",
		"body": [
			"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:700;}dfn{font-style:italic;}mark{background:#ff0;color:#000;}code,kbd,pre,samp{font-family:monospace, serif;font-size:1em;}pre{white-space:pre-wrap;word-wrap:break-word;}q{quotes:\\201C \\201D \\2018 \\2019;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-.5em;}sub{bottom:-.25em;}img{border:0;}svg:not(:root){overflow:hidden;}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em;}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;}button,input{line-height:normal;}button,html input[type=button],/* 1 */input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer;}button[disabled],input[disabled]{cursor:default;}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0;}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}body,figure{margin:0;}legend,button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}"
		],
		"description": "CSS Normalize Snippet"
	},
	"Clearfix": {
		"prefix": "clearfix",
		"body": " .clearfix:after {visibility: hidden; display: block; font-size: 0; content:''; clear: both; height: 0; } ",
		"description": "Clearfix Snippet"
	},
	"VisuallyHidden": {
		"prefix": "vhidden",
		"body": ".visuallyHidden:not(:focus):not(:active) { position: absolute; width: 1px; height: 1px; margin: -1px;border: 0;padding: 0;white-space: nowrap;clip-path: inset(100%);clip: rect(00 0 0);overflow: hidden;}",
		"description": "Visually Hidden Snippet"
	},
	"Setup": {
		"prefix": "setup",
		"body": [
			"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:700;}dfn{font-style:italic;}mark{background:#ff0;color:#000;}code,kbd,pre,samp{font-family:monospace, serif;font-size:1em;}pre{white-space:pre-wrap;word-wrap:break-word;}q{quotes:\\201C \\201D \\2018 \\2019;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-.5em;}sub{bottom:-.25em;}img{border:0;}svg:not(:root){overflow:hidden;}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em;}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;}button,input{line-height:normal;}button,html input[type=button],/* 1 */input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer;}button[disabled],input[disabled]{cursor:default;}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0;}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}body,figure{margin:0;}legend,button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}",
			"",
			".clearfix:after {visibility: hidden; display: block; font-size: 0; content: ''; clear: both; height: 0; }",
			"",
			"* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }",
			"",
			".visuallyHidden:not(:focus):not(:active) { position: absolute; width: 1px; height: 1px; margin: -1px;border: 0;padding: 0;white-space: nowrap;clip-path: inset(100%);clip: rect(00 0 0);overflow: hidden;}"
		],
		"description": "Normalize, Border-Box, Clearfix and Visually Hidden"
	},
	"Base Font Size": {
		"prefix": "base font size",
		"body": [
			"html {",
			"  font-size: 62.5%;",
			"}"
		],
		"description": "Base Font Size"
	},
	"css reset": {
		"prefix": "reset",
		"body": [
			"html, body, div, span, applet, object, iframe,",
			"h1, h2, h3, h4, h5, h6, p, blockquote, pre,",
			"a, abbr, acronym, address, big, cite, code,",
			"del, dfn, em, img, ins, kbd, q, s, samp,",
			"small, strike, strong, sub, sup, tt, var,",
			"b, u, i, center,",
			"dl, dt, dd, ol, ul, li,",
			"fieldset, form, label, legend,",
			"table, caption, tbody, tfoot, thead, tr, th, td,",
			"article, aside, canvas, details, embed, ",
			"figure, figcaption, footer, header, hgroup, ",
			"menu, nav, output, ruby, section, summary,",
			"time, mark, audio, video {",
		  "	margin: 0;",
		  "	padding: 0;",
		  "	border: 0;",
		  "	font-size: 100%;",
		  "	font: inherit;",
		  "	vertical-align: baseline;",
			"}",
			"/* HTML5 display-role reset for older browsers */",
			"article, aside, details, figcaption, figure, ",
			"footer, header, hgroup, menu, nav, section {",
		  "	display: block;",
			"}",
			"body {",
		  "	line-height: 1;",
			"}",
			"ol, ul {",
		  "	list-style: none;",
			"}",
			"blockquote, q {",
		  "	quotes: none;",
			"}",
			"blockquote:before, blockquote:after,",
			"q:before, q:after {",
		  "	content: '';",
		  "	content: none;",
			"}",
			"table {",
		  "	border-collapse: collapse;",
		  "	border-spacing: 0;",
			"}"
		],
		"description": "css reset"
	},
	"skiplink": {
		"prefix": "skiplink",
		"body": [
			".skip-link {",
			"  position: absolute;",
			"  left: -1000px;",
			"  top: 5px;",
			"  z-index: 999;",
			"  background: white;",
			"  color: black;",
			"}",
			"",
			".skip-link:focus {",
			"  left: 0;",
			"}"
		],
		"description": "skiplink"
	},
	"visually hidden": {
		"prefix": "visualHidden",
		"body": [
			".visually-hidden:not(:focus):not(:active) { ",
			"  position: absolute !important;",
			"  height: 1px; ",
			"  width: 1px;",
			"  overflow: hidden;",
			"  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */",
			"  clip: rect(1px, 1px, 1px, 1px);",
			"  white-space: nowrap; /* added line */",
			"}"
		],
		"description": "visually hidden"
	}
}