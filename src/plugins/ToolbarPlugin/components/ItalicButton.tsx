import { FORMAT_TEXT_COMMAND } from 'lexical';
import React from 'react';
import { useContext } from 'react';
import { IS_APPLE } from '../../../shared/src/environment';
import EditorContext from '../../../context/EditorContext';
import ToolbarContext from '../../../context/ToolbarContext';

const ItalicButton = () => {
  const { activeEditor } = useContext(EditorContext);
  const { isItalic } = useContext(ToolbarContext);

  return (
    <button
      onClick={() => {
        activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
      }}
      className={'toolbar-item spaced ' + (isItalic ? 'active' : '')}
      title={IS_APPLE ? `Italique (⌘I)` : `Italique (Ctrl+I)`}
      aria-label={`Formatez le texte en italique. Raccourci : ${IS_APPLE ? '⌘I' : 'Ctrl+I'
        }`}
      type="button"
    >
      <i className="format italic" />
    </button>
  );
};

export default ItalicButton;
