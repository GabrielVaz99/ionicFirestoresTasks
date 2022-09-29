import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgModule } from '@angular/core';

//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen, } from '@ionic-native/splash-screen';
import { RouteReuseStrategy,  } from '@angular/router';





@NgModule({
  declarations: [],
  imports: [

    IonicModule.forRoot()
  ],
  exports : [
    BrowserModule,
    IonicModule
  ],
  providers: [
     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ]
})
export class CoreModule { }
