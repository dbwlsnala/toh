import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { JqueryComponent } from './jquery/jquery.component';
import { MydatePipe } from './mydate.pipe';
import { HighligntDirective } from './highlignt.directive';
import {ToasterModule} from 'angular2-toaster';

const routes: Routes =
  [
  {path: 'jquery', component:JqueryComponent},
  {path: 'home', component : HomeComponent },
  {path: 'todo', component : TodoComponent },
  {path: 'heroes', component : HeroesComponent},
    // 관리자 모듈을 lazy-loading
    {
      path: 'admin', loadChildren: './admin/admin.module#AdminModule'
    }
];
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HomeComponent,
    TodoComponent,
    JqueryComponent,
    MydatePipe,
    HighligntDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // ngModel 디렉티브를 갖고 있다.
    RouterModule.forRoot(routes),
    HttpClientModule,
    ToasterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
