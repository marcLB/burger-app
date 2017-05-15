export class TabsController {
  constructor () {
    this.tabs = [
      { title: 'Burgers', template: 'burgers' },
      { title: 'Play', template: 'gamef' }
    ]

    this.tab = 0
  }

  changeTab (tab) {
    this.tab = tab
  }

  navigateTab (direction) {
    this.tab = (this.tabs.length + this.tab + direction) % this.tabs.length
  }

  getTemplate (tab) {
    return `views/${tab.template}.html`
  }
}