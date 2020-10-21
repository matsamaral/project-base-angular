import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatFormFieldModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forChild([{path: '', component: LoginComponent}]),
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
