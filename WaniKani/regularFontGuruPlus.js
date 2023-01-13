// ==UserScript==
// @name         WaniKani Regular Font Guru+
// @namespace    https://www.wanikani.com
// @version      1.0.1
// @description  When reviewing items at guru level or higher, the font size is reduced to that of WaniKani's body text (14px)
// @author       yndajas (they)
// @license      MIT
// @match        https://www.wanikani.com/review/session
// @grant        none
// ==/UserScript==

(function ($) {
  'use strict'

  // create style for Guru+ items

  const originalFontSizeEm = 6.125
  const waniKaniBodyFontSizeRem = 0.875
  const originalHeightEm = 3.21
  const originalHeighRem = originalFontSizeEm * originalHeightEm

  const css =
    'div#question div#character.guru-plus {' +
    `  font-size: ${waniKaniBodyFontSizeRem}rem;` +
    `  line-height: ${originalHeighRem}rem;` +
    `  height: ${originalHeighRem}rem;` +
    '}'

  const head = document.getElementsByTagName('head')[0]

  if (head) {
    const style = document.createElement('style')

    style.setAttribute('type', 'text/css')
    style.textContent = css
    head.appendChild(style)
  }

  // listen for changes to item and apply style if SRS level is Guru+

  const itemElement = document.getElementById('character')
  const guruPlusClass = 'guru-plus'
  const guruSrsLevel = 5

  $.jStorage.listenKeyChange('currentItem', () => {
    const srsLevel = $.jStorage.get('currentItem').srs
    const classActive = itemElement.classList.contains(guruPlusClass)

    if (srsLevel >= guruSrsLevel && !classActive) {
      itemElement.classList.add(guruPlusClass)
    }

    if (srsLevel < guruSrsLevel && classActive) {
      itemElement.classList.remove(guruPlusClass)
    }
  })
})(window.jQuery)