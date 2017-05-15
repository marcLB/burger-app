import { uniq } from 'lodash'

export class BurgersController {
  constructor (BurgerService) {
    this.burgers = []
    this.BurgerService=BurgerService  
    BurgerService.getBurgers()
    .then(burgers => this.burgers = burgers)
    .catch(err => {
      console.log('ERR dans BurgersController')
    })

    this.col = 'name'
    this.desc = false
   this.fetchBurgers()
  }

  fetchBurgers() {
    this.BurgerService.getBurgers()
    .then(burgers => this.burgers = burgers)
  }

  getToppings () {
    return uniq(this.burgers
    .reduce((acc, {toppings}) => [...acc, ...toppings], []))
  }

  sortBy (col) {
    if (this.col !== col) this.desc = false
    else this.desc = !this.desc
    this.col = col
  }

  applySort (burger) {
    if (this.col === 'name') return burger.name
    if (this.col === 'toppings') return burger.toppings.length
  }

  deleteBurger(burger){
    this.BurgerService.delete(burger)
    .then(() => this.fetchBurgers())
  }
    
}