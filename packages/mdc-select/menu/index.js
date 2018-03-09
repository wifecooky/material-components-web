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

import {MDCMenu, MDCMenuFoundation} from '@material/menu/index';

import MDCSelectMenuAdapter from './adapter';
import MDCSelectMenuFoundation from './foundation';

/**
 * @extends {MDCComponent<!MDCSelectMenuFoundation>}
 * @final
 */
class MDCSelectMenu extends MDCMenu {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);
  }

  /**
   * @param {!Element} root
   * @return {!MDCSelectMenu}
   */
  static attachTo(root) {
    return new MDCSelectMenu(root);
  }

  registerInteractionSelectionHandler(handler) {
    this.foundation_.registerInteractionSelectionHandler(handler);
  }

  registerInteractionCancelHandler(handler) {
    this.foundation_.registerInteractionCancelHandler(handler);
  }

  deregisterInteractionSelectionHandler(handler) {
    this.foundation_.deregisterInteractionSelectionHandler(handler);
  }

  deregisterInteractionCancelHandler(handler) {
    this.foundation_.deregisterInteractionCancelHandler(handler);
  }

  setMenuStylesForOpenAtIndex(index, left, top) {
    this.foundation_.setMenuStylesForOpenAtIndex(index, left, top);
  }

  /**
   * @return {!MDCSelectMenuFoundation}
   */
  getDefaultFoundation() {
    const menuDefaultAdapter = super.getDefaultFoundation().adapter_;
    return new MDCSelectMenuFoundation(Object.assign(menuDefaultAdapter,
      {
        setMenuElStyle: (propertyName, value) => this.root_.style.setProperty(propertyName, value),
        setMenuElAttr: (attr, value) => this.root_.setAttribute(attr, value),
        rmMenuElAttr: (attr) => this.root_.removeAttribute(attr),
        getMenuElOffsetHeight: () => this.root_.offsetHeight,
        getOffsetTopForOptionAtIndex: (index) => this.items[index].offsetTop,
      })
    );
  }
}

export {MDCSelectMenu, MDCSelectMenuFoundation};
