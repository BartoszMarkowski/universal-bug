import { enableProdMode } from '@angular/core';

import { environment } from '../../environments/environment';
import '@angular/localize/init';
if (environment.production) {
  enableProdMode();
}


//import "./polyfills";

export { AppServerModule } from './app/app.server.module';



