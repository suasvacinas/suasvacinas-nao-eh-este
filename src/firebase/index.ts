import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig = {
  apiKey: "AIzaSyC5Y8D-BlICHOwdPGJIR6bxXdmdMFC93uM",
  authDomain: "suasvacinas.firebaseapp.com",
  databaseURL: "https://suasvacinas.firebaseio.com",
  projectId: "suasvacinas",
  storageBucket: "suasvacinas.appspot.com",
  messagingSenderId: "57819698131"
};

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig, 'suasvacinas')
  ]
})
export class FirebaseModule {}
