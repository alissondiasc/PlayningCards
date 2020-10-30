import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from 'rxjs';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDbANXmuqLRmu2qySNIA5RR4vII7jJ9fB0',
  authDomain: 'playningcards.firebaseapp.com',
  databaseURL: 'https://playningcards.firebaseio.com',
  projectId: 'playningcards',
  storageBucket: 'playningcards.appspot.com',
  messagingSenderId: '183328916491',
  appId: '1:183328916491:web:d0835f6aee4b57ccdcb30e',
  measurementId: 'G-WSYLJW8WLD'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayingCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
