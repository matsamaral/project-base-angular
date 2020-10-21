import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      state('erro', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(50px, 0)' }),
        animate('700ms 0s ease-in-out')
      ]),
      transition('criado => erro', [
        animate('500ms 0s ease-in-out', keyframes([
          style({ offset: 0.15, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.30, opacity: 1, transform: 'translateY(10px)' }),
          style({ offset: 0.45, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.60, opacity: 1, transform: 'translateY(10px)' }),
          style({ offset: 0.75, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.90, opacity: 1, transform: 'translateY(10px)' }),

          style({ offset: 1, opacity: 1, transform: 'translateY(0)' })

        ]))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  estadoPainel = 'criado';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public entrar(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.estadoPainel = 'erro';

      setTimeout(() => {
        this.estadoPainel = 'criado';
      }, 600);
    }

    else if (this.authService.login(JSON.stringify(this.loginForm.value))) {
      this.router.navigateByUrl('/');
    }
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
