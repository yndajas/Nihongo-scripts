# Nihongo scripts

Scripts to extend Japanese language learning sites like WaniKani and Bunpro

## Features

### Bunpro

#### Toggle Tense Tip

####

[Greasy Fork release page](https://greasyfork.org/en/scripts/435322-bunpro-toggle-tense-tip)

Automatically hides the tense tip on review and cram pages - press spacebar to toggle.

Built on top of [Kumirei](https://github.com/Kumirei)'s [Helpful Events](https://github.com/Kumirei/Userscripts/tree/main/Bunpro/Helpful%20Events) and [Wait For Selector](https://github.com/Kumirei/Userscripts/tree/main/Other%20Websites/None/Wait%20For%20Selector). Draft toggle logic contributed by [memosiki](https://github.com/memosiki).

### WaniKani

#### Regular Font Guru+

[Greasy Fork release page](https://greasyfork.org/en/scripts/458180-wanikani-regular-font-guru)

When reviewing items at guru level or higher, the font size is reduced to that of WaniKani's body text (14px)

The purpose of this script is to give you more practice reading Japanese in a font size you're more likely to find in the wild. We typically don't read much text at the huge font size of items in WaniKani's reviews, so this brings it down to the standard size of WaniKani's body text (14px or 0.875rem).

You can change the size by editing either `waniKaniBodyFontSizeRem` with a size in rem or `font-size: ${waniKaniBodyFontSizeRem}rem;` - just change the `${waniKaniBodyFontSizeRem}rem` part to whatever size and unit you prefer.

More information on why can be found on the release page, as well as the [WaniKani forum post](https://community.wanikani.com/t/userscript-regular-font-guru/60128), which also contains before and after screenshots.

#### Wrap-up Button Enhancement (Tofurky fork)

[Greasy Fork release page](https://greasyfork.org/en/scripts/435324-wanikani-wrap-up-button-enhancement-tofurky-fork)

Allows custom wrap-up queue length (this fork: working backspace; enter/return to start wrap-up).

Built on top of [Inserio](https://greasyfork.org/en/users/11878-inserio)'s [update](https://greasyfork.org/en/scripts/389387-wanikani-wrap-up-button-enhancement) to [Mempo](https://greasyfork.org/en/users/13665-mempo)'s [original script](https://greasyfork.org/en/scripts/24928-wanikani-wrap-up-button-enhancement).

Differences from Inserio's version:

- **backspace** works
- **enter/return** immediately starts wrap-up with the specified queue length and return to the answer input
- **up/down** are no longer on-screen buttons<sup>*</sup>, but the up/down keys offer the same functionality

If your preference is for on-screen up/down buttons over backspace and enter/return functionality, I'd recommend installing Inserio's version (linked above), which will hopefully also fix backspace soon!

<sup>*</sup> the workaround to get a working backspace involves changing the input type from number to text, which removes these buttons

#### Lesson/review Explanation Width

[Stylish release page](https://userstyles.org/styles/257533/wanikani-lesson-review-explanation-width)

This is actually a stylesheet, but I didn't want to make an entirely new repo just for one stylesheet.

This limits the width of the meaning/reading explanations and context sentences on lessons and reviews to 600px (or more precisely 37.5rem), making them a little easier to read.

More information on why can be found on the release page, as well as the [WaniKani forum post](https://community.wanikani.com/t/userstyleuserscript-lessonreview-info-panel-width/60116), which also contains before and after screenshots.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net) or some other userscript manager browser extension
2. Open the Greasy Fork release page linked in the relevant script
3. Click "Install this script", then "Install" if using Tampermonkey

If the expected behaviour is not immediately in effect, try a hard refresh (on Windows: Ctrl + Shift + R or Ctrl + F5).

**Note:** the Lesson/review Info Panel Width stylesheet is an exception to these instructions should be installed from the release page

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/yndajas/Nihongo-scripts](https://github.com/yndajas/Nihongo-scripts).

## Licence

This app is made available open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
