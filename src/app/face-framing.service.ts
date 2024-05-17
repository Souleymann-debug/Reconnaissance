import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceFramingService {

  private apiUrl = 'http://127.0.0.1:8000'; // L'URL de votre API FastAPI

  constructor(private http: HttpClient) { }

  getImage(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/faceframing`, { responseType: 'blob' });
  }
    
}
