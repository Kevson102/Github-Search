import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SearchService } from '../services/search/search.service';


@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {

  title = 'GithubSearch';
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


    try{
      const repositories = await this.searchSerivce.getRepositories(this.githubSearchForm.getRawValue().githubUserName);
      this.repositories = repositories;
    }catch(error){
      console.log(error)
    }
  }
  // constructor() { }

  // ngOnInit(): void {
  // }

}
