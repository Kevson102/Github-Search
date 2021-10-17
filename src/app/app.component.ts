import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from './services/search/search.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'GithubSearch';
  // username: string = 'Kevson102';
  repositories: any[] = [];
  subscription = new Subscription();

  githubSearchForm = new FormGroup({
    githubUserName: new FormControl("")
  })
  
  constructor(private searchSerivce: SearchService){

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }
  ngOnInit(): void { 
    this.getRepositories();
  }

  async getRepositories(){
    // this.subscription.add(
    //   this.searchSerivce.getRepositories(this.username).subscribe((repos)=>{
    //     // console.log(response)
    //     this.repositories = repos;
    //   })
    // )

    try{
      const repositories = await this.searchSerivce.getRepositories(this.githubSearchForm.getRawValue().githubUserName);
      this.repositories = repositories;
    }catch(error){
      console.log(error)
    }
    // console.log(this.githubSearchForm.getRawValue())
  }
}
