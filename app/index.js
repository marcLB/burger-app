import angular from 'angular';
import css from 'bootstrap/dist/css/bootstrap.css';

import { UserController} from './user.controller';
import { ApplicationInfoController } from './application-info.controller'
import { TabsController } from './tabs.controller'
import { TotoFilter } from './toto.filter'
import { reverseFilter } from './reverse.filter'

//Création du module app application
angular.module('app', []);

//Récupérer le module app, sans créer une variable
angular.module('app')
    .config(function () {
        console.log('******* CONFIG ANGULAR *******')
    })
    .run(function () {
        console.log('******* RUN ANGULAR *******')
    })
    .controller('UserController', UserController)
    .controller('ApplicationInfoController', ApplicationInfoController)
    .controller('TabsController', TabsController)
    .filter('tata', reverseFilter)
    .filter('toto', TotoFilter)