import angular from 'angular'
import RouteModule from 'angular-route'
import 'bootstrap/dist/css/bootstrap.css'

import { BurgerService } from './old/burger.service'
import { ToppingService } from './old/topping.service'

import { GameComponent } from './game/game.component'
import { GameoverComponent } from './gameover/gameover.component'
import { ToppingsComponent } from './toppings/toppings.component'
import { BurgerComponent } from './burger/burger.component'
import { RecipeComponent } from './recipe/recipe.component'
import { CountdownComponent } from './countdown/countdown.component'
import { routes } from './routes.config'


// Création du module app (application)
angular.module('app', [
    RouteModule
])


.component('dtaGame', GameComponent)
.component('dtaGameover', GameoverComponent)
.component('dtaToppings', ToppingsComponent)
.component('dtaBurger', BurgerComponent)
.component('dtaRecipe', RecipeComponent)
.component('dtaCountdown', CountdownComponent)

.service('BurgerService', BurgerService)
.service('ToppingService', ToppingService)
.config(routes)
