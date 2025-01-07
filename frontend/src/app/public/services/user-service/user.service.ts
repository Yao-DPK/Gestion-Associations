import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserI } from '../../../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3001/users'; // Use the proxy path

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  findById(id: number): Observable<UserI[]> {
    return this.http.get<UserI[]>(`${this.baseUrl}/${id}`);
  }

  create(user: UserI): Observable<UserI> {
    return this.http.post<UserI>(this.baseUrl, user).pipe(
      tap((createdUser: UserI) => 
        this.snackbar.open(
          `User ${createdUser.name} created successfully`, 
          'Close', 
          { duration: 2000, horizontalPosition: 'right', verticalPosition: 'top' }
        )
      ),
      catchError(e => {
        this.snackbar.open(
          `User could not be created, due to: ${e.error.message}`, 
          'Close', 
          { duration: 5000, horizontalPosition: 'right', verticalPosition: 'top' }
        );
        return throwError(e);
      })
    );
  }
}