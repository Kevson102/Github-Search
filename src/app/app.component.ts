import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from './services/search/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'GithubSearch';
  username: string = 'Kevson102';
  repositories: any[] = [];
  subscription = new Subscription();
  
  constructor(private searchSerivce: SearchService){

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }
  ngOnInit(): void { 
    this.getRepositories();
  }

  getRepositories(){
    // this.subscription.add(
    //   this.searchSerivce.getRepositories(this.username).subscribe((repos)=>{
    //     // console.log(response)
    //     this.repositories = repos;
    //   })
    // )

    this.searchSerivce.getRepositories(this.username).then((response)=>{
      console.log(response)
      this.repositories = response;
    })
  }
}
