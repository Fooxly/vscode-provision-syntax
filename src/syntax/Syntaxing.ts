import { window, OverviewRulerLane } from 'vscode'
import Provision from '../core/src/Provision'

export default class Syntaxing extends Provision {

  private styling: any = {}

  public onUpdate(data: any) {
    if(!window.activeTextEditor) return
    let syntax = this.settings.get<any>('syntax', [])
    let groups: any = {}

    for(let s of syntax) {
      groups[s.keyword] = {
        settings: this.getStyling(s),
        items: []
      }
    }

    for(let group of data) {
      for(let i of group.items) {
        let s = syntax.find((e: any) => { return e.keyword === i.keyword })
        if(!s || !groups[s.keyword]) continue
        groups[s.keyword].items.push(i.range)
      }
    }
    for(let g in groups) {
      window.activeTextEditor.setDecorations(groups[g].settings, groups[g].items)
    }
  }

  private getStyling(syntax: any): any {
    if(this.styling[syntax.keyword]) return this.styling[syntax.keyword]
    return this.styling[syntax.keyword] = window.createTextEditorDecorationType({
      backgroundColor: syntax.backgroundColor,
      isWholeLine: syntax.highlight === 'line',
      color: syntax.color,
      overviewRulerLane: this.getRulerLane(syntax.rulerPlacement),
      overviewRulerColor: syntax.rulerColor
    })
  }

  private getRulerLane(lane: string): OverviewRulerLane | undefined {
    switch(lane) {
      case 'left': {
        return OverviewRulerLane.Left
      }
      case 'right': {
        return OverviewRulerLane.Right
      }
      case 'center': {
        return OverviewRulerLane.Center
      }
      case 'full': {
        return OverviewRulerLane.Full
      }
      default: {
        return
      }
    }
  }

  public configChanged() {
    super.configChanged()
    this.styling = {}
  }
}