import { addUndoSnapshot } from './addUndoSnapshot';
import { attachDomEvent } from './attachDomEvent';
import { CoreApiMap } from 'roosterjs-editor-types';
import { createPasteFragment } from './createPasteFragment';
import { focus } from './focus';
import { getContent } from './getContent';
import { getDefaultFormat } from './getDefaultFormat';
import { getSelectionRange } from './getSelectionRange';
import { getStyleBasedFormatState } from './getStyleBasedFormatState';
import { hasFocus } from './hasFocus';
import { insertNode } from './insertNode';
import { restoreUndoSnapshot } from './restoreUndoSnapshot';
import { selectRange } from './selectRange';
import { setContent } from './setContent';
import { triggerEvent } from './triggerEvent';

/**
 * @internal
 */
export const coreApiMap: CoreApiMap = {
    attachDomEvent,
    getDefaultFormat,
    addUndoSnapshot,
    focus,
    getContent,
    getSelectionRange,
    getStyleBasedFormatState,
    hasFocus,
    insertNode,
    createPasteFragment,
    restoreUndoSnapshot,
    selectRange,
    setContent,
    triggerEvent,
};