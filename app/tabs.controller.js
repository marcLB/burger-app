export class TabsController {
  constructor () {
    this.tabs = [
      { title: 'User', template: 'user' },
      { title: 'Application', template: 'application' }
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