import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import Collection from "@ckeditor/ckeditor5-utils/src/collection";
import Model from "@ckeditor/ckeditor5-ui/src/model";

import {addListToDropdown, createDropdown,} from "@ckeditor/ckeditor5-ui/src/dropdown/utils";

export default class Tokens5ui extends Plugin {
  init() {
    const editor = this.editor;
    const t = editor.t;

    // each select item should be an array with 3 values: [text, value, tooltip]
    const tokensArrays = editor.config.get("tokens5Props.values") || [];

    // The "tokens" dropdown must be registered among UI components of the editor
    // to be displayed in the toolbar.
    editor.ui.componentFactory.add("tokens5", locale => {
      const dropdownView = createDropdown(locale);

      // Populate the list in the dropdown with items.
      addListToDropdown(
          dropdownView,
          getDropdownItemsDefinitions(tokensArrays),
      );

      dropdownView.buttonView.set({
        label: editor.config.get("tokens5Props.label") || t("Tokens"),
        tooltip: editor.config.get("tokens5Props.tooltip") ||  t("Insert a token"),
        withText: true,
      });

      // Execute the command when the dropdown items is clicked (executed).
      this.listenTo(dropdownView, "execute", evt => {
        // Insert value into editor text.
        editor.editing.view.focus();
        const viewFragment = this.editor.data.processor.toView(`<span>${evt.source.commandParam}</span>`);
        const modelFragment = this.editor.data.toModel(viewFragment);
        this.editor.model.insertContent(modelFragment);
      });

      return dropdownView;
    });
  }
}

function getDropdownItemsDefinitions(tokensArrays) {
  const itemDefinitions = new Collection();

  for (const valueArr of tokensArrays) {
    const definition = {
      type: "button",
      model: new Model({
        commandParam: valueArr[1],
        label: valueArr[0],
        withText: true,
        tooltip: valueArr[2]
      }),
    };

    // Add the item definition to the collection.
    itemDefinitions.add(definition);
  }

  return itemDefinitions;
}
