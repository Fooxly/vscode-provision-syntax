<h1 align="center">
  <p align="center">
    <a title="Provision" href="https://marketplace.visualstudio.com/items?itemName=fooxly.provision-syntax">
      <img src="https://www.fooxly.com/readme/provision.png" alt="Provision" height="150" />
    </a>
  </p>
  <p>Provision: Syntax</p>
  <p style="color: #A2A2A2; font-size: 18px;">The best way to keep your notes organized</p>
  <br>
  <p style="color: #3366BB; font-size: 14px; font-weight: normal;">
    <a href="https://marketplace.visualstudio.com/items?itemName=fooxly.provision">Provision Bundle</a>&nbsp;&nbsp;&nbsp;
    <a href="https://marketplace.visualstudio.com/items?itemName=fooxly.provision-lens">Provision: Lens</a>&nbsp;&nbsp;&nbsp;
    <a href="https://marketplace.visualstudio.com/items?itemName=fooxly.provision-bar">Provision: Bar</a>&nbsp;&nbsp;&nbsp;
    <a href="https://marketplace.visualstudio.com/items?itemName=fooxly.provision-syntax">Provision: Syntax</a>
  </p>

  [![Version](https://vsmarketplacebadge.apphb.com/version-short/fooxly.provision-syntax.svg)](https://marketplace.visualstudio.com/items?itemName=fooxly.provision-syntax)
  [![Installs](https://vsmarketplacebadge.apphb.com/installs-short/fooxly.provision-syntax.svg)](https://marketplace.visualstudio.com/items?itemName=fooxly.provision-syntax)
  [![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/fooxly.provision-syntax.svg)](https://marketplace.visualstudio.com/items?itemName=fooxly.provision-syntax)
  [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
  ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
</h1>

<br />

```sh
ext install fooxly.provision-syntax
```

## What's new in Provision: Syntax 3

* Even quicker load and response times 🚀
* Easier configuration

## Support us &nbsp;❤

<p>
  <a title="BuyMeACoffee" href="https://www.buymeacoffee.com/fooxly">
    <img src="https://www.fooxly.com/readme/buymeacoffee.png" alt="BuyMeACoffee" width="25%" style="max-width: 180px" />
  </a>&nbsp;&nbsp;
  <a title="Patreon" href="https://www.patreon.com/fooxly">
    <img src="https://www.fooxly.com/readme/patreon.png" alt="Patreon" width="25%" style="max-width: 180px"/>
  </a>&nbsp;&nbsp;
  <a title="PayPal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3GEYSYZFXV9GE">
    <img src="https://www.fooxly.com/readme/paypal.png" alt="PayPal" width="25%" style="max-width: 180px" />
  </a>
</p>

<br/>

# Provision: Syntax

> A package by [Fooxly](https://www.fooxly.com).

**Provision: Syntax** is an **easy to use** and **highly customizable** keyword highlighter
to view the notes you or others in your team have left.

## 📐 &nbsp;Features

* Create custom keywords with plenty of customization options
* Group keywords together
* Show pop-ups with every note inside a file
* Jump directly to a note

## 📙 &nbsp;How to use

Check out our [Getting Started]("https://packages.fooxly.com/provision/manual") guide or use `Help: Provision` for more information.

## 📕 &nbsp;Commands

* `Help: Provision` Instructions on how to create a new keyword or group
* `Provision: List` Show all notes in the current file
* `Provision: Toggle Syntax` Toggle the highlighter on and off

## ⚙️ &nbsp;Available Settings

* `provision.moveOnSingle`: Jump instantly to a note when there are no others inside the file/class/function (`true` by default)

  ```json
  "provision.moveOnSingle": <true|false>
  ```

* `provision.popup.sorting`: Sorting method used to order the pop-up items (`"line_numbers_asc"` by default)

  ```json
  "provision.popup.sorting": <"line_numbers_asc"|"line_numbers_asc"|"category">
  ```

* `provision.keywords`: Keywords to look for with a specific configuration

  ```json
  "provision.keywords": {
    "NOTE": {
      "keyword": <"string">,
      "caseSensitive": <true|false>,
      "includesColon": <true|false>,
      "backgroundColor": <"color value">,
      "rulerPlacement": <"left"|"center"|"right"|"full"|"off">,
      "rulerColor": <"color value">,
      "highlight": <"keyword"|"line">
    }
  }]
  ```

  * `keyword` *(optional)*: If the keyword needs to be different from the keywords object key, if it is not set the keywords object key will be used.
  * `caseSensitive` *(optional)*: Whether or not the keyword needs to be case sensitive. (`true` by default)
  * `includesColon` *(optional)*: Whether or not the keyword is only valid with a colon sign suffix. (`true` by default)
  * `backgroundColor`: Background color when highlighted
  * `rulerPlacement`: The placement in the ruler
  * `rulerColor`: Color in overview ruler
  * `highlight`: Type of highlighting (`keyword` by default)

## License

[MIT](LICENSE) &copy; Fooxly
