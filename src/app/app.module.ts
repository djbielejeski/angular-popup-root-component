import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChildComponent} from './child-component/child.component';
import {PopupComponent} from './shared/components/popup-component/popup.component';
import {PopupService} from './shared/services/popup.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
