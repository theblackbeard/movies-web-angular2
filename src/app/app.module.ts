import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeriesService } from './services/series.service';
import { AddSerieComponent } from './add-serie/add-serie.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'series/add-serie', component: AddSerieComponent}
];

const config = {
  apiKey: "AIzaSyAai9sDqZhhJNa_86cXxIHDXEX1e_WDRrw",
  authDomain: "movies-9f021.firebaseapp.com",
  databaseURL: "https://movies-9f021.firebaseio.com",
  projectId: "movies-9f021",
  storageBucket: "movies-9f021.appspot.com",
  messagingSenderId: "1030325236365"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeriesComponent,
    NavbarComponent,
    AddSerieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(config, firebaseAuthConfig)
  ],
  providers: [SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
