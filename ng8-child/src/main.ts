import './public-path';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let app = null;
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((res: NgModuleRef<AppModule>) => {
    app = res
  })


// 监听卸载操作
window.addEventListener('unmount', function () {
  app.destroy();
  app = null;
})
