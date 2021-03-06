import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {MatTableModule} from '@angular/material/table';
import {AuthGuard} from './guards/auth.guard';
import { TestTableComponent } from './test-table/test-table.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LogoutService } from './logout.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    TestTableComponent,
    SpinnerComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthGuard,LogoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
