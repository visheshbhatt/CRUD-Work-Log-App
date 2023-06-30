import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  postdata(data: any) {
    return this.http.post<any>('http://localhost:3000/posts/', data);
  }
  getdata() {
    return this.http.get<any>('http://localhost:3000/posts/');
  }

  getDataById(id: number) {
    return this.http.get<any>('http://localhost:3000/posts/' + id);
  }

  updatedata(id: number, data: any) {
    return this.http.put<any>('http://localhost:3000/posts/' + id, data);
  }
  deletedata(id: number) {
    return this.http.delete<any>('http://localhost:3000/posts/' + id);
  }
}
