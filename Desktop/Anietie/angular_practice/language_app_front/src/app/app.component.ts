import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'language_app_front';
  menuIsVisible = true;

  constructor(private route: Router) {}

  ngDoCheck(): void {
    const routerLink = this.route.url;
    if(routerLink != "/logIn") {
      this.menuIsVisible = true;
      console.log(routerLink);
    }
    else {
      this.menuIsVisible = false;
    }
  }

}
