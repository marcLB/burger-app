import template from './burger.component.html'
import css from './burger.component.css'



class controller {

    $onChanges () {
        this.toppings = angular.copy(this.toppings);
    }
}

export let BurgerComponent = {
    template,
    controller,
    bindings: {
        toppings: '<'
    }
}