import angular from 'angular'
import RouteModule from 'angular-route'
import 'bootstrap/dist/css/bootstrap.css'
import GravatarModule from './gravatar'

import { GravatarComponent } from './gravatar/gravatar.component'
import { BurgersController } from './burgers.controller'
import { BurgerController } from './burger.controller'
import { BurgerService } from './burger.service'
import { GameController } from './game.controller'
import { ReverseFilter } from './reverse.filter'
import { TabsController } from './tabs.controller'
import { ToppingService } from './topping.service'

// Création du module app (application)
angular.module('app', [
    RouteModule, // 'ngRoute'
    GravatarModule
])
.component('dtaGravatar', GravatarComponent)
.controller('MyController', class MyController {
    constructor () {
        this.marc = 'marc.le.boulch@hotmail.fr'
        this.thomas = 'tmoyse@gmail.com'
    }
    talk (word) {
        console.log('TALK', word)
    }
})
.controller('BurgersController', BurgersController)
.controller('BurgerController', BurgerController)
.controller('GameController', GameController)
.controller('TabsController', TabsController)

.filter('reverse', ReverseFilter)

.service('BurgerService', BurgerService)
.service('ToppingService', ToppingService)

.config(function ($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true)

    $routeProvider
    
    .when('/', {
        controller: 'BurgersController',
        templateUrl: 'views/burgers.html',
        controllerAs: '$ctrl'
    })

    .when('/game', {
        controller: 'GameController',
        templateUrl: 'views/game.html',
        controllerAs: '$ctrl'
    })

    .when('/burger/:id?', {
        controller: 'BurgerController',
        templateUrl: 'views/burger.html',
        controllerAs: '$ctrl'
    })
    .otherwise({
        redirectTo: '/'
        // template: 'PAS TROUVÉ !'
    })

})

// .run(function () {
//     console.log('RUN ANGULAR');
// })