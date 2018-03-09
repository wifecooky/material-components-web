/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {MDCMenuFoundation} from '@material/menu/foundation';
import MDCSelectMenuAdapter from './adapter';
import {cssClasses} from './constants';

/**
 * @extends {MDCFoundation<!MDCSelectMenuAdapter>}
 * @final
 */
class MDCSelectMenuFoundation extends MDCMenuFoundation {

  /**
   * {@see MDCSelectMenuAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCSelectMenuAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCSelectMenuAdapter} */ (Object.assign(
      MDCMenuFoundation.defaultAdapter,
      {
        computeBoundingRect: () => /* {left: number, top: number} */ ({left: 0, top: 0}),
        setMenuElStyle: () => {},
        setMenuElAttr: () => {},
        rmMenuElAttr: () => {},
        getMenuElOffsetHeight: () => {},
        getOffsetTopForOptionAtIndex: () => {},
      })
    );
  }

  registerInteractionSelectionHandler(handler) {
    this.adapter_.registerInteractionHandler(
      MDCMenuFoundation.strings.SELECTED_EVENT, handler);
  }

  registerInteractionCancelHandler(handler) {
    this.adapter_.registerInteractionHandler(
      MDCMenuFoundation.strings.CANCEL_EVENT, handler);
  }

  deregisterInteractionSelectionHandler(handler) {
    this.adapter_.deregisterInteractionHandler(
      MDCMenuFoundation.strings.SELECTED_EVENT, handler);
  }

  deregisterInteractionCancelHandler(handler) {
    this.adapter_.deregisterInteractionHandler(
      MDCMenuFoundation.strings.CANCEL_EVENT, handler);
  }

  setMenuStylesForOpenAtIndex(index, left, top) {
    const {height} = this.adapter_.getWindowDimensions();

    this.adapter_.setMenuElAttr('aria-hidden', 'true');
    this.adapter_.setMenuElStyle('display', 'block');
    const menuHeight = this.adapter_.getMenuElOffsetHeight();
    const itemOffsetTop = this.adapter_.getOffsetTopForOptionAtIndex(index);
    this.adapter_.setMenuElStyle('display', '');
    this.adapter_.rmMenuElAttr('aria-hidden');

    let adjustedTop = top - itemOffsetTop;
    const overflowsTop = adjustedTop < 0;
    const overflowsBottom = adjustedTop + menuHeight > innerHeight;
    if (overflowsTop) {
      adjustedTop = 0;
    } else if (overflowsBottom) {
      adjustedTop = Math.max(0, innerHeight - menuHeight);
    };

    this.adapter_.setMenuElStyle('left', `${left}px`);
    this.adapter_.setMenuElStyle('top', `${adjustedTop}px`);
    this.adapter_.setMenuElStyle('transform-origin', `center ${itemOffsetTop}px`);
  }

  /**
   * @param {!MDCSelectMenuAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCSelectMenuFoundation.defaultAdapter, adapter));
  }

}

export default MDCSelectMenuFoundation;
