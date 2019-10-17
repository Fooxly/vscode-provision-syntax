import { commands, window, OverviewRulerLane, TextEditorDecorationType } from 'vscode'
import Main from '../core/Main'
import BaseCommands from '../core/BaseCommands'
import Document from '../core/document'
import { DocumentListener } from '../core/document/DocumentListener'
import Utils from '../core/Utils'

export default class Hub extends Main implements DocumentListener {
  public document?: Document
  private styling: Map<string, TextEditorDecorationType> = new Map<string, TextEditorDecorationType>()
  private timeout?: NodeJS.Timeout
  private data?: any

  protected initialize() {
    this.document = new Document(this)
    this.document.addListener(this)

    // Provision wide commands
    commands.getCommands().then(e => {
      if(e.indexOf('provision.help') === -1) {
        this.registerCommand('provision.help', args => BaseCommands.Help(this, args), false)
        this.registerCommand('provision.list', () => BaseCommands.List(this, this.data), false)
      }
    })
  }

  protected configChanged() {
    if(this.styling) {
      this.styling.forEach(i => i.dispose())
      this.styling.clear()
    }
  }

  protected dispose() {
    if(this.styling) {
      this.styling.forEach(i => i.dispose())
      this.styling.clear()
    }
  }

  public update(data?: any) {
    this.data = data
    this.timeout && clearTimeout(this.timeout)
    this.timeout = setTimeout(() => this.updateDecorations(data), 0)
  }

  public detailedUpdate(data?: any)  { }

  private updateDecorations(data?: any) {
    if(data && window.activeTextEditor) {
      for(let group in data) {
        let categorized: any = {}
        for(let i of data[group].items) {
          if(!categorized[i.keyword]) categorized[i.keyword] = []
          categorized[i.keyword].push(i)
        }
        for(let c in categorized) {
          let s = this.getStyling(c)
          if(s) {
            window.activeTextEditor.setDecorations(s, categorized[c])
          }
        }
      }
    }
  }

  private getStyling(keyword: string): TextEditorDecorationType | undefined {
    if(this.styling.has(keyword)) {
      let s = this.styling.get(keyword)
      if(s) return s
    }
    let keywords: any = this.config.get('keywords', {})
    let k = keywords[keyword]
    if(!k) return
    let s = window.createTextEditorDecorationType({
      backgroundColor: k.backgroundColor,
      isWholeLine: k.highlight === 'line',
      color: k.color,
      overviewRulerLane: this.getRulerLane(k.rulerPlacement),
      overviewRulerColor: k.rulerColor
    })
    this.styling.set(keyword, s)
    return s
  }

  private getRulerLane(lane: string): OverviewRulerLane | undefined {
    switch(lane) {
      case 'left': return OverviewRulerLane.Left
      case 'right': return OverviewRulerLane.Right
      case 'center': return OverviewRulerLane.Center
      case 'full': return OverviewRulerLane.Full
    }
  }

}