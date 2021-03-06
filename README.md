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

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net) or some other userscript manager browser extension
2. Open the Greasy Fork release page linked in the relevant script
3. Click "Install this script", then "Install" if using Tampermonkey

If the expected behaviour is not immediately in effect, try a hard refresh (on Windows: Ctrl + Shift + R or Ctrl + F5).

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/yndajas/Nihongo-scripts](https://github.com/yndajas/Nihongo-scripts).

## Licence

This app is made available open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
