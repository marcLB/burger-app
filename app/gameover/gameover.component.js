import template from './gameover.component.html'

class controller {

    constructor ($location) {
        this.$location=$location
    }

    play () {
        this.$location.path('/play')
    }
}

export let GameoverComponent = {
    template,
    controller,
    bindings: { }
}
