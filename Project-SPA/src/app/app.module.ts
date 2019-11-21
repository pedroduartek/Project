import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './_services/auth.service';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorIntercepetorProvider } from './_services/error.interceptor';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [AppComponent, NavComponent, RegisterComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [AuthService, ErrorIntercepetorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
