/// <reference path="../typings/index.d.ts"/>

import { provideRouter, RouterConfig } from '@angular/router';
import { helloRoutes }                 from './hello/hello.routes';


export const routes: RouterConfig = [
  ...helloRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
