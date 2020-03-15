import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AllapiService {

  constructor(private http: HttpClient) { }

  addEvent = (data) => {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
   
    return this.http
    .post('http://localhost:8080/api/admin/add_events',data, { headers: headers });
  }


}

