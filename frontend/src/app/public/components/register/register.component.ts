import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { CustomValidators } from '../../_helpers/custom-validators';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required])
  },
    { validators: CustomValidators.passwordsMatching }
  );


  constructor(private userService: UserService, private router: Router) { }

  register() {
    if (this.form.valid) {
      this.userService.create({
        email: this.email.value,
        password: this.password.value,
        name: this.name.value,
        age: this.age.value,
      }).pipe(
        tap(() => this.router.navigate(['../login']))
      ).subscribe();
    }
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get age(): FormControl {
    return this.form.get('age') as FormControl;
  }

  get passwordConfirm(): FormControl {
    return this.form.get('passwordConfirm') as FormControl;
  }

}