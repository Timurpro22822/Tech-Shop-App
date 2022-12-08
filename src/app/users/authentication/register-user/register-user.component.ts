import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  constructor(private userService: UserService) { 
  }
  registerForm = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl(''),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
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
      next: (_) => console.log("Successful registration")})
  }

}
