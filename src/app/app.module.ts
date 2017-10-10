import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// providers
import { TranslationData } from '../providers/translation-data';
import { HttpModule } from '@angular/http';

// speech recognition native plugin lib
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TranslationHistoryProvider } from '../providers/translation-history/translation-history';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TranslationData,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TranslationHistoryProvider
  ]
})
export class AppModule {}
