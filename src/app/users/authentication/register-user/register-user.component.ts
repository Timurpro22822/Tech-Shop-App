import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css', '../user-style.css']
})
export class RegisterUserComponent implements OnInit {
  
  
  constructor(private userService: UserService) { }

  registerForm = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl(''),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  public validateControl = (controlName: string) => {
    return this.registerForm.get(controlName)?.invalid && this.registerForm.get(controlName)?.touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.get(controlName)?.hasError(errorName)
  }

  public registerUser = (registerFormValue: any) => {
    const formValues = { ...registerFormValue };
    const user: IUser = {
      email: formValues.email,
      phoneNumber: formValues.phoneNumber,
      password: formValues.password
    };

   
    this.userService.registerUser(user)
    .subscribe({
      next: (_) => alert("Successful registration"),
      error: (err: HttpErrorResponse) => console.log(err.error.errors)
    })
  }
}
