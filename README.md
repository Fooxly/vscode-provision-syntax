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
* **Jump** between notes by using the context menu or commands
* **View** all of your notes in a long and complex file in just seconds

## 📐 Configuration

### Config

You can customize your keywords and lots of other stuff in your `settings.json` using the following options:

| property                             | type      | default               | options                                                  | description |
| ---                                  | ---       | ---                   | ---                                                      | ----        |
| provision.notes                      | object    | *check below*         | [notes](#Notes)                                          | Object with keywords and settings to use |

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
