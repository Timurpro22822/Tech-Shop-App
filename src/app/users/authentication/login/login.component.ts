import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) { }

  loginForm = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  public validateControl = (controlName: string) => {
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.get(controlName)?.hasError(errorName)
  }

  public loginUser = (loginFormValue: any) => {
    const formValues = { ...loginFormValue };
    const user: IUser = {
      email: formValues.email,
      password: formValues.password
    };


    this.userService.loginUser(user)
    .subscribe({
      next: (_) => alert("Successful login!"),
      error: (err: HttpErrorResponse) => alert(err.error.errors)
    })
    

  }
}
