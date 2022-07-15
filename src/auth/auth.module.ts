import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AuthComponent,
        LoginComponent,
        RegisterComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
      FormsModule
    ]
})
export class AuthModule { }
