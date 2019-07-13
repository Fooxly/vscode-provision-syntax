<p align="center">
  <a title="Learn more about the Provision Syntax" href="https://marketplace.visualstudio.com/items?itemName=fooxly.provision-syntax">
    <img src="https://github.com/Fooxly/vscode-provision-syntax/raw/master/assets/icon_banner.png" alt="Provision Syntax Logo" width="50%" />
  </a>
</p><br/><br/>

```
ext install fooxly.provision-syntax
```

[![Version](https://vsmarketplacebadge.apphb.com/version-short/fooxly.provision-syntax.svg)](https://marketplace.visualstudio.com/items?itemName=fooxly.provision-syntax)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/fooxly.provision-syntax.svg)](https://marketplace.visualstudio.com/items?itemName=fooxly.provision-syntax)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/fooxly.provision-syntax.svg)](https://marketplace.visualstudio.com/items?itemName=fooxly.provision-syntax)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

# 🚀 Recently Added

* Custom syntax highlighting options for each keyword

<p align="center">
  <img src="https://github.com/Fooxly/vscode-provision-syntax/raw/master/assets/list_sample.jpg" alt="Provision Syntax Example" />
</p>

# 🔍 Provision Syntax

The `Provision Syntax` provides a simple way to view all of your `notes` in your workspace based on keywords.

A package by [Fooxly](https://www.fooxly.com).

## 📕 Features

* Overview of the keywords provided in your settings.json

## 📐 Configuration

### Config

You can customize your keywords and lots of other stuff in your `settings.json` using the following options:

| property                             | type      | default               | options                                              | description |
| ---                                  | ---       | ---                   | ---                                                  | ----        |
| provision.syntax                     | object    | *check below*         | [syntax](#Syntax)                                    | Object with keywords and the styling settings to use |
| provision.notes                      | object    | *check below*         | [notes](#Notes)                                      | Object with keywords and settings to use |

#### Syntax

All the keywords that are defined in the `provision.notes` and which need some styling need to be in the  `provision.syntax` property. You can customize keywords using the following options:

| property        | type            | default       | options                                                                     | description |
| ---             | ---             | ---           | ---                                                                         | ---         |
| keyword         | string          | *check below* | -                                                                           | The keyword which needs to be styled |
| color           | string          | *check below* | [color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) | Text color when highlighted |
| rulerPlacement  | enum            | right         | left, center, right, full, off                                              | The placement in the ruler |
| rulerColor      | string          | *check below* | [color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) | Color in overview ruler |
| backgroundColor | string          | *check below* | [color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) | Background color when highlighted |
| highlight       | enum            | keyword       | keyword, line                                                               | Type of highlighting |

**Default**:

```json
"provision.syntax": [
  {
    "keyword": "TODO",
    "color": "#fff",
    "backgroundColor": "#f2b01f",
    "rulerPlacement": "right",
    "rulerColor": "rgba(242, 176, 31, 0.8)",
    "highlight": "keyword"
  },
  {
    "keyword": "FIXME",
    "color": "#fff",
    "backgroundColor": "#d85f88",
    "rulerPlacement": "right",
    "rulerColor": "rgba(216, 95, 136, 0.8)",
    "highlight": "keyword"
  },
  {
    "keyword": "NOTE",
    "color": "#aaa",
    "backgroundColor": "#434343",
    "rulerPlacement": "right",
    "rulerColor": "rgba(67, 67, 67, 0.8)",
    "highlight": "keyword"
  }
]
```

#### Notes

All keywords need to be defined using the `provision.notes` property. You can customize keywords using the following options:

| property        | type            | default       | options                                                                     | description |
| ---             | ---             | ---           | ---                                                                         | ---         |
| keywords        | array           | *check below* | [keywords](#Keywords)                                                       | All the keywords for the group |
| priority        | number          | *check below* | -                                                                           | The priority the statusbar item will get (higher is more important) |
| text            | object, string  | *check below* | `string` or `{ one: string, multiple: string }`                             | Text for one or multiple results |
| tooltip         | string          | *check below* | -                                                                           | Description used by tooltips |

##### Keywords
| property        | type            | default       | options                                                                     | description |
| ---             | ---             | ---           | ---                                                                         | ---         |
| keyword         | string          | *check below* | -                                                                           | The keyword that needs to be searched for |
| useColons       | boolean         | true          | true, false                                                                 | Use a `:` to define |
| caseSensitive   | boolean         | true          | true, false                                                                 | Use case sensitive detection |

**Default**:

```json
"provision.notes": [
  {
    "keywords": [
      {
        "keyword": "TODO",
        "useColons": true,
        "caseSensitive": true
      },
      {
        "keyword": "FIXME",
        "useColons": true,
        "caseSensitive": true
      }
    ],
    "priority": 10,
    "tooltip": "These are all the 'TODO' and 'FIXME' notes in this file",
    "text": {
      "one": "📝 {0} TODO",
      "multiple": "📝 {0} TODOs"
    }
  },
  {
    "keywords": [
      {
        "keyword": "NOTE",
        "useColons": true,
        "caseSensitive": true
      }
    ],
    "priority": 9,
    "tooltip": "These are all the notes in this file",
    "text": {
      "one": "📝 {0} Note",
      "multiple": "📝 {0} Notes"
    }
  }
]
```

## 🖥️ Preview

![Preview](https://github.com/Fooxly/vscode-provision-syntax/raw/master/assets/sample.gif)

## ❤️ Support our projects

You can support us by donating through [BuyMeACoffee](https://www.buymeacoffee.com/fooxly) or [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3GEYSYZFXV9GE).

[![BuyMeACoffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/fooxly)&nbsp;&nbsp;&nbsp;
[![PayPal](https://i.imgur.com/T3AmGss.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3GEYSYZFXV9GE)
