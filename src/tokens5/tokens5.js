import Plugin from "@ckeditor/ckeditor5-core/src/plugin";

import Tokens5ui from "./tokens5ui";

export default class Tokens5 extends Plugin {
  static get requires() {
    return [Tokens5ui];
  }
}
