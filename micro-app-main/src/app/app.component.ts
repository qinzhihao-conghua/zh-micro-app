import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private ngZone: NgZone
  ) { }
  title = 'micro-app-main';

  navgate() {
    // 主应用跳转
    this.ngZone.run(() => {
      // child-vite 和 child-react17子应用为hash路由，这里通过fragment设置hash值
      this.router.navigate(['/app-angular8'])
    })
  }
}
