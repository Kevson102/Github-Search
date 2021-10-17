import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseURL = environment.baseURL;
  private apiKey = environment.githubToken;
  private headers = new HttpHeaders();

  constructor(private httpClient:HttpClient) { 
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8').set('Accept', 'application/json').set('Authorization', `Bearer ${this.apiKey}`)
  }

  getRepositories(username:string){
    return this.httpClient.get<any[]>(`${this.baseURL}/users/${username}/repos`,{
    }).toPromise()
  }
}