import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './user';
import { UserResponse } from './user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  controllerUrl: string;
  
  constructor(private http: HttpClient) {
    this.controllerUrl = environment.apiUrl + "accounts/"
   }

  //  registerUser(): Observable<IUser[]> {
  //   return this.http.get<IUser[]>(this.controllerUrl + "all")
  //  }

   registerUser(post: IUser): Observable<IUser> {
    return this.http.post<IUser> (this.controllerUrl + "register", post);
   }

}
