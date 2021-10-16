import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseURL = environment.baseURL;

  constructor(private httpClient:HttpClient) { }

  // getRepository(){
    
  // }
  // repositoryRequest(){
  //   interface ApiResponse{
  //     name:string;
  //     description:string;
  //   }

  // getRepositories(username:string): Observable<any[]> {
  //   // let param = new HttpParams();
  //   // param = param.append('username', 'SamTomashi');
  //   return this.httpClient.get<any[]>(`${this.baseURL}users/${username}/repos`, {
  //     // params: param,
  //     // // headers : this.headers,
  //     // withCredentials: true
  //   });
  //  }

  getRepositories(username:string){
    return this.httpClient.get<any[]>(`${this.baseURL}users/${username}/repos`,{
    }).toPromise()
  }
  
}



// getUsers(): Observable<GithubApi[]> {
//   let param = new HttpParams();
//   param = param.append('username', 'SamTomashi');
//   return this.httpClient.get<GithubApi[]>(`https://api.github.io/users`, {
//     params: param,
//     // headers : this.headers,
//     withCredentials: true
//   });
//  }
