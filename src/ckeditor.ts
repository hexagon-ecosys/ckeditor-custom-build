/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import {ClassicEditor} from '@ckeditor/ckeditor5-editor-classic';

import {Bold, Italic, Underline} from '@ckeditor/ckeditor5-basic-styles';
import type {EditorConfig} from '@ckeditor/ckeditor5-core';
import {Essentials} from '@ckeditor/ckeditor5-essentials';
import {FontBackgroundColor, FontColor, FontFamily, FontSize} from '@ckeditor/ckeditor5-font';
import {
	AutoImage,
	ImageBlock,
	ImageBlockEditing,
	ImageCaption,
	ImageEditing,
	ImageInline,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageToolbar
} from '@ckeditor/ckeditor5-image';
import {Link, LinkImage, LinkImageEditing} from '@ckeditor/ckeditor5-link';
import {Paragraph} from '@ckeditor/ckeditor5-paragraph';
import {Undo} from '@ckeditor/ckeditor5-undo';
import Tokens5 from './tokens5';
import ImageInlineEditing from '@ckeditor/ckeditor5-image/src/image/imageinlineediting';
import { Alignment } from '@ckeditor/ckeditor5-alignment';


// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.


class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Bold,
		Essentials,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		ImageInline,
		ImageInlineEditing,
		ImageBlock,
		ImageBlockEditing,
		ImageStyle,
		ImageInsertViaUrl,
		ImageToolbar,
		ImageEditing,
		ImageResize,
		ImageCaption,
		AutoImage,
		Italic,
		Link,
		LinkImage,
		LinkImageEditing,
		Paragraph,
		Underline,
		Undo,
		Alignment,
		Tokens5
	];


	public static override defaultConfig: EditorConfig = {
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
		language: 'en'
	};
}

export default Editor;
