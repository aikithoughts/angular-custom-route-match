import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, UrlSegment } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        matcher: (url) => {
          if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
            return {
              consumed: url,
              posParams: {
                username: new UrlSegment(url[0].path.substr(1), {})
              }
            };
          }

          return null;
        },
        component: ProfileComponent
      }
    ])],
  declarations: [ AppComponent, HelloComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
