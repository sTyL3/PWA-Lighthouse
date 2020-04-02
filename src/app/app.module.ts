import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PostPhotoComponent } from './pages/post-photo/post-photo.component';
import { MessagingService } from './services/messaging.service';

import * as firebase from 'firebase/app';
import 'firebase/messaging';
import { HttpClientModule } from '@angular/common/http';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    // PAGES
    LoginComponent,
    HomeComponent,
    PostPhotoComponent
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //NgxAuthFirebaseUIModule.forRoot(environment.firebase, () => 'pwasian_firebase_factory', environment.firebaseAuth),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    MessagingService,
    { provide: BUCKET, useValue: 'pwasian.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
