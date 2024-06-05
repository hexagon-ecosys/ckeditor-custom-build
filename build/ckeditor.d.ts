/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { AutoImage, ImageBlock, ImageBlockEditing, ImageCaption, ImageEditing, ImageInline, ImageInsertViaUrl, ImageResize, ImageStyle, ImageToolbar } from '@ckeditor/ckeditor5-image';
import { Link, LinkImage, LinkImageEditing } from '@ckeditor/ckeditor5-link';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Undo } from '@ckeditor/ckeditor5-undo';
import Tokens5 from './tokens5';
import ImageInlineEditing from '@ckeditor/ckeditor5-image/src/image/imageinlineediting';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Tokens5 | typeof Bold | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof ImageInline | typeof ImageInlineEditing | typeof ImageBlock | typeof ImageBlockEditing | typeof ImageStyle | typeof ImageInsertViaUrl | typeof ImageToolbar | typeof ImageEditing | typeof ImageResize | typeof ImageCaption | typeof AutoImage | typeof Italic | typeof Link | typeof LinkImage | typeof LinkImageEditing | typeof Paragraph | typeof Underline | typeof Undo | typeof Alignment)[];
    static defaultConfig: EditorConfig;
}
export default Editor;
