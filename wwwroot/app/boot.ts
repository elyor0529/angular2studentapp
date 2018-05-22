import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./components/app.component";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router"

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS])
    .then(success => console.log("Bootstrap success"))
    .catch(error => console.error(error));