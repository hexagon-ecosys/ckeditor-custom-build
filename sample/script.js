

const fontFamilyConfig = {
	options: [
		'default0',
		'Chicken Gonzalas',
		'Fira Sans',
		'Courier New, Courier, monospace',
		'Georgia, serif',
		'Lucida Sans Unicode, Lucida Grande, sans-serif',
		'Tahoma, Geneva, sans-serif',
		'Times New Roman, Times, serif',
		'Trebuchet MS, Helvetica, sans-serif',
		'Verdana, Geneva, sans-serif'
	]
};


ClassicEcosysEditor
	.create( document.querySelector( '.editor' ), {
		// Editor configuration.
		fontFamily: fontFamilyConfig,
		tokens5Props: {
			label: "Variable",
			tooltip: "Insert a variable",
			values: [
					 ["[First Name]", "[First Name]", "The first name"],
					 ["[Date]", "[Date]", "The date"],
					 ["[Taco]", "[Taco]", "The taco" ],
				     ["[Burrito]", "[Burrito]", "The burrito"]
			],
		},
		fontSize: {
            options: [
                9,
                11,
                13,
                'default',
                17,
                19,
                21
            ]
        },
		toolbar: {
			items: [
					'undo',
					'redo',
					'|',
					'bold',
					'italic',
					'underline',
					'|',
					'fontFamily',
					'fontSize',
					'fontColor',
					'fontBackgroundColor',
					'|',
					'link',
					'insertImage',
					'tokens5'
				]
		},
		// ResizableHeight: {
		// 		resize: false,
		// 		height: '500px',
		// 		minHeight: '100px',
		// 		maxHeight: '1000px'
		// 	},
		image: {
            toolbar: [
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:wrapText',
				'|',
				'toggleImageCaption'
			]
        }
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( handleSampleError );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "b94nfg442hl-7qky694vm55o" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
