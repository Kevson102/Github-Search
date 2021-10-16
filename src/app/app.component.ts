import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GithubSearch';
  username: string = 'Kevson102';
  repositories: any[] = [];
  
  constructor(private searchSerivce: SearchService){

  }
  ngOnInit(): void { 
    this.getRepositories();
  }

  getRepositories(){
    this.searchSerivce.getRepositories(this.username).subscribe((repos)=>{
      // console.log(response)
      this.repositories = repos;
    })
  }
}
